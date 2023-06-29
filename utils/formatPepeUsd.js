export const formatPepeUsd = (number) => {
        var roundedNumber = number.toPrecision(3);
        roundedNumber = parseFloat(roundedNumber).toString();
        return roundedNumber;
}