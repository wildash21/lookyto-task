import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { type State } from '@/redux/slice'

export const useAppSelector: TypedUseSelectorHook<State> = useSelector
