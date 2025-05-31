import type { ReactNode } from "react";
import Header from "./header";
import "./page.css";

interface PageProps {
  page: string;
  children: ReactNode;
}

function Page({ page, children }: PageProps) {
  return (
    <>
      <Header page={page} />
      <main className="main">{children}</main>
    </>
  );
}

export default Page;
