import { type ReactNode } from 'react'
import SkillRow from '@/components/Characteristics/SkillRow'
import SkillRawRow from '@/components/Characteristics/SkillRawRow'
import useHeroProperty from '@/hooks/useHeroProperty'

import styles from './style.module.scss'
import lang from '@/lang'

function CharacteristicsCategoryTitle({ children }: { children: ReactNode }) {
    return <div className={styles.characteristics__categoryTitle}>{children}</div>
}

export default function Characteristics() {
    const [power] = useHeroProperty('power')
    const [agility] = useHeroProperty('agility')
    const [intelligence] = useHeroProperty('intelligence')

    const [takenDamage] = useHeroProperty('takenDamage')

    const lifePower = power + 3 - takenDamage
    const dodge = agility + 10
    const energy = agility + intelligence

    return (
        <div className={styles.characteristics}>
            <CharacteristicsCategoryTitle>{lang.characteristics}</CharacteristicsCategoryTitle>
            <SkillRow skill='power' />
            <SkillRow skill='agility' />
            <SkillRow skill='intelligence' />
            <SkillRow skill='charisma' />

            <CharacteristicsCategoryTitle>{lang.params}</CharacteristicsCategoryTitle>
            <SkillRawRow name='lifePower'>{lifePower}</SkillRawRow>
            <SkillRawRow name='dodge'>{dodge}</SkillRawRow>
            <SkillRawRow name='energy'>{energy}</SkillRawRow>

            <CharacteristicsCategoryTitle>{lang.skills}</CharacteristicsCategoryTitle>
            <SkillRow skill='attack' showLevel bindBy='power' />
            <SkillRow skill='stealth' showLevel bindBy='agility' />
            <SkillRow skill='archery' showLevel bindBy='agility' />
            <SkillRow skill='learning' showLevel bindBy='intelligence' />
            <SkillRow skill='survivability' showLevel bindBy='intelligence' />
            <SkillRow skill='medicine' showLevel bindBy='intelligence' />
            <SkillRow skill='intimidation' showLevel bindBy='charisma' />
            <SkillRow skill='insight' showLevel bindBy='charisma' />
            <SkillRow skill='appearance' showLevel bindBy='charisma' />
            <SkillRow skill='manipulation' showLevel bindBy='charisma' />
        </div>
    )
}
