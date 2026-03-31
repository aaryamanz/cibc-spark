import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/components/PointsToast";

export const metadata = {
  title: {
    default: "CIBC AI Hub — Home",
    template: "CIBC AI Hub — %s",
  },
  description: "CIBC internal AI adoption platform — tools, learning paths, and productivity for every employee.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAFAFA]">
        <ToastProvider>
          <Navbar />
          <main>{children}</main>
        </ToastProvider>
      </body>
    </html>
  );
}
