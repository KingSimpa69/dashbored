import {client} from "../_app";
import { GET_DAILY_CANDLES, GET_HOURLY_CANDLES } from '../../apollo/index';

export default async function handler(req, res) {
    try {

      const queryType = req.query.resolution === "1D" ? GET_DAILY_CANDLES :
      req.query.resolution === "60" || "120" || "240" || "480" || "720" ? GET_HOURLY_CANDLES : null;

      const variables = req.query.resolution === "1D" ? {date_gt: parseInt(req.query.from),date_lt: parseInt(req.query.to)} :
      req.query.resolution === "60" || "120" || "240" || "480" || "720" ? {periodStartUnix_gt: parseInt(req.query.from),periodStartUnix_lt: parseInt(req.query.to)} : null

      const { data } = await client.query({
        query: queryType,
        variables: variables
      });
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching configuration data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }