import styles from './layout.module.css'
import NavBar from './navbar/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className={styles.root_container}>
      <NavBar />
      {children}
    </div>
  )
}
