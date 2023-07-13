import React, {useEffect,useState} from 'react'
import { useRouter } from 'next/router'
import { delay } from '@/utils/delay'
import styles from "../../styles/Nav.module.css"

export const Menu = ({menuOpen,setMenuOpen}) => {

    const router = useRouter()

    const [css1, setCss1] = useState("hidden");
    const [css2, setCss2] = useState("");

    const openNav = async (closed) => {
        if (closed) {
            setCss1("");
            setCss2("animate__animated animate__fadeInDown animate__faster");
        }
        if (!closed) {
            setCss2("animate__animated animate__fadeOutUp animate__faster");
            await delay(420)
            setCss1("hidden");
        }
      };

      const changePage = async (page) =>{
        router.push(`${page}`)
        await delay(200)
        setMenuOpen(!menuOpen)
      }

      useEffect(()=>{
        openNav(!menuOpen)
      },[menuOpen])

  return (
    <div className={`${styles.menucont} ${styles[css1]} ${css2}`}>
        <div onClick={()=>changePage("/")} className={router.pathname !== "/" ? styles.menuitem : styles.menuitemcurrent}>Dashboard</div>
        <div onClick={()=>changePage("/about")} className={router.pathname !== "/about" ? styles.menuitem : styles.menuitemcurrent}>About</div>
        <div onClick={()=>changePage("/flappy")} className={router.pathname !== "/flappy" ? styles.menuitem : styles.menuitemcurrent}>Flappy Pepe</div>
    </div> 
  )
}
