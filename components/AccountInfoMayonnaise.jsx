import styles from "../styles/Main.module.css"
import { useState, useEffect } from "react"
import { formatEther,parseEther } from "ethers";
import { Contract } from "ethers";
import PEPE from "../abi/PEPE.json"
import { formatEth } from "@/utils/formatEth";
import { formatPepe } from "@/utils/formatPepe";
import { shortenEthAddy } from "@/utils/shortenEthAddy";
import { delay } from "@/utils/delay";

export const AccountInfoMayonnaise = ({web3, viewPort, ethPrice, pepeUsd}) => {

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

const [expanded,setExpanded] = useState(true);
const [ethBalance,setEthBalance] = useState(0)
const [ethValue,setEthValue] = useState(0)
const [pepeBalance,setPepeBalance] = useState(0)
const [pepeValue,setPepeValue] = useState(0)

const [css1, setCss1] = useState("hidden");
const [css2, setCss2] = useState("");

const showHide = (closed) => {
    if (closed) {
      setCss1("");
      setCss2("animate__animated animate__fadeInDown animate__faster");
    }

    if (!closed) {
      setCss2("animate__animated animate__fadeOutUp animate__faster");
      setTimeout(() => {
        setCss1("hidden");
      }, "420");
    }
  };

// Get ETH account info

const getEthValue = async (ethB) => {
    setEthValue(formatter.format(parseFloat(formatEther(parseEther(ethB.toString())*ethPrice))/10**18))
}

const getEthBalance = async() => {
    const ethBal = parseFloat(formatEther(await web3.provider.getBalance(web3.address)))
    setEthBalance(ethBal)
    getEthValue(ethBal)
}

useEffect(()=>{
    getEthBalance()
},[ethPrice])

// Get PEPE account info

const getPepeValue = async (pepeB) => {
    const pepeValueMeal = pepeB*pepeUsd
    pepeValueMeal >= 0.01 ? setPepeValue(formatter.format(pepeValueMeal)) : setPepeValue(formatter.format(0.00))
}

const getPepeBalance = async() => {
    const smartPepe = new Contract("0x6982508145454Ce325dDbE47a25d4ec3d2311933", PEPE.abi, web3.provider);
    const pepeBal = parseFloat(formatEther(await smartPepe.balanceOf(web3.address)))
    setPepeBalance(pepeBal)
    getPepeValue(pepeBal)
}

useEffect(()=>{
    getPepeBalance()
},[pepeUsd])

useEffect(()=>{
    showHide(!expanded)
},[expanded])

return(
    <div className={styles.mayocont}>
    <div className={styles.accountInfoMayonnaise}>
      <div onClick={()=>{setExpanded(!expanded)}} className={styles.addybox}>{viewPort === "phone" ? shortenEthAddy(web3.address) : web3.address}</div>
      <div className={`${styles.infobox} ${styles.borderright} ${styles[css1]} ${css2}`}>
        {formatEth(ethBalance)} ETH
        <p className={styles.infoboxdesc}>Balance</p>
      </div>
      <div className={`${styles.infobox} ${styles.borderleft} ${styles[css1]} ${css2}`}> 
        {ethValue}
        <p className={styles.infoboxdesc}>Value</p>
      </div>
      <div className={`${styles.infobox} ${styles.borderleft} ${styles[css1]} ${css2}`}>
        {formatPepe(pepeBalance)} PEPE
        <p className={styles.infoboxdesc}>Balance</p>
      </div>
      <div className={`${styles.infobox} ${styles.borderleft} ${styles[css1]} ${css2}`}>
        {pepeValue}
        <p className={styles.infoboxdesc}>Value</p>
      </div>
    </div>
    </div>
)
}

