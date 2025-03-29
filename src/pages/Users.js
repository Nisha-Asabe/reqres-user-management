import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const Users = () => {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `https://reqres.in/api/users?page=${page}`
      );
      setUsers(response.data.data);
    };

    // Check if we need to refresh the list
    if (sessionStorage.getItem("refreshUsers") === "true") {
      sessionStorage.removeItem("refreshUsers"); // Clear flag
      fetchUsers(); // Refresh data
    }

    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            {user.first_name} {user.last_name}
            <button onClick={() => navigate(`/edit-user/${user.id}`)}>
              Edit
            </button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Users;
