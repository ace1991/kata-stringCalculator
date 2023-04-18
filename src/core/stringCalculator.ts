export function sumNumbers(expression:string) {
    if(!expression) return 0;
    let sum=0;
    let separator;
    const begginingOfSeparator = `//`;
    if (expression.startsWith(begginingOfSeparator)) {
        const endingOfSeparator = "/";
        separator = expression.slice(begginingOfSeparator.length,expression.lastIndexOf(endingOfSeparator))
        expression = expression.slice(expression.lastIndexOf(endingOfSeparator)+1, expression.length)
    }else{
        const standardSeparator = ",";
        separator = standardSeparator;
    };
    expression.split(separator).forEach((num) => {
        if (!isNaN(Number(num))) sum = sum + Number(num);
    })
    return sum;
}