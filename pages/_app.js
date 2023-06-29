import {useEffect, useState} from "react"
import Script from 'next/script'
import '@/styles/globals.css'
import 'animate.css';
import { MetaAf } from '@/components/Head'
import {useWindowSize} from "../hooks/useWindowSize"
import { DesktopNav } from "../components/nav/index"
const { library, config } = require('@fortawesome/fontawesome-svg-core');
import { faDollarSign, faPeopleCarryBox, faBuildingColumns, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
library.add(faDollarSign,faPeopleCarryBox, faBuildingColumns, faPeopleGroup)
config.autoAddCss = false;
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({

  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',

  cache: new InMemoryCache(),

  defaultOptions: defaultOptions

});

export default function App({ Component, pageProps }) {

  const windowSize = useWindowSize();
  const [viewPort,setViewPort] = useState("")
  useEffect(() => {
    windowSize.width > 1008 ? setViewPort("desktop") :
    windowSize.width < 1008 && windowSize.width > 641 ? setViewPort("tablet") :
    windowSize.width < 641 ? setViewPort("phone") : null
  }, [windowSize])

  const [web3,setWeb3] = useState({})

  return(
  <>
    <Script src="/static/datafeeds/udf/dist/bundle.js" />
    <MetaAf />
    <DesktopNav web3={web3} setWeb3={setWeb3} />
    <ApolloProvider client={client}>
    <Component {...pageProps} viewPort={viewPort} web3={web3} />
    </ApolloProvider>
  </>
  )
}
