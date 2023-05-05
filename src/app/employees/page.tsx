import Image, { StaticImageData } from 'next/image';

import styles from './employees.module.css';

import Man1 from '../../../public/employees/man1.png';
import Man2 from '../../../public/employees/man2.png';
import Man3 from '../../../public/employees/man3.jpg';
import Woman1 from '../../../public/employees/woman1.jpg';
import Woman2 from '../../../public/employees/woman2.jpg';

export default function Employees() {
    return (
        <main className={styles.main}>
            <div className={styles.header_container}>
                <span className={styles.gradient}></span>
                <div className={styles.container}>
                    <div className={styles.header}>Meet our Team!</div>
                    <div>
                        <div className={styles.sub_header}>Our way of being transparent</div>
                        <div className={styles.sub_header}>We would like to give credit to the all the members of our team, which perform outstanding work to keep the company afloat!</div>
                    </div>
                </div>
            </div>

            <div className={styles.info_container}>
                <div className={styles.divider_container}>
                    <div className={styles.divider}></div>
                    <div className={styles.left_glow}></div>
                </div>

                <div className={styles.employees}>
                    <Employee name={'John Doe'} position={'Ceo'} time={'17'} image={Man1}/>
                    <Employee name={'John Doe'} position={'COO'} time={'15'} image={Woman1}/>
                    <Employee name={'John Doe'} position={'CAO'} time={'6 '} image={Man2}/>
                    <Employee name={'John Doe'} position={'Lead Developer'} time={'8'} image={Man3}/>
                    <Employee name={'John Doe'} position={'Sales Manager'} time={'3'} image={Woman2}/>
                    
                </div>
            </div>
        </main >
    )
}

function Employee({name, position, time, image}: {name: string, position: string, time: string, image: StaticImageData}) {
    return (
        <div className={styles.employee}>
            <div className={styles.image_container}><Image src={image} alt={name} fill={true} /></div>
            <div className={styles.info}>
                <div className={styles.name}>{name}</div>
                <div className={styles.position}>{position}</div>
                <div className={styles.time}>Working for {time} Years <br/> at the company</div>
            </div>
        </div>
    )
}