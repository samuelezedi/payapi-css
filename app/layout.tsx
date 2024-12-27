
import "./globals.css";
import Sidebar from "./components/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className="antialiased font-dmSerifDisplay bg-[#EDF3F8]"
      >
        <div className="relative">
          {children}
          <Sidebar closeIcon="assets/shared/mobile/close.svg" />
        </div>
        
      </body>
    </html>
  );
}
