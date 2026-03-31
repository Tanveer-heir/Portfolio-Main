import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ResearchPage } from "./pages/ResearchPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HackathonsPage } from "./pages/HackathonsPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { SkillsPage } from "./pages/SkillsPage";
import { EducationPage } from "./pages/EducationPage";
import { HobbyPage } from "./pages/HobbyPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";
import { PageTransition } from "./components/effects";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <HomePage />
              </PageTransition>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransition>
                <AboutPage />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="/research"
            element={
              <PageTransition>
                <ResearchPage />
              </PageTransition>
            }
          />
          <Route
            path="/experience"
            element={
              <PageTransition>
                <ExperiencePage />
              </PageTransition>
            }
          />
          <Route
            path="/hackathons"
            element={
              <PageTransition>
                <HackathonsPage />
              </PageTransition>
            }
          />
          <Route
            path="/articles"
            element={
              <PageTransition>
                <ArticlesPage />
              </PageTransition>
            }
          />
          <Route
            path="/skills"
            element={
              <PageTransition>
                <SkillsPage />
              </PageTransition>
            }
          />
          <Route
            path="/education"
            element={
              <PageTransition>
                <EducationPage />
              </PageTransition>
            }
          />
          <Route
            path="/hobby"
            element={
              <PageTransition>
                <HobbyPage />
              </PageTransition>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransition>
                <ContactPage />
              </PageTransition>
            }
          />
        </Route>

        {/* Admin route — standalone layout (no public navbar/footer) */}
        <Route
          path="/admin"
          element={
            <PageTransition>
              <AdminPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
