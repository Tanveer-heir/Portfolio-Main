import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { NAV_ITEMS, site } from "../../config/content";
import "./MainLayout.css";
import {
  BootSequence,
  MouseGlow,
  PageTransition,
  TopographicBackground,
} from "../../components/effects";

export default function MainLayout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    const page = NAV_ITEMS.find((item) => item.href === pathname);
    document.title =
      page && pathname !== "/"
        ? `${page.label} — ${site.name}`
        : site.pageTitle;
  }, [pathname]);

  return (
    <div className="main-layout">
      <BootSequence />
      <MouseGlow />
      <TopographicBackground />
      <Navbar />
      <main className="main-layout__content" id="main-content">
        {/* Each new page starts at the top once the old one has faded out */}
        <AnimatePresence
          mode="wait"
          onExitComplete={() =>
            window.scrollTo({ top: 0, behavior: "instant" })
          }
        >
          <PageTransition key={pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
