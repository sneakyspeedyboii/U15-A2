"use client"

import './globals.css'
import styles from './window.module.css'

import { useState } from 'react';

export const metadata = {
  title: 'Hot Beans',
  description: 'good ol company website',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [renderWindow, setRenderWindow] = useState(true);

  function handle() {
    document.body.style.overflow = "auto";
    setRenderWindow(false);

  }

  if (renderWindow) {
    return (
      <html lang="en">
        <body>
          {children}
          <div className={styles.container}>
            <div className={styles.window_container}>
              <h1>Info about site</h1>
              <div>Website made for assignment and very un-finished</div>
              <div>Ran out of time to perfect the site so this a functional but not the prettiest website.</div>
              <button onClick={() => handle()}>I understand</button>
            </div>
          </div>
        </body>
      </html>
    )
  } else {
    return (
      <html lang="en">
      <body>
        {children}
      </body>
    </html>
    )
  }
}
