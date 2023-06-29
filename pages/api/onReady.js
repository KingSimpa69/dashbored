import {client} from "../_app"

export default async function handler(req, res) {
    try {
      const data = {
        supported_resolutions:["60", "120", "240", "480", "720", "D",]
      }
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching configuration data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }