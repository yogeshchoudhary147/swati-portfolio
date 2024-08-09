import React from 'react';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
