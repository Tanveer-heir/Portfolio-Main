import type { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
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
import { AdminPage } from "./pages/AdminPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { isVisiblePage } from "./config/content";

const PAGES: { path: string; element: ReactNode }[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/research", element: <ResearchPage /> },
  { path: "/experience", element: <ExperiencePage /> },
  { path: "/hackathons", element: <HackathonsPage /> },
  { path: "/articles", element: <ArticlesPage /> },
  { path: "/skills", element: <SkillsPage /> },
  { path: "/education", element: <EducationPage /> },
  { path: "/hobby", element: <HobbyPage /> },
];

export default function App() {
  return (
    <Routes>
      {/* Public routes with Navbar + Footer */}
      <Route element={<MainLayout />}>
        {PAGES.filter((page) => isVisiblePage(page.path)).map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* Admin route — standalone layout (no public navbar/footer) */}
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
