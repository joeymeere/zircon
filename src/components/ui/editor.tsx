"use client"

import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({
    monaco,
    code,
    setCode
}: any) {
    const handleChange = (value: any) => {
        setCode(value);
    };

    return (
        <div className="overflow-hidden z-50 w-full h-full">
            <Editor
                width={`100%`}
                language={"typescript"}
                value={code}
                defaultLanguage="typescript"
                theme="onedark"
                defaultValue={code}
                onChange={handleChange}
            />
        </div>
    );
};
