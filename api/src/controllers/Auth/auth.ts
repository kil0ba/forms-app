import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import nodemailer from 'nodemailer';
import  sendGridTransport from 'nodemailer-sendgrid-transport';

import { MAILER_API_KEY as api_key, TOKEN_SECRET_KEY } from "../../configuration";
import User from "../../models/mongoose/user";

import { errorCatch, errorCreator } from "../../functions/errors";
import { SignUpValidator } from "./authValidators";

const mailTransporter = nodemailer.createTransport(sendGridTransport({
  auth: {
    api_key
  }
}));

export const signUp = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
  const email: string = req.body.email;
  const name: string = req.body.name;
  const password: string = req.body.password;

  const signUpBody = new SignUpValidator(email, name, password);

  try {
    const validationError = await validate(signUpBody)

    if (validationError.length > 0) {
      throw errorCreator('Validation failed; ' + validationError, 422);
    }

    const hasUser = await User.findOne({ email });
    if (hasUser) {
      throw errorCreator('User exists', 400);
    }
    const newUser = new User({
      email,
      password,
      name
    });
    const result = await newUser.save();
    res.status(201).json({ message: 'User created!', userId: result._id });
    return mailTransporter.sendMail({
      to: email,
      from: 'auth@forms-builder.com',
      subject: 'Signup succeeded!',
      html: '<h1>You successfully signup!</h1>'
    }).then(_mailRes => {
      console.info('EMAIL SEND TO ' + email);
    })
  } catch (err) {
    errorCatch(err, next);
  }
};

export const login = async(req: Request, res: Response, next: NextFunction): Promise<any> => {
  const email: string = req.body.email;
  const password: string = req.body.password;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      errorCreator('Wrong Password', 400);
    }
    const userId = user._id.toString();

    const token = jwt.sign({
        email: user.email,
        userId
      },
      TOKEN_SECRET_KEY,
      { expiresIn: '7d' });
    const answer = { message: 'Login success', token, userId };
    res.status(200).json(answer);
    return answer;
  } catch (err) {
    errorCatch(err, next);
    return err;
  }
};
