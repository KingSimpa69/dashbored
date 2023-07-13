import { StatBox } from "./StatBox"
import { formatPepeUsd } from "@/utils/formatPepeUsd"

export const DesktopStats = ({pepeUsd,supply,marketcap,holders}) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      });

    return(
        <>
        <StatBox type={"price"} value={formatPepeUsd(pepeUsd)}/>
        <StatBox type={"supply"} value={supply.toLocaleString()}/>
        <StatBox type={"marketcap"} value={formatter.format(marketcap)}/>
        <StatBox type={"holders"} value={holders.toLocaleString()}/>
        </>
    )
}