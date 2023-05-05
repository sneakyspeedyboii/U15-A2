/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useEffect, useState } from 'react';
import styles from './onload.module.css';

export default function onLoad() {

    const [open, setOpen] = useState(false);

    function handle() {
        setOpen(false);
    }

    useEffect(() => {
        setOpen(true)
    }, []);

    if (open) {
        return (
            <div className={styles.container}>
                <div className={styles.window}>
                    <div className={styles.header}>Notes about this site.</div>
                    <div className={styles.info}>This site is for my assignment</div>
                    <div className={styles.info}>This current site theme has been completely re-worked, and I have had only 4 days to finish and complete this site. Therefore expect some bugs, and it to be not fully responsive.</div>
                    <button onClick={() => handle()}>I Understand.</button>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }


}