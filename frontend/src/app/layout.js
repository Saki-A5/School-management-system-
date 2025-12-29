import "./globals.css";
import { SideBarProvider } from "@/components/sideBarProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <SideBarProvider>
        <div className="w-full block p-[20px]">{children}</div>
      </SideBarProvider>
      </body>
    </html>
  );
}
