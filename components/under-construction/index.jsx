import styles from "./styles.module.css";

export function UnderConstruction() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1>🌌 sideuniverse</h1>

          <br />

          <div className={styles.textContainer}>
            <p>
              this will be the internet space where we can share our{" "}
              <strong>side projects</strong>
            </p>
            <p>and together improve them with some cool community feedback</p>
          </div>
        </div>

        <div className={styles.warningWrapper}>
          <h2>⚠️ currently working on the API and some configurations ⚠️</h2>
          <li>
            <a href="api/v1/status" target="_blank">
              api/v1/status
            </a>
          </li>
        </div>
        <div className={styles.warningWrapper}>
          <h2>🚗 you can check the roadmap here 🗺️</h2>

          <a
            href="https://github.com/carmogui/sideuniverse/milestones"
            target="_blank"
          >
            sideuniverse/milestones
          </a>
        </div>

        <div className={styles.endContainer}>
          <span>also, check my personal website 😄</span>
          <a
            className={styles.buttonLink}
            href="https://www.carmogui.dev/"
            target="_blank"
          >
            carmogui.dev
          </a>
        </div>
      </div>
    </div>
  );
}
