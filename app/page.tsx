import Image from "next/image";
import styles from "./page.module.scss";
import Header from './components/Header.jsx';
import GamesSearch from './components/GamesList/GamesSearch';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <GamesSearch />
    </main>
  );
}
