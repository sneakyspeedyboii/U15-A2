import styles from './layout.module.css'
import NavBar from './navbar/navbar'
import Footer from './footer/footer'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className={styles.root_container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
