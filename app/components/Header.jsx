import React from 'react'
import styles from "../page.module.scss";
import Image from 'next/image';
import chip from '../../public/Casino_Chip.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Platinum Play</h1>
      <Image 
        src={chip}
        alt='Casino Chip'
        width={35}
        className='logo'
      />
    </header>
  )
}
