import type {Metadata} from 'next';
import {Vazirmatn} from 'next/font/google';

import MyDrawer from '@/components/my-drawer';
import MyBtnNav from '@/components/my-btn-nav';

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
  // (document.getElementById('menu-btn') as HTMLInputElement).onclick =
  //   function () {
  //     (document.getElementById('my-drawer') as HTMLInputElement).checked = true;
  //   };

  return (
    <html lang="fa">
      <MyDrawer>
        <body className={vazirmatn.className}>{children}</body>
        <MyBtnNav />
      </MyDrawer>
    </html>
  );
}
