import styles from "./explore-layout.module.scss";
import Header from "@/components/Header";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.explorePage}>
      <Header />
      <main className={styles.content}>{children}</main>
    </div>
  );
}
