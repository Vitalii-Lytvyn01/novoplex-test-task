import Image from "next/image";
import styles from "./page.module.scss";
import Header from './components/Header.jsx';
import GamesList from "./components/GamesList/GamesList";

export default function Home() {
  return (
    <main className='main'>
      <Header/>
      <GamesList />
    </main>
  );
}
