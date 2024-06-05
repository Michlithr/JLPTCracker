import styles from "./word-card.module.scss";
import Word from "@/types/Word";

export default function WordCard({ kanji, reading, translation }: Word) {
  return (
    <div className={styles.card}>
      <p className={styles.kanji}>{kanji}</p>
      <p className={styles.reading}>{reading}</p>
      <p className={styles.translation}>{translation}</p>
    </div>
  );
}
