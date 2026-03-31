import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastProvider } from "@/components/PointsToast";

export const metadata = {
  title: "CIBC SPARK — AI Learning Platform",
  description: "Your personalized AI learning journey at CIBC",
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
