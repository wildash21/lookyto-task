import type Hero from '@/types/Hero'
import { createSlice } from '@reduxjs/toolkit'

interface State {
    data: {
        currentHero: Hero
        currentModal: null | JSX.Element
    }
}

const initialState = () => {
    const defaultHero: Hero = {
        name: 'Хлебушек',
        power: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
        attack: 0,
        stealth: 0,
        archery: 0,
        learning: 0,
        survivability: 0,
        medicine: 0,
        intimidation: 0,
        insight: 0,
        appearance: 0,
        manipulation: 0,
        takenDamage: 0,
    }
    const defaultModal = null

    return {
        currentHero: defaultHero,
        currentModal: defaultModal,
    }
}

const slice = createSlice({
    name: 'data',
    initialState: initialState(),
    reducers: {
        setHeroProp(state, action) {
            return {
                ...state,
                currentHero: { ...state.currentHero, [action.payload.key]: action.payload.value },
            }
        },
        setHero(state, action) {
            return {
                ...state,
                currentHero: { ...action.payload, takenDamage: 0 },
            }
        },
        setModal(state, action) {
            return {
                ...state,
                currentModal: action.payload,
            }
        },
    },
})

export const { setHeroProp, setHero, setModal } = slice.actions
export { initialState }
export type { State }
export default slice.reducer
