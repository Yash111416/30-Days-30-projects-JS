const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minDegrees}deg)`;

    const hr = now.getHours();
    const hrDegrees = ((hr / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hrDegrees}deg)`;


}
setInterval(setDate, 1000);

function animate() {
    setDate();
    requestAnimationFrame(animate);
}

animate(); 