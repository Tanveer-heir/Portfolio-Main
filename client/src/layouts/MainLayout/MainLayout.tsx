import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import "./MainLayout.css";
import {
  BootSequence,
  CinematicCursor,
  MouseGlow,
  TopographicBackground,
} from "../../components/effects";

export default function MainLayout() {
  return (
    <div className="main-layout">
      <BootSequence />
      <CinematicCursor />
      <MouseGlow />
      <TopographicBackground />
      <Navbar />
      <main className="main-layout__content" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
