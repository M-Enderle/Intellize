import React, { useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export const Pre = ({ children, ...props }: any) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (preRef.current) {
      // We want the text content of the code element inside, or the pre itself if no code element
      const text = preRef.current.textContent || '';
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-4">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors z-10"
        aria-label="Copy to clipboard"
      >
        {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
      <pre ref={preRef} {...props} className={`${props.className || ''} overflow-x-auto`}>
        {children}
      </pre>
    </div>
  );
};

export const Image = ({ src, alt, caption, ...props }: any) => {
  return (
    <figure className="my-6 flex flex-col items-center">
      <img src={src} alt={alt} {...props} className="max-w-full rounded-lg" />
      {caption && (
        <figcaption className="mt-3 text-sm text-gray-600 text-center italic max-w-2xl">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export const mdxComponents = {
  pre: Pre,
  img: Image,
};
