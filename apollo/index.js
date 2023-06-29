import { gql } from '@apollo/client';

export const GET_ETH_PRICE = gql`
  query {
    bundles(id: "1" ) {
      ethPriceUSD
    }
   }
`;

export const GET_PEPE_PRICE = gql`
  query {
    token(id:"0x6982508145454ce325ddbe47a25d4ec3d2311933") {
  derivedETH
    }
  }
`;

export const GET_DAILY_CANDLES = gql`
  query GetDailyCandles($date_gt: Int!, $date_lt: Int!) {
    tokenDayDatas(
      where: {
        token: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
        date_gt: $date_gt,
        date_lt: $date_lt
      },
      orderBy: date,
      orderDirection: asc,
      first:1000
    ) {
      date
      open
      close
      high
      low
      volumeUSD
    }
  }
`;

export const GET_HOURLY_CANDLES = gql`
  query GetHourlyCandles($periodStartUnix_gt: Int!, $periodStartUnix_lt: Int!) {
    tokenHourDatas(
      where: {
        token: "0x6982508145454ce325ddbe47a25d4ec3d2311933",
        periodStartUnix_gt: $periodStartUnix_gt,
        periodStartUnix_lt: $periodStartUnix_lt
      },
      orderBy: periodStartUnix,
      orderDirection: asc,
      first:1000
    ) {
      periodStartUnix
      open
      close
      high
      low
      volumeUSD
    }
  }
`;

