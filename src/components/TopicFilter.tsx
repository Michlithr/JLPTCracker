import styles from "./topic-filter.module.scss";
import FilterPill from "@/components/FilterPill";
import Topic from "@/types/Topic";

export default function TopicFilter() {
  const topics: Topic[] = [
    { name: "weather" },
    { name: "noun" },
    { name: "verb" },
  ];

  return (
    <div className={styles.topicFilter}>
      <h2 className={styles.title}>Topics</h2>
      <div className={styles.filters}>
        {topics.map((topic, index) => (
          <FilterPill key={index} {...topic} />
        ))}
      </div>
    </div>
  );
}
