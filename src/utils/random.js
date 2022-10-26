export const handleClickColor = () => {
    const color1 = randomNumber(0, 255);
    const color2 = randomNumber(0, 255);
    const color3 = randomNumber(0, 255);
    return `rgba(${color1}, ${color2}, ${color3})`;
}

export const randomNumber = (min, max) => {
    return Math.floor((Math.random() * max - min) + min);
};