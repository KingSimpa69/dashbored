import styles from "../styles/Main.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StatBox = ({type,value}) => {
    const descriptions =[
        "The current price of PEPE",
        "The total circulating PEPE supply",
        "PEPE's current marketcap",
        "Wallets currently holding PEPE"
    ]
    return(
    <div className={styles.statbox}>
        <div className={styles.statboxtitlecont}>
            <p>{type}</p>
            <FontAwesomeIcon icon={`fa-solid ${
                type === "price" ? "fa-dollar-sign" :
                type === "supply" ? "fa-people-carry-box" :
                type === "marketcap" ? "fa-building-columns":
                type === "holders" ? "fa-people-group":
                null
            }`} />
        </div>
        <div className={styles.statboxstats}>
            {type === "price" ? "$" : null}
            {value}
        </div>
        <div className={styles.statboxdesc}>
            {
                type === "price" ? descriptions[0] :
                type === "supply" ? descriptions[1] :
                type === "marketcap" ? descriptions[2]:
                type === "holders" ? descriptions[3]:
                null
            }
        </div>
    </div>
    )
}