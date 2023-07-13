export default [
    // "What is Pepe's Dash?"
    "Pepe's Dash is a community-driven user dashboard designed to cater to the needs of PEPE token holders. Its primary objective is to offer a comprehensive platform for PEPE holders to stay informed about the latest statistical data, including price, supply, marketcap, and holder count. Moreover, it empowers holders by enabling them to connect their wallets, thereby granting real-time access to the USD valuation of their PEPE portfolio.",
    // "Where does Pepe's Dashboard collect it's data?"
    "Pepe's Dash acquires data from three different sources. The Uniswap v3 subgraph is utilized to retrieve real-time ETH/PEPE prices and comprehensive chart data. To gather information on the current supply, direct integration with the PEPE smart contract is employed through ethersJS. Additionally, a dedicated backend application has been developed to extract the total number of current holders from ethscan.",
    // "Do I need to connect my wallet?"
    "No, there is no requirement to connect your wallet. The only purpose of connecting your wallet is to view the total USD value of your ETH and PEPE balances.",
    // "Is Pepe's Dash connected to the Official PEPE project?"
    "Pepe's Dash has no affiliation whatsoever with the official Pepe project, apart from the fact that we are current holders. Although, it would be a dream come true.",
    // "Pepe's API ?"
    "Yes, I am currently in the process of developing a public REST API intended for use by fellow developers. This API will provide a free and efficient way to retrieve essential information such as holders, supply, marketcap, and price for use in other projects.",
    // "Why is the hour candle the smallest timeframe?"
    "Currently, the price data is being extracted directly from the Uniswap subgraph. Unfortunately, the smallest timeframe available is hourly using the tokenHourDatas query. However, we are actively working on reworking the charts to utilize the Binance API for chart data. This update will enable access to candle timeframes of any duration, as well as provide real-time price movements down to the second. Stay tuned."
]