import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kavita Rawat | Front End Developer",
  description: "Welcome to the portfolio of Kavita Rawat, a passionate Front End Developer dedicated to crafting engaging web experiences. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
         defaultTheme="light"
         enableSystem
         disableTransitionOnChange
        >
        <Navigation />
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
