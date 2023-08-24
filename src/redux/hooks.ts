import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./store";
import { RootState } from "./rootReducer";

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
