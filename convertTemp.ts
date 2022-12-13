function convertTemperature(celsius: number): number[] {
    let fahrenheit = celsius * (9/5) + 32
    let kelvin = celsius + 273.15
    return [kelvin, fahrenheit]
};