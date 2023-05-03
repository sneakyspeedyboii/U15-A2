import styles from './page.module.css';

import Image from 'next/image';

export default function Employees() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.page_header}>
                    <div className={styles.title}>Our Employees</div>
                    <div className={styles.sub_header}>Here are some of our current workers</div>
                    <div className={styles.sub_sub_header}>We like to be clear and transparent at our company, so we allowed <br /> each employee to talk about themselves for a bit!</div>
                </div>
                <div className={styles.employees}>

                    <div className={styles.employee}>
                        <div className={styles.employee_info_container}>
                            <div className={styles.name}>John Doe</div>
                            <div className={styles.position}>CEO</div>
                            <div className={styles.company_info}>Our thoughts: good ol john, we get paid to do the work for him, and then sometimes hes make decisions on what the company does.</div>
                            <div className={styles.personal_description}>"Man i love hot beans" - John Doe</div>
                            <div className={styles.email}>john@hotbeans.org.uk</div>
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image}><Image src={"/employee/man1.png"} alt='man' fill={true}></Image></div>
                        </div>
                    </div>

                    <div className={styles.employee}>
                        <div className={styles.employee_info_container}>
                            <div className={styles.name}>Jane doe</div>
                            <div className={styles.position}>CTO</div>
                            <div className={styles.company_info}>Does the ceo stuff for john</div>
                            <div className={styles.personal_description}>Yippee</div>
                            <div className={styles.email}>jane@hotbeans.org.uk</div>
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image}><Image src={"/employee/woman1.jpg"} alt='man' fill={true}></Image></div>
                        </div>
                    </div>

                    <div className={styles.employee}>
                        <div className={styles.employee_info_container}>
                            <div className={styles.name}>Man</div>
                            <div className={styles.position}>Dev manager</div>
                            <div className={styles.company_info}>Our guy that makes our developers develop. He does a good job</div>
                            <div className={styles.personal_description}>"🦀🦀🦀🦀🦀🦀🦀🦀" - Man</div>
                            <div className={styles.email}>man@hotbeans.org.uk</div>
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image}><Image src={"/employee/man2.png"} alt='man' fill={true}></Image></div>
                        </div>
                    </div>

                    <div className={styles.employee}>
                        <div className={styles.employee_info_container}>
                            <div className={styles.name}>Man2</div>
                            <div className={styles.position}></div>
                            <div className={styles.company_info}>Our thoughts: good ol john, we get paid to do the work for him, and then sometimes hes make decisions on what the company does.</div>
                            <div className={styles.personal_description}>"Man i love hot beans" - John Doe</div>
                            <div className={styles.email}>john@hotbeans.org.uk</div>
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image}><Image src={"/employee/man3.jpg"} alt='man' fill={true}></Image></div>
                        </div>
                    </div>

                    <div className={styles.employee}>
                        <div className={styles.employee_info_container}>
                            <div className={styles.name}>John Doe</div>
                            <div className={styles.position}>CEO</div>
                            <div className={styles.company_info}>Our thoughts: good ol john, we get paid to do the work for him, and then sometimes hes make decisions on what the company does.</div>
                            <div className={styles.personal_description}>"Man i love hot beans" - John Doe</div>
                            <div className={styles.email}>john@hotbeans.org.uk</div>
                        </div>
                        <div className={styles.image_container}>
                            <div className={styles.image}><Image src={"/employee/woman2.jpg"} alt='man' fill={true}></Image></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}