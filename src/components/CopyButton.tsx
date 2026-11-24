import React, { useState } from 'react';

interface CopyButtonProps {
  text: string;
  label: string;
  doneLabel: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ text, label, doneLabel }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      })
      .catch(() => {
        // Clipboard unavailable (insecure context or permission denied): the address stays selectable.
      });
  };

  return (
    <button type="button" onClick={copy} aria-live="polite">
      {copied ? doneLabel : label}
    </button>
  );
};
