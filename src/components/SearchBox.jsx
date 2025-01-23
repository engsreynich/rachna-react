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
<div class="flex p-4">
  <aside class="w-1/4 mt-6 mx-auto">
    <div class="flex items-center justify-center py-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search..."
          class="px-4 py-2 w-64 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="absolute right-0 top-0 mt-2 mr-2 text-gray-500 hover:text-blue-500 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10 18l6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  </aside>
</div>
`;

function SearchBox() {
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

export default SearchBox;