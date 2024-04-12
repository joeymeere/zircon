export async function runCode(code: string) {
    try {
        let args: [] = [];
        const pattern = /const web3 = require\("@solana\/web3\.js"\);\s*/;
        const splPattern = /const spl = require\("@solana\/spl-token"\);\s*/;
        const modify = code.replace(pattern, '');
        const modifiedCode = modify.replace(splPattern, '');

        const web3 = await import("@solana/web3.js");
        const spl = await import("@solana/spl-token");

        let libs = { web3, spl };

        //const run = new Function("web3", 'return' + modifiedCode);
        let func = new Function(...Object.keys(libs), 'return ' + modifiedCode)(...Object.values(libs));

        return await func.call(null, ...args);
    } catch(err) {
        throw err;
    }
}