export const formatPepe = (num) => {
    if (num >= 1000 && num < 1000000) {
        return (num/1000).toFixed(0) + "K";
      } else if (num >= 1000000 && num < 1000000000) {
        return (num/1000000).toFixed(0) + "M";
      } else if (num >= 1000000000 && num < 1000000000000) {
        return (num/1000000000).toFixed(0) + "B";
      } else {
        return num.toString();
      }
}