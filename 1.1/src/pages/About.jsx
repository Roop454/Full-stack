import React, { useState, useEffect } from "react";

export default function About() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from JSONPlaceholder API
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setUsers(data.slice(0, 5)); // Show first 5 users
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
