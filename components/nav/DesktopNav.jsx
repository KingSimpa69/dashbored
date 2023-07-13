import styles from "../../styles/Nav.module.css"
import { Web3Button, Web3Status } from "./Web3.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Menu } from "."
import { useState } from "react"

export const DesktopNav = ({web3,setWeb3}) => {

    const [menuOpen,setMenuOpen] = useState(true);

    return(
        <>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className={styles.desktopcont}>
                <div className={styles.connectionstatus}><Web3Status web3={web3} /></div>
                <div onClick={()=> {setMenuOpen(!menuOpen)}} className={styles.mbutton}><FontAwesomeIcon icon="fa-solid fa-bars" /></div>
                <div className={styles.dweb3}><Web3Button web3={web3} setWeb3={setWeb3} /></div>
            </div>
        </>
    )
}