"use client";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const addedUser = { id, ...newUser };

    setUsers([...users, addedUser]);
    setNewUser({ name: "", email: "" });
  };

  const handleDelete = (id) => {
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (!editingUser.name || !editingUser.email) return;

    const updated = users.map((user) =>
      user.id === editingUser.id ? editingUser : user
    );
    setUsers(updated);
    setEditingUser(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-7 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Users Management</h1>

      <form onSubmit={handleAddUser} className="mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded w-1/3"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded w-1/3"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button
          type="submit"
          className="bg-gray-700 text-white px-4 rounded hover:bg-gray-800"
        >
          Add
        </button>
      </form>

      {editingUser && (
        <form onSubmit={handleUpdateUser} className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Name"
            className="border p-2 rounded w-1/3"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded w-1/3"
            value={editingUser.email}
            onChange={(e) =>
              setEditingUser({ ...editingUser, email: e.target.value })
            }
          />
          <button
            type="submit"
            className="bg-gray-700 text-white px-4 rounded hover:bg-gray-800"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setEditingUser(null)}
            className="bg-gray-400 text-white px-4 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </form>
      )}

      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-gray-700">{user.email}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
