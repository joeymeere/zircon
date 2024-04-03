export async function runCode(code: string) {
    try {
        //const run = await eval(code);
        const web3 = await require("@solana/web3.js");

        const pattern = /const web3 = require\("@solana\/web3\.js"\);\s*/;
        const modifiedCode = code.replace(pattern, '');

        const run = new Function("web3", modifiedCode);

        return run.call(web3);
    } catch(err) {
        throw err;
    }
}