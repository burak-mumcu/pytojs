import { spawn } from 'child_process';

export const pyProcess = (path:string, args?:any[]):string => {
    const process = args ? spawn('python', [path,...args]) : spawn('python', [path])
    let stringData = ''
    process.stdout.on('data', (data) => {
        stringData += data.toString();
    });
    if (args) {
        let data = [...args];
        process.stdin.write(JSON.stringify(data));
        process.stdout.on('end',() => {
            stringData !== '' ? 1 : -1
        })
    } 

    process.stderr.on('data', (data) => {
        return data
    });

    return stringData;
}


