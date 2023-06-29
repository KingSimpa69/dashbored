import styles from "../styles/Main.module.css"
import { useState, useEffect } from "react"
import { formatEther,parseEther } from "ethers";
import { Contract } from "ethers";
import PEPE from "../abi/PEPE.json"
import { delay } from "@/utils/delay";

export const AccountInfoMayonnaise = ({web3, viewPort, ethPrice, pepeUsd}) => {

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});

const [expanded,setExpandeded] = useState(false);
const [ethBalance,setEthBalance] = useState(0)
const [ethValue,setEthValue] = useState(0)
const [pepeBalance,setPepeBalance] = useState(0)
const [pepeValue,setPepeValue] = useState(0)
const [css0,modCSS0] = useState("")
const [css1,modCSS1] = useState("hidden")

const setExpanded = async (bool) => {
    if (bool === true){
        setExpandeded(bool)
        modCSS1("infobox")
        modCSS0("animate__animated animate__fadeInDown animate__faster")
        await delay(200)
        modCSS0("")
    } else {
        setExpandeded(bool)
        modCSS0("animate__animated animate__fadeOutUp animate__faster")
        await delay(200)
        modCSS1("hidden")
    }
}

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

return(
    <div className={styles.mayocont}>
    <div className={styles.accountInfoMayonnaise}>
      <div onClick={()=>{setExpanded(!expanded)}} className={styles.addybox}>{web3.address}</div>
      <div className={`${css0} ${styles[css1]} ${styles.borderright}`}>
        {ethBalance} ETH
        <p className={styles.infoboxdesc}>Balance</p>
      </div>
      <div className={`${css0} ${styles[css1]} ${styles.borderleft}`}> 
        {ethValue}
        <p className={styles.infoboxdesc}>Value</p>
      </div>
      <div className={`${css0} ${styles[css1]} ${styles.borderleft}`}>
        {pepeBalance.toLocaleString()} PEPE
        <p className={styles.infoboxdesc}>Balance</p>
      </div>
      <div className={`${css0} ${styles[css1]} ${styles.borderleft}`}>
        {pepeValue}
        <p className={styles.infoboxdesc}>Value</p>
      </div>
    </div>
    </div>
)
}

