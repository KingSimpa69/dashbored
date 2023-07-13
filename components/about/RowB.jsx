import styles from "../../styles/About.module.css"
import {useState} from "react"
import { Faqbox } from "."
import qs from "./faqdata/qs"
import as from "./faqdata/as"

export const RowB = () => {

    const [openedFaq,setOpenedFaq] = useState(0)

    return(<>
        <div className={styles.rowb}>
            <div className={styles.inside}>
                <div className={styles.cont1}>
                    <h1 className={styles.h1}>FAQ&apos;s</h1>
                    <div className={styles.faqboxwrap}>
                    {
                    qs.map((question,index) =>{
                        return(
                        <Faqbox key={index} id={index} openedFaq={openedFaq} setOpenedFaq={setOpenedFaq} question={question} answer={as[index]}/>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
        </div>
    </>)
}