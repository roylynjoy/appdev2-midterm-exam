const fs = require('fs');

fs.writeFile('message.txt', 'Node.js is awesome!', (err) => {
    console.log('file written')
})

fs.readFile('message.txt', (err) => {
    if (err) {
        console.log('error occur', err)
    } else {
        console.log('read file')
    } 
})

fs.unlink('message.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }

})

