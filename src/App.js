import { useState } from 'react';

let nextId = 4;
const initialArtists = [
  { id: 0, name: 'Complete React Tutorial' },
  { id: 1, name: 'Build Portfolio'},
  { id: 2, name: 'Learn Lodash'},
  { id: 3, name: 'Write Documentation'},
];

export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState(
    initialArtists
  );

  function handleClick() {
    const insertAt = 1; // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Task Manager</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder='Add a new task...'
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}
          <ItemList
        artworks={name}
        onToggle={handleClick} />
          <button onClick={() => {
            setArtists(
              artists.filter(a =>
                a.id !== artist.id
              )
            );
          }}>Delete
          </button>
          </li>
           
        ))}
      </ul>
    </>
  );
}
