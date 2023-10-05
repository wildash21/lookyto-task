import { setModal } from '@/redux/slice'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import useHeroProperty from '@/hooks/useHeroProperty'

import type Hero from '@/types/Hero'
import type PickByType from '@/types/PickByType'

import { classNames } from '@/utils/classNames'
import Skill from '@/components/Characteristics/Skill'
import DecrementZeroSkillErrorModal from '@/components/Modals/DecrementZeroSkillErrorModal'
import ValueMoreThanBindValueErrorModal from '@/components/Modals/ValueMoreThanBindValueErrorModal'

import lang from '@/lang'

import styles from './style.module.scss'

const SkillRow = <Key extends keyof PickByType<Hero, number>>({
    skill,
    showDetailedLevel,
    bindBy,
}: {
    skill: Key
    showDetailedLevel?: boolean
    bindBy?: Key
}) => {
    const [value, setValue] = useHeroProperty(skill)
    const [bindValue] = bindBy ? useHeroProperty(bindBy) : [-1]
    const dispatch = useAppDispatch()

    const increment = () => {
        if (bindValue !== -1 && value + 1 > bindValue) {
            return dispatch(
                setModal(<ValueMoreThanBindValueErrorModal characteristic={bindBy as string} />)
            )
        }
        setValue(value + 1)
    }
    const decrement = () => {
        if (value <= 0) {
            return dispatch(setModal(<DecrementZeroSkillErrorModal />))
        }
        setValue(value - 1)
    }

    return (
        <div className={styles.characteristics__row}>
            {(lang as unknown as Hero)[skill]}
            <div className={styles.characteristics__row__right}>
                <div onClick={decrement} className={classNames(styles.skillButton, styles.minus)}>
                    -
                </div>

                {showDetailedLevel ? (
                    <Skill skill={value} />
                ) : (
                    <div className={styles.characteristics__row__right__level}>{value}</div>
                )}

                <div onClick={increment} className={classNames(styles.skillButton, styles.plus)}>
                    +
                </div>
            </div>
        </div>
    )
}

export default SkillRow
