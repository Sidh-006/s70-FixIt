import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("resident");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
      role,
    };

    console.log("Login Data:", loginData);

    // Later: send this to backend using Axios
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
        <h1 className="text-2xl font-bold text-center text-blue-600">
          FixIt Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Maintenance Complaint Management System
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full border p-2 rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full border p-2 rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium">Role</label>
            <select
              className="w-full border p-2 rounded mt-1"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="resident">Resident</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
