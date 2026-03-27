import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ResearchPage } from './pages/ResearchPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { HackathonsPage } from './pages/HackathonsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { HobbyPage } from './pages/HobbyPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  return (
    <Routes>
      {/* Public routes with Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/hobby" element={<HobbyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Admin route — standalone layout (no public navbar/footer) */}
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}
