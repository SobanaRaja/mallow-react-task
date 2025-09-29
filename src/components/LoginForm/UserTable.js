import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <table className="table-auto w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2 text-left">Avatar</th>
          <th className="border p-2 text-left">Email</th>
          <th className="border p-2 text-left">First Name</th>
          <th className="border p-2 text-left">Last Name</th>
          <th className="border p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="border p-2">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-10 h-10 rounded-full"
              />
            </td>
            <td className="border p-2 text-blue-600">{user.email}</td>
            <td className="border p-2">{user.first_name}</td>
            <td className="border p-2">{user.last_name}</td>
            <td className="border p-2">
              <button
                onClick={() => onEdit(user)}
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(user.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;