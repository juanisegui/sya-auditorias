import React, { useState } from 'react';

const Checklist = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const toggleComplete = (index) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="mb-4">
        <input
          type="text"
          className="border rounded w-full py-2 px-3 text-primary focus:outline-none focus:shadow-outline"
          placeholder="Agregar nuevo ítem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          onClick={addItem}
          className="mt-2 w-full bg-primary text-white py-2 rounded hover:bg-green-700"
        >
          Agregar
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 bg-gray-100 rounded ${
              item.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            <span onClick={() => toggleComplete(index)}>{item.text}</span>
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 hover:text-red-700"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
