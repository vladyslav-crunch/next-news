import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Next News",
  description: "Explore the news with - Next News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
