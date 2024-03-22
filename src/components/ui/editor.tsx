import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({
    monaco,
    code,
    setCode
}: any) {
    useEffect(() => {
        if (monaco) {
            monaco.editor.defineTheme('my-theme', {
                base: 'vs-dark',
                inherit: true,
                "rules": [
                    {
                        "foreground": "aeaeae",
                        "token": "comment"
                    },
                    {
                        "foreground": "FB923C",
                        "token": "keyword"
                    },
                    {
                        "foreground": "FB923C",
                        "token": "storage"
                    },
                    {
                        "foreground": "FB923C",
                        "token": "string"
                    },
                ],
                "colors": {
                    "editor.background": "#09090B",

                }
            });
            monaco.editor.setTheme('default')
        }
    }, [monaco, code]);
    
    const handleChange = (value: any) => {
        setCode(value);
    };

    return (
        <div className="overflow-hidden z-50 w-full h-full">
            <Editor
                width={`100%`}
                language={"typescript"}
                value={code}
                theme="night-dark"
                defaultValue={code}
                onChange={handleChange}
            />
        </div>
    );
};
