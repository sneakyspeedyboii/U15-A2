"use client";

import { usePathname, useSearchParams } from 'next/navigation';

import styles from './template.module.css';
import NavBar from './components/navbar/navbar';
import { useEffect } from 'react';

export default function Template({ children }: {
  children: React.ReactNode
}) {
  const pathName = usePathname();

  if (pathName === "/") {
    return (
      <div className={styles.root}>
        <NavBar is_home={true}/>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.root}>
        <NavBar is_home={false}/>
        <div className={styles.container}>
          {children}
        </div>
      </div>
    );
  }

  
}
