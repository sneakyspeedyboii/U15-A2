"use client";

import { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.intro_container}>
        <div className={styles.left_container}>
          <div className={styles.title}>Hot Beans</div>
          <div className={styles.sub_header}>Next Generation Web Services</div>
          <div className={styles.sub_sub_header}>Get ready for a website which will finally show what your company is capable off.</div>
        </div>
        <div className={styles.right_container}>

          <div className={styles.typing}>
            <div className={styles.header}>We help with:</div>
            <div>fix later</div>
          </div>

          <div className={styles.console}>console text here</div>
        </div>
      </div>

      <div className={styles.about_one_container}>
        <div className={styles.left_container}>
          <div className={styles.orbit_container}>
            <div className={styles.center}>c</div>
            <div>
              <ul className={styles.ring}>
                <li className={styles.icon}><div>react</div></li>
                <li className={styles.icon}><div>vue</div></li>
                <li className={styles.icon}><div>angular</div></li>
                <li className={styles.icon}><div>svlete</div></li>
                <li className={styles.icon}><div>solid</div></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.right_container}>
          <div className={styles.title}>Focused on both the user and the client</div>
          <div className={styles.sub_header}>We allow you, the client, to choose which framework we use, allowing your future developers to edit and change the site to your needs in the future</div>
          <div className={styles.sub_sub_header}>idk more advertisement text here and then about the compnay filller</div>
        </div>
      </div>
    </main>
  )
}
