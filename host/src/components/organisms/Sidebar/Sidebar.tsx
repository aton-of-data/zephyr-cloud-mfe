// @ts-expect-error - Remote module
import ThemeButton from "vite_remote/ThemeButton";
// @ts-expect-error - Remote module
import LanguageButton from "vite_remote/LanguageButton";
// @ts-expect-error - Remote module
import { useLanguageStore, selectT } from "shared-state/stores";
import "./Sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Sidebar Component
 *
 * Displays the navigation sidebar with menu items and theme/language controls.
 * Includes an overlay for mobile devices when the sidebar is open.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the sidebar is currently open
 * @param {Function} props.onClose - Callback function triggered when sidebar should be closed
 * @category Host
 * @example
 * ```tsx
 * <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
 * ```
 */
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const t = useLanguageStore(selectT);

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">🚀 {t("dashboard")}</h2>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label={t("closeSidebar")}
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <a href="#" className="sidebar-nav-item active">
            <span className="sidebar-nav-icon">📊</span>
            <span>{t("dashboard")}</span>
          </a>
          <a href="#" className="sidebar-nav-item">
            <span className="sidebar-nav-icon">📈</span>
            <span>{t("analytics")}</span>
          </a>
          <a href="#" className="sidebar-nav-item">
            <span className="sidebar-nav-icon">📝</span>
            <span>{t("reports")}</span>
          </a>
          <a href="#" className="sidebar-nav-item">
            <span className="sidebar-nav-icon">⚙️</span>
            <span>{t("settings")}</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-footer-buttons">
            <ThemeButton />
            <LanguageButton />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
