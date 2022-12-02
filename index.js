const fs = require('fs');

const dayFiles = () => {

    let files = [];

    for(i = 1; i <= 25; i++) {
        files.push(fs.readdirSync(`./day${i}`).filter((file) => file.endsWith('x.js')));
    }

    return files;
}