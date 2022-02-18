var fs = require('fs');

fs.readFile('./wiersz.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err);
    return
  }
  console.log(data);
});