export const convertToNum = value => {
    const num = parseFloat(value);
    if (isNaN(num)) {
        throw new Error(`Value ${value} is not a number`);
    }
    return num;
}

export const calculateResults = (amount, percent) => {
    const numAmount = convertToNum(amount);
    const numPercent = convertToNum(percent);
    return (numAmount * numPercent) / 100;
}

