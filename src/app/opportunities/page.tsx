'use client'

import { useRef } from 'react'
import styles from './page.module.css'


export default function Home() {
  const adv_typing = useRef(null)

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.first_container}>
          <div className={styles.title}>Job Opportunities</div>
          <div className={styles.sub_header}>Looking for new employment?</div>
          <div className={styles.sub_sub_header}>Come have a look at our list of available positions <br /> which you might want to take a look at.</div>
        </div>
        <div className={styles.second_container}>
          <div className={styles.title}>UI/UX Development Jobs</div>
          <div className={styles.sub_header}>A job which allows you to let loose your creativity! (Within the clients requirements)</div>
          <div className={styles.grid}>

            <div className={styles.grid_item}>
              <div className={styles.title}>Lead Dev</div>
              <div className={styles.sub}>Pay: Very Good</div>
              <div className={styles.body}>The main developer, our guy who decides the projects general theme and interface layout.</div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.title}>Junior developer</div>
              <div className={styles.sub}>Pay: Good</div>
              <div className={styles.body}>Sub Developer, the guy who will work on a part of the site.</div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.title}>Artwork designer</div>
              <div className={styles.sub}>Pay: Alright</div>
              <div className={styles.body}>Our guy who draws the audiences eyes in! Or not, hence why this job is open.</div>
            </div>
          </div>
        </div>
        <div className={styles.third_container}>
          <div className={styles.title}>Backend Development Jobs</div>
          <div className={styles.sub_header}>One of the complicated jobs where the user had know idea how long it took you to make it secure. <br />Should had become a engineer instead. </div>
          <div className={styles.grid}>

            <div className={styles.grid_item}>
              <div className={styles.title}>API dev</div>
              <div className={styles.sub}>Pay: Billion</div>
              <div className={styles.body}>Rust, It is designed to be fast and reliable,   with a strong focus on memory safety and thread safety. </div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.title}>GO developer</div>
              <div className={styles.sub}>Pay: Awful</div>
              <div className={styles.body}>Please stop using this language, migrate to Rust</div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.title}>Neural network developer</div>
              <div className={styles.sub}>Pay: Decent</div>
              <div className={styles.body}>We are experimenting with new tech, we decided to use the most complicated language we could think off, apart from assembly.</div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.title}>ML dev</div>
              <div className={styles.sub}>Pay: Decent</div>
              <div className={styles.body}>We steal peoples data, therefore we need an AI model. Language required is python of course</div>
            </div>

            <div className={styles.grid_item}>
              <div className={styles.title}>Database manager</div>
              <div className={styles.sub}>Pay: Mid</div>
              <div className={styles.body}>Please don&apos;t drop the database like our last developer did.</div>
            </div>
          </div>
        </div>

        <div className={styles.fourth_container}>
          <div className={styles.text}>
            <div className={styles.title}>Need a job?</div>
            <div className={styles.sub_header}>We are currently hiring, please fill in the form below to get your career started!</div>
            <div className={styles.sub_sub_header}>One of our employees will get back to you in a few working days.</div>
          </div>
          <div className={styles.form_container}>
            <div className={styles.form}>
              <input type="text" placeholder='Firstname' />
              <input type="text" placeholder='Surname' />
              <input type="date" placeholder='Date of Birth' />
              <input type="email" placeholder='Email' />
              <input type="tel" placeholder='Number (UK only)' pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
