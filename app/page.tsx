import ArchetypeCard from "../components/ArchetypeCard";
import type { ArtchetypeData } from "../utils/types";
import { loadCsvData } from "./api/data";
import styles from "./page.module.css";

export default function Home() {
  const data: ArtchetypeData[] = loadCsvData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          {data.map((item: ArtchetypeData, index: number) => (
            <ArchetypeCard key={`${item.archetypeName}-${index}`} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
