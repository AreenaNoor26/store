function Navbar({ search, setSearch, count }) {
  return (
    <nav className="navbar">
      <h2>Glamora Beauty</h2>

      <input
        type="text"
        placeholder="Search makeup..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cart">🛒 {count}</div>
    </nav>
  );
}

export default Navbar;