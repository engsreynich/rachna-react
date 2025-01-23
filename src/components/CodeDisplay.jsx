import { useState } from 'react';
import { Highlight } from 'prism-react-renderer';
import { ClipboardIcon, CheckIcon } from 'lucide-react';

const customTheme = {
  plain: {
    color: "#e6e6e6",
    backgroundColor: "#282a36"
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: { color: "rgb(189, 147, 249)" }
    },
    {
      types: ["inserted", "function"],
      style: { color: "rgb(80, 250, 123)" }
    },
    {
      types: ["deleted"],
      style: { color: "rgb(255, 85, 85)" }
    },
    {
      types: ["changed"],
      style: { color: "rgb(255, 184, 108)" }
    },
    {
      types: ["punctuation", "symbol"],
      style: { color: "rgb(248, 248, 242)" }
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: { color: "rgb(255, 121, 198)" }
    },
    {
      types: ["keyword", "variable"],
      style: { color: "rgb(189, 147, 249)", fontStyle: "italic" }
    },
    {
      types: ["comment"],
      style: { color: "rgb(98, 114, 164)" }
    },
    {
      types: ["attr-name"],
      style: { color: "rgb(241, 250, 140)" }
    }
  ]
};

const codeString = `
<div className="flex flex-col p-4">
  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
    Username
  </label>
  <input
    type="text"
    id="username"
    name="username"
    className="mt-1 w-2/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
  />
</div>
`;

function CodeDisplay() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeString.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-100 p-2 rounded-md">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="bg-gray-300 flex justify-between items-center px-4 py-2 border-b border-gray-300">
          <span className="text-black font-medium">React JSX</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-1 text-black hover:text-gray-800"
          >
            {copied ? (
              <CheckIcon className="w-4 h-4" />
            ) : (
              <ClipboardIcon className="w-4 h-4" />
            )}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <Highlight
          code={codeString.trim()}
          language="jsx"
          theme={customTheme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="text-xs whitespace-pre leading-tight p-4 overflow-x-auto" style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}

export default CodeDisplay;