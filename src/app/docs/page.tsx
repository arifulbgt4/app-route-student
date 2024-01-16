import { NextPage } from "next";
import Link from "next/link";
import { FC } from "react";

const DocsPage: FC<NextPage> = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p>
        Next.js is a React framework for building full-stack web applications.
        You use React Components to build user interfaces, and Next.js for
        additional features and optimizations.
      </p>
    </div>
  );
};

export default DocsPage;
