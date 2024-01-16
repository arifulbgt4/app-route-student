import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout: FC<DocsLayoutProps> = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/docs">Docs</Link>
        </li>
        <li>
          <Link href="/docs/install">Install</Link>
        </li>
        <li>
          <Link href="/docs/structure">Structure</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default DocsLayout;
