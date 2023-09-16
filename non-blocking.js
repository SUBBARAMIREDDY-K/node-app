var fs = require('fs')

fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err)
    setTimeout(() => {
        console.log('Display after 2 seconds')
    },2000);

});

console.log("Start Here")