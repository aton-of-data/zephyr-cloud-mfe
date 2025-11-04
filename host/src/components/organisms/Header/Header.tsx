// @ts-expect-error - Remote module
import { useLanguageStore, selectT } from 'shared-state/stores';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

/**
 * Header Component
 *
 * Displays the main header of the dashboard with a menu toggle button and title.
 * Uses shared state for translations and provides accessibility labels.
 *
 * ```mermaid
 * graph LR
 *   A[User clicks menu] --> B[onMenuClick callback]
 *   B --> C[Sidebar toggles]
 *   D[Language Store] --> E[Translation function]
 *   E --> F[Header renders with translated text]
 * ```
 *
 * @component
 * @param {HeaderProps} props - Component props
 * @param {Function} props.onMenuClick - Callback function triggered when menu button is clicked
 * @category Host
 * @example
 * ```tsx
 * <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
 * ```
 */
const Header = ({ onMenuClick }: HeaderProps) => {
  const t = useLanguageStore(selectT);

  return (
    <header className="dashboard-header">
      <button 
        className="header-menu-btn"
        onClick={onMenuClick}
        aria-label={t('toggleSidebar')}
      >
        ☰
      </button>
      <h1 className="header-title">{t('dashboard')}</h1>
      <div className="header-spacer" />
    </header>
  );
};

export default Header;

