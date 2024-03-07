const {spawn} = require('child_process');


const pyProcess = (path,arguments) => {
    const process = spawn('python3',[path,...arguments]);
    process.stdout.on('data', (data) => {
        console.log(data);
    });

    process.stderr.on('data', (data) => {
       console.error(data)
    });

    process.on('close', (code) => {
        console.log(code);
    });
}

pyProcess('./deneme.py',['merhaba'])

