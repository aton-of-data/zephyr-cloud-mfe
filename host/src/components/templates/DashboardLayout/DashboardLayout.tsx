/**
 * Dashboard Layout - Main Shell Container
 * 
 * Orchestrates the main application layout with header, sidebar, and remote content.
 * Manages responsive sidebar state and lazy loads remote application content via Module Federation.
 * 
 * @component
 * @category Host
 * @example
 * ```tsx
 * <DashboardLayout />
 * ```
 */
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
// @ts-expect-error - Remote module
import { useLanguageStore, selectT } from 'shared-state/stores';
import { Header, Sidebar } from "../../organisms";
import "./DashboardLayout.css";

// @ts-expect-error - Remote module
const RemoteApp = lazy(() => import("vite_remote/App"));

const DashboardLayout = () => {
  const t = useLanguageStore(selectT);

  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 769;
    }
    return true;
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktop = window.innerWidth >= 769;
      if (isDesktop) {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      <div className="dashboard-main">
        <Header onMenuClick={toggleSidebar} />

        <main className="dashboard-content">
          <Suspense
            fallback={
              <div className="dashboard-loading">
                <div className="loading-spinner" />
                <p>{t('loading')}</p>
              </div>
            }
          >
            <RemoteApp />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
