const https = require('https');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'bijapur');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, function(response) {
      response.pipe(file);
      file.on('finish', function() {
        file.close(resolve);
      });
    }).on('error', function(err) {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  await download("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gol_Gumbaz_Bijapur.jpg/1280px-Gol_Gumbaz_Bijapur.jpg", path.join(dir, 'gol_gumbaz.jpg'));
  await download("https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ibrahim_Rouza_Bijapur.jpg/1280px-Ibrahim_Rouza_Bijapur.jpg", path.join(dir, 'ibrahim_rauza.jpg'));
  await download("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bara_Kaman_Bijapur.jpg/1280px-Bara_Kaman_Bijapur.jpg", path.join(dir, 'bara_kaman.jpg'));
  console.log("Done");
}
main();
