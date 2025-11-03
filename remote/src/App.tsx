/**
 * Remote App Content
 * 
 * Main content component loaded into the host dashboard via Module Federation.
 * Displays dashboard content with cards showing different features and controls.
 * 
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 */
// @ts-expect-error - Remote module
import { useLanguageStore, selectT } from 'shared-state/stores';
import { ThemeButton, LanguageButton } from "./components";
import "./App.css";

function App() {
  const t = useLanguageStore(selectT);

  return (
    <div className="remote-app">
      <div className="remote-app-header">
        <h2>{t('dashboardTitle')}</h2>
        <p>{t('dashboardDesc')}</p>
      </div>

      <div className="remote-app-grid">
        <div className="remote-app-card">
          <h3>{t('workspaceTitle')}</h3>
          <p>{t('workspaceDesc')}</p>
        </div>

        <div className="remote-app-card">
          <h3>{t('analyticsTitle')}</h3>
          <p>{t('analyticsDesc')}</p>
        </div>

        <div className="remote-app-card">
          <h3>{t('teamTitle')}</h3>
          <p>{t('teamDesc')}</p>
        </div>

        <div className="remote-app-card">
          <h3>{t('themeTitle')}</h3>
          <p>{t('themeDesc')}</p>
          <div style={{ marginTop: "1rem" }}>
            <ThemeButton />
          </div>
        </div>

        <div className="remote-app-card">
          <h3>{t('languageTitle')}</h3>
          <p>{t('languageDesc')}</p>
          <div style={{ marginTop: "1rem" }}>
            <LanguageButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
