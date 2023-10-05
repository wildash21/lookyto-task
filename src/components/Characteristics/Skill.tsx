import styles from './style.module.scss'
import lang from '@/lang'

const skills: Record<number, string> = {
    0: lang.notTrained,
    1: lang.newbie,
    2: lang.learner,
    3: lang.adept,
    4: lang.expert,
    5: lang.master,
}

export default function Skill({ skill }: { skill: number }) {
    return (
        <>
            <span className={styles.shortLevel}>{skill}</span>
            <span className={styles.detailedLevel}>({skills[skill]})</span>
        </>
    )
}
