import "./Filters.css";

function Filters({ categories, onSelect }) {
  return (
    <aside className="filters">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat} onClick={() => onSelect(cat)}>
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Filters;