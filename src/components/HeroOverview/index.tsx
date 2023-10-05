import { useRef, useState } from 'react'
import Lottie from 'lottie-react'
import { saveAs } from 'file-saver'
import { setHero, setModal } from '@/redux/slice'

import useHeroProperty from '@/hooks/useHeroProperty'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

import ChangeNameModal from '@/components/Modals/ChangeNameModal'
import DoneModal from '@/components/Modals/DoneModal'
import { classNames } from '@/utils/classNames'

import lang from '@/lang'

import stickerData from '@/sticker.json'
import styles from './style.module.scss'

export default function HeroOverview() {
    const [name] = useHeroProperty('name')
    const [takenDamage, setTakenDamage] = useHeroProperty('takenDamage')
    const [striked, setStriked] = useState(false)
    const dispatch = useAppDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    const heroData = useAppSelector((state) => state.data.currentHero)

    function changeName() {
        dispatch(setModal(<ChangeNameModal />))
    }

    function strike() {
        setTakenDamage(takenDamage + 1)
        setStriked(true)
        setTimeout(() => setStriked(false), 200)
    }

    function exportHero() {
        const data: Record<string, unknown> = { ...heroData }
        delete data.takenDamage
        saveAs(new Blob([JSON.stringify(heroData)]), 'hero.json')
    }

    function importHero() {
        const reader = new FileReader()
        reader.onload = () => {
            dispatch(setHero(JSON.parse(reader.result as string)))
            dispatch(setModal(<DoneModal />))
        }
        reader.readAsText(inputRef.current!.files![0])
    }

    return (
        <>
            <Lottie
                className={classNames(styles.heroLottie, striked && styles.striked)}
                animationData={stickerData}
                loop
            />
            <div className={styles.heroName}>
                {name}
                <div className={styles.heroName__btn} onClick={changeName}>
                    {lang.changeName}
                </div>
                <div className={styles.heroName__btn} onClick={strike}>
                    {lang.strike}
                </div>
                <div className={styles.heroName__btn} onClick={exportHero}>
                    {lang.export}
                </div>
                <div className={styles.heroName__btn} onClick={() => inputRef.current!.click()}>
                    {lang.import}
                </div>
            </div>
            <input
                style={{ display: 'none' }}
                ref={inputRef}
                type='file'
                accept='application/json'
                onChange={importHero}
            />
        </>
    )
}
