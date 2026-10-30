import "./globals.css";

export const metadata = {
  title: "Shanzay Rafiq - Portfolio",
  description: "Full-Stack Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}