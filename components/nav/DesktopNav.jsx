import styles from "../../styles/Nav.module.css"
import { Web3Button, Web3Status } from "./Web3.jsx"

export const DesktopNav = ({web3,setWeb3}) => {
    return(
        <div className={styles.desktopcont}>
            <div className={styles.connectionstatus}><Web3Status web3={web3}/></div>
            <div className={styles.dtitle}>PEPE&apos;S Dashboard</div>
            <div className={styles.dweb3}><Web3Button web3={web3} setWeb3={setWeb3}/></div>
        </div>
    )
}