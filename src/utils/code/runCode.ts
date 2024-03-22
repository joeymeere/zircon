export async function runCode(code: string) {
    try {
        const run = await eval(code);

        return run;
    } catch(err) {
        throw err;
    }
}