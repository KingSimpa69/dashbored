export default async function handler(req, res) {
  const symbolInfo = {
    ticker: 'PEPE',
    name: 'PEPE',
    description: 'PEPE/USD',
    type: "Crypto",
    session: '24x7',
    timezone: 'Etc/UTC',
    exchange: 'uniswap',
    minmov: 1,
    pricescale: 100000000,
    has_intraday: true,
    has_no_volume: true,
    has_weekly_and_monthly: false,
    supported_resolutions: ["60", "120", "240", "480", "720", "D",],
    data_status: 'streaming',
};
    try {
      res.status(200).json(symbolInfo);
    } catch (error) {
      console.error('Error fetching configuration data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }