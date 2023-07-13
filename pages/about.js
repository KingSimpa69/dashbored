import styles from "../styles/About.module.css"
import {RowA,RowB} from "@/components/about"

export default function about (){
    return(
    <div className={styles.body}>
        <RowA/>
        <RowB/>
    </div>)
}