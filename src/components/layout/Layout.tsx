import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useVisitorTracking } from "@/hooks/useVisitorTracking";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  // Initialize visitor tracking (15 seconds then sends to Lindy)
  useVisitorTracking();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
