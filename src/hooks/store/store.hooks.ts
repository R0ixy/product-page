import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


import { AppDispatch } from '@store/store';
import { store } from '@store/store';
type RootState = ReturnType<typeof store.getState>;

const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };