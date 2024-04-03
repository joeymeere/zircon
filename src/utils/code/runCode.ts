export async function runCode(code: string) {
    try {
        let args: [] = [];
        const pattern = /const web3 = require\("@solana\/web3\.js"\);\s*/;
        const modifiedCode = code.replace(pattern, '');

        const web3 = await import("@solana/web3.js");

        let libs = { web3 };

        //const run = new Function("web3", 'return' + modifiedCode);
        let func = new Function(...Object.keys(libs), 'return ' + modifiedCode)(...Object.values(libs));

        return await func.call(null, ...args);
    } catch(err) {
        throw err;
    }
}