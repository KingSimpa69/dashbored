export const formatEth = (raw) => {
    const eth = parseFloat(raw)
    if (eth < 0.001) {
        return "< 0.001";
      } else if (eth >= 0.001 && eth < 1) {
        return eth.toFixed(3);
      } else {
        return eth.toFixed(2);
      }
}