import React from 'react';
import { Footer } from './Footer';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
