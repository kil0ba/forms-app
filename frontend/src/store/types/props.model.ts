import { ReducerModel } from "../reducers/reducer.model";

export type MapStateToProps<T> = (state: ReducerModel) => Partial<T>
