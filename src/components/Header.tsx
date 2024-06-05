import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={`${styles.homeIcon} material-symbols-outlined`}>
          home
        </span>
      </Link>
      <div className={styles.navLinksContainer}>
        <Link href="/kanji" className={styles.navLink}>
          Kanji
        </Link>
        <Link href="/vocabulary" className={styles.navLink}>
          Vocabulary
        </Link>
        <Link href="/grammar" className={styles.navLink}>
          Grammar
        </Link>
      </div>
    </header>
  );
}
