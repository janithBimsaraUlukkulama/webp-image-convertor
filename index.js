const sharp = require('sharp');

async function getMetadata() {
    const metadata = await sharp("sammy.png").metadata();
    console.log(metadata);
}

getMetadata();
