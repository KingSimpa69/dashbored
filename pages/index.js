import styles from "../styles/Main.module.css";
import dynamic from 'next/dynamic';
import react,{ useEffect,useState } from "react";
import { StatBox } from "@/components/StatBox";
import { AccountInfoMayonnaise } from "@/components/AccountInfoMayonnaise";
import { useQuery } from "@apollo/client";
import { GET_ETH_PRICE,GET_PEPE_PRICE } from "@/apollo";
import { parseEther,formatEther } from "ethers";
import { formatPepeUsd } from "@/utils/formatPepeUsd";
import { Contract } from "ethers";
import PEPE from "../abi/PEPE.json"
const TVChartContainer = dynamic(
  () =>
    import('../components/PriceChart').then(mod => mod.TVChartContainer),
  { ssr: false },
);

export default function Home({ viewPort,web3 }) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  // Fetch the currenct USD price of ETH
  const ethPriceQuery = useQuery(GET_ETH_PRICE,{pollInterval: 10000});
  const [ethPrice,setEthPrice] = useState(0)

  useEffect(() => {
    ethPriceQuery.data !== undefined ? setEthPrice(parseEther(parseFloat(ethPriceQuery.data.bundles[0].ethPriceUSD).toFixed(18))) : null
  }, [ethPriceQuery]);

  // Fetch the current ETH price of PEPE
  const pepePriceQuery = useQuery(GET_PEPE_PRICE,{pollInterval: 10000})
  const [pepePrice,setPepePrice] = useState(0)

  useEffect(()=>{
    pepePriceQuery.data !== undefined ? setPepePrice(parseEther(parseFloat(pepePriceQuery.data.token.derivedETH).toFixed(18))) : null
  },[pepePriceQuery])

  // Find the USD price of PEPE using the above two functions
  const [pepeUsd,setPepeUsd] = useState(0)

  useEffect(()=>{
    ethPrice !== 0 && pepePrice !== 0 ? setPepeUsd(parseFloat(formatEther(pepePrice*ethPrice/BigInt(10)**BigInt(18)))) : null
  },[pepePrice,ethPrice])

  // Fetch the total supply of PEPE
  const [supply,setSupply] = useState(0);

  const fetchSupply = async () => {
    const smartPepe = new Contract("0x6982508145454Ce325dDbE47a25d4ec3d2311933", PEPE.abi, web3.provider);
    const result = await smartPepe.totalSupply()
    setSupply(parseInt(formatEther(result)))
  }

  useEffect(()=>{
    web3.provider !== undefined ? fetchSupply() : null
  },[pepeUsd])

  // Fetch the current marketcap of PEPE

  const [marketcap,setMarketcap] = useState(0)

  useEffect(()=>{
    supply !== 0 && pepeUsd !== 0 ? setMarketcap(parseInt(supply*pepeUsd)) : null
  },[supply,pepeUsd])

  // Fetch the currenct holders of PEPE
  const [holders,setHolders] = useState(0)

  const fetchHolders = async () =>{
    const raw = await fetch("https://pepesdash.vip/holders");
    const result = await raw.json();
    setHolders(parseInt(await result.holders));
  }

  useEffect(()=>{
    fetchHolders()
  },[marketcap])



  return (
    <div className={styles.body}>
      {web3.address ? <AccountInfoMayonnaise web3={web3} viewPort={viewPort} ethPrice={ethPrice} pepeUsd={pepeUsd} /> : null}
      <div className={styles.statboxcont}>
        <StatBox type={"price"} value={formatPepeUsd(pepeUsd)}/>
        <StatBox type={"supply"} value={supply.toLocaleString()}/>
        <StatBox type={"marketcap"} value={formatter.format(marketcap)}/>
        <StatBox type={"holders"} value={holders.toLocaleString()}/>
      </div>
      <div className={styles.chartcont}>
        <TVChartContainer />
      </div>
    </div>
  );
}
