import type {Metadata} from 'next';
import {Vazirmatn} from 'next/font/google';

import MyDrawer from '@/components/my-drawer';
import MyBtnNav from '@/components/my-btn-nav';

import './globals.css';

const vazir = Vazirmatn({subsets: ['arabic']});

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
      <body className={vazir.className}>
        <MyDrawer>
          {children}
          <MyBtnNav />
        </MyDrawer>
      </body>
    </html>
  );
}
