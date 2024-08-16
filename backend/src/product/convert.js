const fs = require('fs');
const path = require('path');

// Caminho para a imagem local
const filePath = path.join(__dirname, '..', 'imgs', 'syltherine.png');

// Ler o arquivo e convertê-lo para Base64
const base64Image = fs.readFileSync(filePath).toString('base64');

console.log(base64Image);
