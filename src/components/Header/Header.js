import { Avatar } from '@mui/material'
import styles from '../../../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.flexbox}>
                <div className={styles.logoowl}>
                    <Image src={"/svg/owl.svg"} alt={"Owl logo"} width={'64px'} height={'64px'}/>
                </div>
                <div className={styles.homelogo}>Joaquín Rodriguez</div>
            </div>
            <div className={styles.tabscontainer}>
                <div className={styles.tab}>Me</div>
                <div className={styles.tab}>Studies</div>
                <div className={styles.tab}>Work</div>
                <div className={styles.tab}>Hobies</div>
            </div>
        </div>
    )
}

export default Header