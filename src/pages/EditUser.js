import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      alert("User updated successfully");

      // Navigate back and pass updated user in state
      navigate("/users", { state: { updatedUser: user } });
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={user.first_name}
          onChange={(e) => setUser({ ...user, first_name: e.target.value })}
          required
        />
        <input
          type="text"
          value={user.last_name}
          onChange={(e) => setUser({ ...user, last_name: e.target.value })}
          required
        />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditUser;
