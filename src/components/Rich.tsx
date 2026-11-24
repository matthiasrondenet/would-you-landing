import React from 'react';

// "Label :: text" renders the label in bold. Text without a label stays plain.
export const Rich: React.FC<{ text: string }> = ({ text }) => {
  const at = text.indexOf(' :: ');
  if (at === -1) return <>{text}</>;
  return (
    <>
      <strong>{text.slice(0, at)}</strong>
      {' — '}
      {text.slice(at + 4)}
    </>
  );
};
