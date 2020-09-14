import { IInput } from "../../../models/mongoose/input";
import { ArrayMinSize, IsArray, IsDefined, IsNotEmpty, validate } from "class-validator";
import { errorCreator } from "../../../functions/errors";

export class InputsValidator {
  @IsArray()
  @ArrayMinSize(1)
  inputs: IInput[];

  inputsRes: InputValidator[];

  constructor(inputs: IInput[]) {
    this.inputs = inputs;

    this.inputsRes = inputs.map(input => new InputValidator(input));
  }

  /**
   * Выбросит ошибку если будут ошибки валидации
   */
  validate = async (validatableClass: InputsValidator = undefined): Promise<void> => {
    const errors = [];
    let classError = [];
    if (validatableClass) {
      classError = await validate(validatableClass);
    }
    for (const inp of this.inputsRes) {
      const error = await validate(inp);
      errors.push(...error);
    }
    if (errors.length > 0 || classError.length > 0) {
      throw errorCreator('Error in validate inputs', 422);
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
