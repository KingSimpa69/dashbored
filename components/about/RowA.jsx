import styles from "../../styles/About.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image"
import kingsimpa from "../../public/KingSimpa.png"
import soundy from "../../public/soundy.png"

export const RowA = () => {
    
    return(<>
        <div className={styles.rowa}>
            <div className={styles.inside}>
                <div className={styles.cont0}>
                    <h1 className={styles.h1}>Developers</h1>
                    <div className={styles.devcont}>
                    <div className={styles.devpanel}>
                    <div className={styles.outline}>
                            <div className={styles.simpa}>
                            <div className={styles.wutwedo}>
                                Full Stack Web Developer
                            </div>
                            <Image
                                src={kingsimpa}
                                fill={true}
                                priority={true}
                                alt="KingSimpa"
                                sizes="169px"
                            />
                            </div>
                    </div>
                    <p className={styles.devname}>KingSimpa69</p>
                    <div className={styles.devlinks}>
                        <a href="https://twitter.com/KingSimpa" target="_blank"><div className={styles.dlink}><FontAwesomeIcon icon="fa-brands fa-github" /></div></a>
                        <a href="https://www.linkedin.com/in/alexander-charbonneau-202714215/" target="_blank"><div className={styles.dlink}><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></div></a>
                        <a href="https://twitter.com/KingSimpa69" target="_blank"><div className={styles.dlink}><FontAwesomeIcon icon="fa-brands fa-twitter" /></div></a>
                        <a href="https://twitter.com/KingSimpa69" target="_blank"><div className={styles.dlink}><FontAwesomeIcon icon="fa-brands fa-discord" /></div></a>
                    </div>
                    </div>
                    <div className={styles.devpanel}>
                    <div className={styles.outline}>
                    <div className={styles.simpa}>
                    <div className={styles.wutwedo}>
                            Game Developer
                    </div>
                    <Image
                        src={soundy}
                        fill={true}
                        priority={true}
                        alt="Soundy"
                        sizes="169px"
                    />
                    </div>
                    </div>
                    <p className={styles.devname}>Soundy777</p>
                    <div className={styles.devlinks}>
                        <div className={styles.dlink}><FontAwesomeIcon icon="fa-brands fa-github" /></div>
                        <div className={styles.dlink}><FontAwesomeIcon icon="fa-brands fa-discord" /></div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className={styles.cont1}>
                    <h1 className={styles.h1}>Links</h1>
                    <div className={styles.stankylanks}>
                        <p><a target="_blank" href="https://github.com/KingSimpa69/dashbored">Github</a></p>
                        <p>Discord</p>
                        <p>Twitter</p>
                        <p>Threads</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}