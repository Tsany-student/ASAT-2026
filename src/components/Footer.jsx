import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-center py-6 border-t border-zinc-900">
      <p className="text-xs text-zinc-500 tracking-wide">
        &copy; {new Date().getFullYear()} AN.PRASETYA. All rights reserved.
      </p>
    </footer>
  );
}