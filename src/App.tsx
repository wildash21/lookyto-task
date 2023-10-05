import { createPortal } from 'react-dom'
import { useAppSelector } from '@/hooks/useAppSelector'

import Characteristics from '@/components/Characteristics'
import HeroOverview from '@/components/HeroOverview'
import Background from '@/components/Background'

import lang from '@/lang'
import styles from '@/App.module.scss'

function scrollToCharacteristics() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
}

function Left() {
    return (
        <div className={styles.view__left}>
            <HeroOverview />
            <div className={styles.view__left__swipeToView} onClick={scrollToCharacteristics}>
                {lang.characteristicsShort}
            </div>
        </div>
    )
}

function Right() {
    return (
        <div className={styles.view__right}>
            <Characteristics />
        </div>
    )
}

function App() {
    const currentModal = useAppSelector((state) => state.data.currentModal)
    return (
        <>
            {createPortal(currentModal, document.body)}
            <Background />
            <div className={styles.view}>
                <Left />
                <Right />
            </div>
        </>
    )
}

export default App
