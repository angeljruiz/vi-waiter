export const toCurrency = (number) => {
    var myObj = {
        style: "currency",
        currency: "USD"
      }
    return (number/100).toLocaleString("en-US", myObj)
}