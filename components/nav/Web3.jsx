import {ethers} from "ethers";
import Image from "next/image";
import styles from "../../styles/Nav.module.css";
import { useEffect } from "react";

export const Web3Button = ({setWeb3,web3}) => {

  useEffect(()=>{
    if (web3.provider === undefined){
      const provider = ethers.getDefaultProvider("homestead",{
        etherscan: process.env.NEXT_PUBLIC_ETHERSCAN_API,
        alchemy: process.env.NEXT_PUBLIC_ALCHEMY_API
      });
      setWeb3({
        provider:provider
      })
    }
  },[])

  const connect = async () => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider("homestead",{
        etherscan: process.env.NEXT_PUBLIC_ETHERSCAN_API,
        alchemy: process.env.NEXT_PUBLIC_ALCHEMY_API
      });
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      setWeb3(signer)
      console.log(signer)
    }
  };

  return (
    <div onClick={()=>connect()} className={styles.mm}>
      <Image alt="metamask-fox" src={"/metamask.png"} width={40} height={40} />
    </div>
  );
};

export const Web3Status = ({web3}) => {
  return(
    web3.address !== undefined ? <div className={styles.connected}>Connected</div>:<div className={styles.disconnected}>Disconnected</div>
  )
};
