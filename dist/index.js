"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pyProcess = void 0;
const child_process_1 = require("child_process");
const pyProcess = (path, args) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const process = args ? (0, child_process_1.spawn)('python', [path, ...args]) : (0, child_process_1.spawn)('python', [path]);
        let stringData = '';
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
        process.on('close', (code) => {
            if (code === 0) {
                resolve(stringData.trim());
            }
            else {
                reject(`Python script exited with code ${code}`);
            }
        });
        process.stdin.end();
    });
});
exports.pyProcess = pyProcess;
