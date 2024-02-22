import type {Metadata} from 'next';
import {Vazirmatn} from 'next/font/google';
import './globals.css';

const vazirmatn = Vazirmatn({subsets: ['arabic']});

export const metadata: Metadata = {
  title: 'چاشت',
  description: 'اپلیکیشن خرید غذا از رستوران‌ها و فست فودها',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
