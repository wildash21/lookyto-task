import styles from "./style.module.scss";

export default function Background() {
    return (
        <div className={styles.background}>
            {new Array(20).fill(undefined).map((_, index) => (
                <span key={index} />
            ))}
        </div>
    );
}
