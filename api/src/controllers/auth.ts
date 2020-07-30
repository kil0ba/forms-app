import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from "express";
import User from "../models/mongoose/user";

import {errorCatch} from "../functions/errors";
import {OptionsJson} from "body-parser";
import {SignUpValidator} from "./validators/authValidators";
import {validate} from "class-validator";

export const signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const email: string = req.body.email;
  const name: string = req.body.name;
  const password: string = req.body.password;

  const signUpBody = new SignUpValidator(email, name, password);

  try {
    const validationError = await validate(signUpBody)

    if (validationError.length > 0) {
      throw new Error('Validation failed; ' + validationError);
    }

    const hasUser = await User.findOne({email});
    if (hasUser) {
      throw new Error('User exists');
    }
    const newUser = new User({
      email,
      password,
      name
    });
    const result = await newUser.save();
    res.status(201).json({message: 'User created!', userId: result._id});

  } catch (err) {
    errorCatch(err, next);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const email: string = req.body.email;
  const password: string = req.body.password;

  try {
    const user = await User.findOne({email});

    if (!user || user.password !== password) {
      const error = new Error('Wrong Password');
      // error.statusCode = '422';
      throw error;
    }
    const token = jwt.sign({
        email: user.email,
        userId: user._id.toString()
      },
      'superPuperSecret',
      {expiresIn: '5h'});
    const answer = {message: 'Login success', token};
    res.status(200).json(answer as OptionsJson);
    return answer;
  } catch (err) {
    errorCatch(err, next);
    return err;
  }
};
