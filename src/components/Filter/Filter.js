export function Filter({ onChange, value }) {
  return (
    <div>
      <label>Find contacts by name</label>
      <input
        type="tel"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={onChange}
      />
    </div>
  );
}
