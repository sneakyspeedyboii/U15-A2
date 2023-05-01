import styles from './page.module.css';

export default function Employees() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.page_header}>
                    <div className={styles.title}>Our Employees</div>
                    <div className={styles.sub_header}>Here are some of our current workers</div>
                    <div className={styles.sub_sub_header}>We like to be clear and transparent at our company, so we allowed <br /> each employee to talk about themselves for a bit!</div>
                </div>
            </div>
        </main>
    )
}