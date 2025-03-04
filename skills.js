// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}
// driver code
let celsius = 32;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(`${celsius} degree Celsius is equal to ${fahrenheit} degree Fahrenheit.`);
