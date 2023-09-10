const imageFileInput = document.querySelector("#imageFileInput");
const topTextInput = document.querySelector("#topTextInput");
const bottomTextInput = document.querySelector("#bottomTextInput");
const canvas = document.querySelector("#meme");

let image;



imageFileInput.addEventListener("change", () => {
    const imageDataUrl = URL.createObjectURL(imageFileInput.files[0]);

    image = new Image();
    image.src = imageDataUrl;

    image.addEventListener("load", () => {
        updateMemeCanavas(canvas, image, topTextInput.value, bottomTextInput.value);
    }, { once: true });
});

topTextInput.addEventListener("change", () => {
    updateMemeCanavas(canvas, image, topTextInput.value, bottomTextInput.value);
})

bottomTextInput.addEventListener("change", () => {
    updateMemeCanavas(canvas, image, topTextInput.value, bottomTextInput.value);
})

function updateMemeCanavas(canvas, image, topText, bottomText) {

    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const offSet = height / 25;
    // console.log(canvas);
    // console.log(image);
    // console.log(topText);
    // console.log(bottomText);

    // update canavs backkground..
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    // Prepare Test

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 8);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`; 

    // Top Text

    ctx.textBaseline = "top";
    ctx.strokeText(topText, width / 2, offSet);
    ctx.fillText(topText, width / 2, offSet);

    // bottom text

    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomText, width / 2, height - offSet);
    ctx.fillText(bottomText, width / 2, height - offSet);
}
