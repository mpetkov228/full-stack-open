const Filter = ({ search, onSeachChange }) => {
  return (
    <div>
      filter shown with <input value={search} onChange={onSeachChange} />
    </div>
  );
};

export default Filter;