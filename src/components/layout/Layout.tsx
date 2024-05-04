import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
