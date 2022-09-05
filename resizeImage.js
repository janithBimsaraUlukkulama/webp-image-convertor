// https://sharp.pixelplumbing.com/api-output#webp
const sharp = require("sharp");

async function resizeImage() {
    try {
        await sharp("sammy.png")
            .webp()
            .toFile("sammy-resized.webp");
    } catch (error) {
        console.log(error);
    }
}

resizeImage();
