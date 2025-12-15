"use client"

import { useState } from "react"
import { Search, Download } from "lucide-react"

function LogsAudit() {
  const [searchTerm, setSearchTerm] = useState("")
  const [levelFilter, setLevelFilter] = useState("all")
  const [moduleFilter, setModuleFilter] = useState("all")

  const logs = [
    {
      id: 1,
      timestamp: "2024-12-15 14:23:45",
      level: "INFO",
      module: "Authentication",
      message: "User login successful - admin@gov.in",
    },
    {
      id: 2,
      timestamp: "2024-12-15 14:22:12",
      level: "INFO",
      module: "Document Verification",
      message: "Document DOC-2024-001 approved by admin user",
    },
    {
      id: 3,
      timestamp: "2024-12-15 14:20:33",
      level: "WARN",
      module: "AI Service",
      message: "AI confidence score below threshold (78%) for DOC-2024-004",
    },
    {
      id: 4,
      timestamp: "2024-12-15 14:18:56",
      level: "ERROR",
      module: "Database",
      message: "Connection timeout - retry attempt 1 of 3",
    },
    {
      id: 5,
      timestamp: "2024-12-15 14:15:22",
      level: "INFO",
      module: "Document Upload",
      message: "New document uploaded - DOC-2024-005",
    },
    {
      id: 6,
      timestamp: "2024-12-15 14:12:40",
      level: "INFO",
      module: "Authentication",
      message: "Password changed for user ID 12345",
    },
    {
      id: 7,
      timestamp: "2024-12-15 14:10:15",
      level: "WARN",
      module: "Storage",
      message: "Storage usage at 67% capacity",
    },
    {
      id: 8,
      timestamp: "2024-12-15 14:08:33",
      level: "ERROR",
      module: "Email Service",
      message: "Failed to send notification email to user@example.com",
    },
    {
      id: 9,
      timestamp: "2024-12-15 14:05:21",
      level: "INFO",
      module: "Backup",
      message: "Automated database backup completed successfully",
    },
    {
      id: 10,
      timestamp: "2024-12-15 14:02:10",
      level: "INFO",
      module: "System",
      message: "Scheduled maintenance task completed",
    },
  ]

  const getLevelColor = (level) => {
    switch (level) {
      case "ERROR":
        return "bg-red-100 text-red-700"
      case "WARN":
        return "bg-orange-100 text-orange-700"
      case "INFO":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Logs & Audit Trail</h1>
        <p className="text-sm text-gray-600">Monitor system activity and review audit logs</p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>
          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="all">All Levels</option>
            <option value="error">ERROR</option>
            <option value="warn">WARN</option>
            <option value="info">INFO</option>
          </select>
          <select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="all">All Modules</option>
            <option value="auth">Authentication</option>
            <option value="doc">Document Verification</option>
            <option value="ai">AI Service</option>
            <option value="db">Database</option>
            <option value="system">System</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Module</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">{log.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded text-xs font-medium ${getLevelColor(log.level)}`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{log.module}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{log.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 10 of 234 entries</p>
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

export default LogsAudit
