import { formatPepeUsd } from "@/utils/formatPepeUsd"
import styles from "../styles/Main.module.css"

const Stat = ({stat,value}) => {

    return(
        <div className={styles.mobilestat}>
            {stat==="Price"?"$":null}{value}
            <div className={styles.mobilestatvalue}>{stat}</div>
        </div>
    )
}

export const MobileStats = ({pepeUsd,supply,marketcap,holders}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      });

    return(
        <div className={styles.mobilestatcont}>
            <Stat stat={"Price"} value={formatPepeUsd(pepeUsd)} />
            <Stat stat={"Supply"} value={supply.toLocaleString()} />
            <Stat stat={"Marketcap"} value={formatter.format(marketcap)} />
            <Stat stat={"Holders"} value={holders.toLocaleString()} />
        </div>
    )
}