const path = require('path');
const fs = require('fs');
const { stdin } = process;
const fileDirectory = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(path.join(fileDirectory));

console.log('\n Введите своё сообщение или выйдите из записи (для этого нажмите сочетание клавиш Ctrl + C или введите exit и нажмите Enter)');

stdin.on('data', data => {
    const message = data.toString().trim();
    if (message === 'exit') {
        writeStream.end();
        process.on('exit', () => console.log('\nУдачи в учебе!\n'));
        process.exit();
    }
    else {
        writeStream.write(data);
    }
});
    
process.on('SIGINT', () => {
    console.log('\nУдачи в учебе!\n');
    process.exit();
});