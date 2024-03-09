import { spawn } from 'child_process';

export const pyProcess = async (path: string, args?: any[]) => {
    return new Promise<string>((resolve, reject) => {
        const process = args ? spawn('python', [path, ...args]) : spawn('python', [path])
        let stringData = ''

        process.stdout.on('data', (data) => {
            stringData += data.toString();
            
        });

        if (args) {
            let data = [...args];
            process.stdin.write(JSON.stringify(data));
        }

        process.stderr.on('data', (data) => {
            reject(data.toString());
        });

       /* process.stdout.on('end', () => {
            if (stringData !== '') {
                resolve(stringData);
            } else {
                reject(-1);
            }
        }); */

        process.on('close', (code) => {
            if (code === 0) {
                resolve(stringData.trim());
            } else {
                reject(`Python script exited with code ${code}`);
            }
        });

        process.stdin.end();
    });
};

(async () => {
    try {
        const result = await pyProcess('./deneme.py',['gelmez dimi ya']);
        console.log(result);
    } catch (error) {
        console.error('Hata:', error);
    }
})();
