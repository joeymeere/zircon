"use client"

//@ts-ignore
import beautify from "prettify-js";
import { useMonaco } from "@monaco-editor/react";
import CodeEditor from "./ui/editor";
import { useEffect, useState } from "react";
import { runCode } from "@/utils/code/runCode";
import ConfettiExplosion from "react-confetti-explosion";
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/github-dark.css';
import { useToast } from "./ui/use-toast";

hljs.configure({
    ignoreUnescapedHTML: true
});
hljs.registerLanguage('javascript', javascript);

export default function EditorWindow() {
    const monaco = useMonaco();
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false);
    const [code, setCode] = useState<string>("async function main() {\n\n};\n\nmain();");
    const [output, setOutput] = useState<string>("");
    const [correct, setCorrect] = useState<boolean>(false);

    async function getResponse() {
        try {
            setCorrect(false);
            setLoading(true);
            const response = await runCode(code);

            if (response) {
                setOutput(beautify(response));

                console.log(typeof response)

                if (typeof response == 'object') {
                    setCorrect(true);
                    toast({
                        title: "Well Done!",
                        description: "You've completed this challenge.",
                    })
                }
            }
        } catch (err: any) {
            throw Error(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex-col gap-2 h-full w-full overflow-y-auto overflow-x-scroll max-h-screen">
            <div className="flex gap-2 items-center justify-end p-2 bg-zinc-950 rounded-tl-md border-b-2 border-[#E851EB]/50">
                <button
                    onClick={() => getResponse()}
                    className="relative inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#E40DB5_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950  px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-3xl">
                        Run
                    </span>
                </button>
                <button className="shadow-[0_0_0_3px_#000000_inset] px-3 py-1.5 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-semibold text-xs transform hover:-translate-y-1 transition duration-400">
                    Submit
                </button>
            </div>
            {correct ? (
                <ConfettiExplosion
                    force={0.8}
                    duration={3000}
                    particleCount={250}
                    width={1600}
                />
            ) : null}
            <div className="grid grid-rows-2 w-full h-full">
                <div>
                    <CodeEditor monaco={monaco} code={code} setCode={setCode} />
                </div>
                <div className="relative bg-[#09090B] border-t-2 border-[#E851EB]/50 pt-4 px-3">
                    {loading ? (
                        <svg aria-hidden="true" className="absolute top-1/2 left-1/2 inline w-8 h-8 text-gray-200 animate-spin dark:text-zinc-400 fill-zinc-400 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    ) : (
                        <>
                            <button
                                onClick={() => setOutput("")}
                                className={`absolute top-2 right-2 shadow-[0_0_0_3px_#000000_inset] px-2 py-1 bg-transparent ${output.length > 0 ? 'border border-white text-white' : 'border border-neutral-500 text-neutral-500'} rounded-lg font-semibold text-xs transform hover:-translate-y-1 transition duration-400`}
                            >
                                Clear
                            </button>
                            {output.length > 0 ? (
                                <div className="">
                                    <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }} className="flex w-full h-full mb-0 overflow-auto break-words">
                                        <code className="font-martian text-xs text-neutral-300 w-full js overflow-auto scrollbar max-h-1/3 break-words">{output}</code>
                                    </pre>
                                </div>
                            ) : (
                                <p className="font-martian text-sm text-neutral-500">Run your code to see the output.</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}