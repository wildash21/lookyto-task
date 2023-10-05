import { setHeroProp } from '@/redux/slice'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'

import type Hero from '@/types/Hero'

export default function useHeroProperty<Key extends keyof Hero>(key: Key) {
    const prop = useAppSelector((state) => state.data.currentHero[key])
    const dispatch = useAppDispatch()

    const setProp = (newProp: Hero[Key]): void => {
        dispatch(setHeroProp({ key, value: newProp }))
    }
    return [prop, setProp] as const
}
