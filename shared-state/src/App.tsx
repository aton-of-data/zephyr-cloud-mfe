/**
 * Shared State MFE App
 * 
 * This MFE only manages global state, no UI components.
 * It can run standalone for development/testing purposes.
 * 
 * @component
 */
function App() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Shared State MFE</h1>
      <p>This MFE manages global state for all applications.</p>
      <p>Stores and styles are available via Module Federation.</p>
    </div>
  );
}

export default App;

