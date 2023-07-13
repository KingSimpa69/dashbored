import styles from "../../styles/About.module.css"
import { useState,useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Faqbox = ({openedFaq,setOpenedFaq,id,question,answer}) => {

    const [open,setOpen] = useState(true)
    const [css0,setCss0] = useState("")
    const [css1,setCss1] = useState("")

    const checkIt = () => {
        if (openedFaq === id) {
            setOpen(false)
            setCss1("");
            setCss0("animate__animated animate__fadeInDown animate__faster");
        }
        if (openedFaq !== id) {
            setOpen(true)
            setCss0("");
            setCss1("hidden");
        }
      };

    useEffect(()=>{
        checkIt()
    },[openedFaq])

    return(
        <div className={styles.faqboxcont}>
            <div onClick={()=>{setOpenedFaq(id)}} className={styles.faqboxhead}>
                <p>{question}</p>
                <div className={styles.chevron}>
                    <FontAwesomeIcon 
                        icon={`fa-solid ${open ? "fa-chevron-up" : "fa-chevron-down"}`} />
                </div>
            </div>
            <div className={`${styles.faqboxfaq} ${styles[css1]} ${css0}`}>
                {answer}
            </div>
        </div>
    )
}