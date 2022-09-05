import styles from "./candle.module.css";

export const Candle = () => (
  <div className={styles["canvas"]} key="candle">
    <div className={styles["center"]}>
      <div className={styles["candle"]}>
        <div className={styles["fire"]}>
          <div className={`${styles.red} ${styles.flame}`}></div>
          <div className={`${styles.orange} ${styles.flame}`}></div>
          <div className={`${styles.yellow} ${styles.flame}`}></div>
          <div className={`${styles.white} ${styles.flame}`}></div>
        </div>
        <div className={styles["candle-wick"]}></div>
        <div className={styles["candle-wax"]}></div>
      </div>
    </div>
  </div>
);
