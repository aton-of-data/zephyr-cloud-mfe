/**
 * Header Component
 * 
 * Displays the main header of the dashboard with a menu toggle button and title.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Function} props.onMenuClick - Callback function triggered when menu button is clicked
 * @category Host
 * @example
 * ```tsx
 * <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
 * ```
 */
// @ts-expect-error - Remote module
import { useLanguageStore, selectT } from 'shared-state/stores';
import './Header.css';

interface HeaderProps {
  onMenuClick: () => void;
}

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

