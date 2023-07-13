export default () => ({
    onReady: async (callback) => {
        let response = await fetch(`/api/onReady`);
        let JSON = await response.json()
        callback(JSON)
    },
    searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
    },
    resolveSymbol: async (symbolName, onSymbolResolvedCallback, onResolveErrorCallback, extension) => {
        try {
            const symbolInfo = await fetch(`/api/resolveSymbol`);
            let JSON = await symbolInfo.json();
            onSymbolResolvedCallback(JSON);
        } catch (err) {
            onResolveErrorCallback("Error, couldn't resolve symbol");
        }
    },
    getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
        try {
          const response = await fetch(`/api/getBars?resolution=${resolution}&from=${periodParams.from}&to=${periodParams.to}`);
          if (!response.ok) {
            throw new Error('Failed to fetch bars');
          }
          const data = await response.json();
          const queryType = resolution === "1D" ? "tokenDayDatas" :
          resolution === "60" || "120" || "240" || "480" || "720" ? "tokenHourDatas" : null
          const resoType = resolution === "1D" ? "date" :
          resolution === "60" || "120" || "240" || "480" || "720" ? "periodStartUnix" : null
          const modifiedData = data[queryType].map(i => {
            return {
              ...i,
              time: (i[resoType] * 1000),
              volume: i.volumeUSD
            };
          });
          if (modifiedData.length > 0) {
            onHistoryCallback(modifiedData, {noData: false})
          } else {
            onHistoryCallback(modifiedData, {noData: true})
          }
        } catch (error) {
          onErrorCallback(error);
        }
      },
    subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback) => {
    },
    unsubscribeBars: (subscriberUID) => {
    },
});