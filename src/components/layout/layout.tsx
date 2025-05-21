import Header from "./header";
import Footer from "./footer";
import type { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <div>
      <Header />
      <main>
        <h2>{title}</h2>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
