import styles from "./exploreLayout.module.scss";
import Header from "@/components/header";

export default function ExploreLayout({
  children, // will be a page or nested layout
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
