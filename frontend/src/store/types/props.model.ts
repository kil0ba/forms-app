import { ReducerModel } from "../reducers/reducer.model";

export type MapStateToPropsModel<T> = (state: ReducerModel) => Partial<T>
