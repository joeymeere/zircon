import { useState } from "react";
import SandboxEditor from "./SandboxEditor";
import Snippets from "./Snippets";

export default function SandboxView() {
  const [code, setCode] = useState<string>(
    `const web3 = require(\"@solana/web3.js\");\nconst spl = require(\"@solana/spl-token\");\n\nasync function main() {\n\n};\n\nmain();`
  );

  return (
    <section className="w-full flex min-h-screen px-2 relative">
      <div className="w-1/3 h-full">
        <Snippets code={code} setCode={setCode} />
      </div>
      <div className="absolute top-0 right-0 w-2/3 h-full">
        <SandboxEditor code={code} setCode={setCode} />
      </div>
    </section>
  );
}
