import styles from "./styles.module.css";

export function UnderConstruction() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <h1>🌌 sideuniverse</h1>
        <div className={styles.textContainer}>
          <p>
            here is the internet space where we can share our{" "}
            <strong>side projects</strong>
          </p>
          <p>and together improve them with some cool community feedback</p>
        </div>

        <span>also, check my personal website 😄</span>
        <a href="https://www.carmogui.dev/" target="_blank">
          carmogui.dev
        </a>
      </div>
    </div>
  );
}
