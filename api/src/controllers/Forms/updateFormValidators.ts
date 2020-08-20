import { IInput } from "../../models/mongoose/input";
import { ArrayNotEmpty, IsArray, IsDefined, IsNotEmpty, validate } from "class-validator";
import { errorCreator } from "../../functions/errors";

export class InputsValidator {
  @IsArray()
  @ArrayNotEmpty()
  inputs: IInput[];

  inputsRes: InputValidator[];

  constructor(inputs: IInput[]) {
    this.inputs = inputs;

    this.inputsRes = inputs.map(input => new InputValidator(input));
  }

  validateInputs = async (): Promise<void> => {
    const errors = [];
    for (const inp of this.inputsRes) {
      const error = await validate(inp);
      errors.push(...error);
    }
    if (errors.length > 0) {
      throw errorCreator('Oooops, Inputs wrong, lol', 422);
    }
  }
}

class InputValidator {
  @IsDefined()
  @IsNotEmpty()
  name: string;

  constructor(input: IInput) {
    this.name = input.name;
  }
}
