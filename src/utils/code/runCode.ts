export async function runCode(code: string) {
    try {
        let args: [] = [];
        const modifiedCode = code
            .replace(/const web3 = require\("@solana\/web3\.js"\);\s*/, '')
            .replace(/const spl = require\("@solana\/spl-token"\);\s*/, '')
            .replace(/const dc = require\("@joeymeere\/dreamcast"\);\s*/, '')
            .replace(/const axios = require\("axios"\);\s*/, '');

        // Import necessary libs async
        const [web3, spl, dc, axios] = await Promise.all([
            import("@solana/web3.js"),
            import("@solana/spl-token"),
            import("@joeymeere/dreamcast"),
            import("axios")
        ]);

        let libs = { web3, spl, dc, axios };

        console.log(libs, modifiedCode);

        //const run = new Function("web3", "spl", "dc", 'return' + modifiedCode);
        let func = new Function(...Object.keys(libs), 'return ' + modifiedCode)(...Object.values(libs));

        return await func(null, ...args);
    } catch(err) {
        throw err;
    }
}