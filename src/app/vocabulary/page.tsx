import styles from "./page.module.scss";

import ExploreLayout from "@/layouts/ExploreLayout";

import TopicFilter from "@/components/TopicFilter";
import WordCard from "@/components/WordCard";

import Word from "@/types/Word";

export default function Home() {
  const words: Word[] = [
    { kanji: "車", reading: "くるま", translation: "car", topic: ["noun"] },
    { kanji: "車", reading: "くるま", translation: "car", topic: ["noun"] },
    // add more items as needed
  ];

  return (
    <ExploreLayout>
      <div>
        <h1>Vocabulary</h1>
        <TopicFilter />
        <div className={styles.vocabularyList}>
          {words.map((word, index) => (
            <WordCard key={index} {...word} />
          ))}
        </div>
      </div>
    </ExploreLayout>
  );
}
