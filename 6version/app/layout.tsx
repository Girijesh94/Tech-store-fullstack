
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/lib/context/CartContext';
import { WishlistProvider } from '@/lib/context/WishlistContext';
import { AuthProvider } from '@/lib/context/AuthContext';

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-pacifico"
});

export const metadata: Metadata = {
  title: "TechStore - Latest Tech Gadgets & Electronics",
  description: "Discover the latest tech gadgets, smartphones, laptops, and accessories at unbeatable prices. Shop now for premium electronics with fast shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pacifico.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
