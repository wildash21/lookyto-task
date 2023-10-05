import styles from './style.module.scss'
import lang from '@/lang'

const SkillRawRow = ({ name, children }: { name: string; children?: number }) => {
    return (
        <div className={styles.characteristics__row}>
            {(lang as unknown as Record<string, string>)[name]}
            <div className={styles.characteristics__row__right}>{children}</div>
        </div>
    )
}
export default SkillRawRow
