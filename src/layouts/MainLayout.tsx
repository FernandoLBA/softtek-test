import React, { useEffect, useState } from "react";

import { Footer, Navbar } from "../components";
import { appPaths } from "../constants";
import {
  CyanGradient,
  MagentaGradient,
} from "../features/home/components/homeGradients/HomeGradients";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pathname, setPathname] = useState<string>("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <section className="min-w-[370px] relative flex flex-col justify-between h-screen">
      {pathname === appPaths.HOME && (
        <>
          <CyanGradient />
          <MagentaGradient />
        </>
      )}

      <Navbar />

      <div className="px-8 md:px-24">{children}</div>

      <Footer pathname={pathname} />
    </section>
  );
}
