export function Contacts({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => onDelete(id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
