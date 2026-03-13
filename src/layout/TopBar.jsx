export default function TopBar() {
  return (
    <header className="topBar">
      <div className="topBarBrand">
        SSO Stable Builder
      </div>

      <div className="topBarActions">
        <button>New</button>
        <button>Import</button>
        <button>Export</button>
        <button>Language</button>
      </div>
    </header>
  );
}