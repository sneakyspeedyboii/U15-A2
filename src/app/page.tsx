import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>



      <div className={styles.header_container}>
        <span className={styles.gradient}></span>
        <div className={styles.container}>
          <div className={styles.first_container}>
            <div className={styles.name}>Hot Beans</div>
            <div className={styles.header}>Next Generation Web Services</div>
          </div>
          <div>
            <div className={styles.sub_header}>Websites which keep up with you.</div>
            <div className={styles.sub_header}>A better way to showcase your company.</div>
          </div>
          <div className={styles.link_container}>
            <Link className={styles.link} href={"/"}>Meet the team</Link>
            <Link className={styles.link} href={"/"}>Opportunities here</Link>
          </div>
          <div>
            <div>Explore</div>
            <div>svg here</div>
          </div>
        </div>
      </div>

      <div className={styles.info_container}>
        <div className={styles.divider_container}>
          <div className={styles.divider}></div>
          <div className={styles.left_glow}></div>
        </div>

        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.header}>Focusing on your needs</div>
            <div className={styles.sub_header}>You, the client, dictate all the needs. All of them.</div>

            <div className={styles.body}>Not only do you get hands on control on the style, you also get to choose how we develop the site</div>
            <div className={styles.body}>On request, you choose the framework we use to make your website.</div>


          </div>
          <div className={styles.right}>a</div>
        </div>
      </div>


      <div className={styles.info_container}>
        <div className={styles.divider_container}>
          <div className={styles.divider}></div>
          <div className={styles.left_glow}></div>
        </div>

        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.header}>Focusing on your needs</div>
            <div className={styles.sub_header}>You, the client, dictate all the needs. All of them.</div>

            <div className={styles.body}>Not only do you get hands on control on the style, you also get to choose how we develop the site.</div>
            <div className={styles.body}>On request, you choose the framework we use to make your website.</div>


          </div>
          <div className={styles.right}>
            
          </div>
        </div>
      </div>



    </main>
  )
}
