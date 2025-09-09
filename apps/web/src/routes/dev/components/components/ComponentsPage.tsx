import { Button } from "../../../../components/ui/Button";
import styles from "./ComponentsPage.module.css";

export const ComponentsPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>コンポーネント一覧</h1>
        <p className={styles.subtitle}>開発用コンポーネント確認ページ</p>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>UI Components</h2>

          <div className={styles.componentGroup}>
            <h3 className={styles.componentTitle}>Button</h3>
            <div className={styles.examples}>
              <Button onClick={() => alert("Primary!")}>Primary</Button>
              <Button variant="secondary" onClick={() => alert("Secondary!")}>
                Secondary
              </Button>
              <Button variant="outline" onClick={() => alert("Outline!")}>
                Outline
              </Button>
              <Button size="sm" onClick={() => alert("Small!")}>
                Small
              </Button>
              <Button size="lg" onClick={() => alert("Large!")}>
                Large
              </Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Layout Components</h2>
          <div className={styles.componentGroup}>
            <p className={styles.placeholder}>レイアウトコンポーネントがここに表示されます</p>
          </div>
        </section>
      </main>
    </div>
  );
};
