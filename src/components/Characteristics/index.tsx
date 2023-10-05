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
            <SkillRow skill='attack' showDetailedLevel bindBy='power' />
            <SkillRow skill='stealth' showDetailedLevel bindBy='agility' />
            <SkillRow skill='archery' showDetailedLevel bindBy='agility' />
            <SkillRow skill='learning' showDetailedLevel bindBy='intelligence' />
            <SkillRow skill='survivability' showDetailedLevel bindBy='intelligence' />
            <SkillRow skill='medicine' showDetailedLevel bindBy='intelligence' />
            <SkillRow skill='intimidation' showDetailedLevel bindBy='charisma' />
            <SkillRow skill='insight' showDetailedLevel bindBy='charisma' />
            <SkillRow skill='appearance' showDetailedLevel bindBy='charisma' />
            <SkillRow skill='manipulation' showDetailedLevel bindBy='charisma' />
        </div>
    )
}
