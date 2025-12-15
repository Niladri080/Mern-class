"use client"

import { useState } from "react"
import { Search, UserCheck, UserX, Eye } from "lucide-react"

function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const users = [
    {
      id: "12345",
      name: "Rajesh Kumar",
      email: "rajesh.k@email.com",
      role: "Citizen",
      status: "Active",
      lastActivity: "2024-12-15 10:30",
    },
    {
      id: "12346",
      name: "Priya Sharma",
      email: "priya.s@email.com",
      role: "Citizen",
      status: "Active",
      lastActivity: "2024-12-15 09:45",
    },
    {
      id: "12347",
      name: "Amit Patel",
      email: "amit.p@email.com",
      role: "Citizen",
      status: "Inactive",
      lastActivity: "2024-12-10 14:20",
    },
    {
      id: "12348",
      name: "Sneha Reddy",
      email: "sneha.r@email.com",
      role: "Citizen",
      status: "Active",
      lastActivity: "2024-12-14 16:55",
    },
    {
      id: "12349",
      name: "Vikram Singh",
      email: "vikram.s@email.com",
      role: "Citizen",
      status: "Active",
      lastActivity: "2024-12-14 11:30",
    },
    {
      id: "A001",
      name: "Admin User",
      email: "admin@gov.in",
      role: "Admin",
      status: "Active",
      lastActivity: "2024-12-15 14:23",
    },
    {
      id: "V001",
      name: "Verifier One",
      email: "verifier1@gov.in",
      role: "Verifier",
      status: "Active",
      lastActivity: "2024-12-15 13:10",
    },
  ]

  const handleToggleStatus = (userId, currentStatus) => {
    const action = currentStatus === "Active" ? "disable" : "enable"
    if (window.confirm(`Are you sure you want to ${action} this user account?`)) {
      console.log(`${action} user:`, userId)
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">User Management</h1>
        <p className="text-sm text-gray-600">Manage user accounts and permissions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Total Users</p>
          <p className="text-2xl font-bold text-gray-900">1,247</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Active Users</p>
          <p className="text-2xl font-bold text-green-600">1,189</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Inactive Users</p>
          <p className="text-2xl font-bold text-gray-600">58</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-1">Admin/Staff</p>
          <p className="text-2xl font-bold text-slate-700">12</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by name, email, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="all">All Roles</option>
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
            <option value="verifier">Verifier</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Last Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        user.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : user.role === "Verifier"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                        user.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.lastActivity}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button title="View Details" className="p-1 text-slate-700 hover:bg-slate-100 rounded">
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(user.id, user.status)}
                        title={user.status === "Active" ? "Disable Account" : "Enable Account"}
                        className={`p-1 rounded ${
                          user.status === "Active" ? "text-red-600 hover:bg-red-50" : "text-green-600 hover:bg-green-50"
                        }`}
                      >
                        {user.status === "Active" ? <UserX size={16} /> : <UserCheck size={16} />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 7 of 1,247 entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Previous</button>
            <button className="px-3 py-1 bg-slate-700 text-white rounded text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
