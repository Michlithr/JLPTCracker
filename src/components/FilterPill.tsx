import styles from "./filter-pill.module.scss";
import Topic from "@/types/Topic";

export default function FilterPill({ name }: Topic) {
  return <div className={styles.filterPill}>{name}</div>;
}
