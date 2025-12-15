"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, Filter } from "lucide-react"

function VerificationQueue() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [documentTypeFilter, setDocumentTypeFilter] = useState("all")

  const documents = [
    {
      id: "DOC-2024-001",
      userName: "Rajesh Kumar",
      userId: "12345",
      type: "Aadhaar Card",
      aiScore: 92,
      date: "2024-12-15",
      status: "Pending",
    },
    {
      id: "DOC-2024-002",
      userName: "Priya Sharma",
      userId: "12346",
      type: "PAN Card",
      aiScore: 88,
      date: "2024-12-15",
      status: "Pending",
    },
    {
      id: "DOC-2024-003",
      userName: "Amit Patel",
      userId: "12347",
      type: "Voter ID",
      aiScore: 95,
      date: "2024-12-14",
      status: "Pending",
    },
    {
      id: "DOC-2024-004",
      userName: "Sneha Reddy",
      userId: "12348",
      type: "Driving License",
      aiScore: 78,
      date: "2024-12-14",
      status: "Pending",
    },
    {
      id: "DOC-2024-005",
      userName: "Vikram Singh",
      userId: "12349",
      type: "Aadhaar Card",
      aiScore: 85,
      date: "2024-12-14",
      status: "Pending",
    },
  ]

  const handleReview = (docId) => {
    navigate(`/review/${docId}`)
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Verification Queue</h1>
        <p className="text-sm text-gray-600">Review and verify pending documents</p>
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by ID or name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
          <select
            value={documentTypeFilter}
            onChange={(e) => setDocumentTypeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
          >
            <option value="all">All Document Types</option>
            <option value="aadhaar">Aadhaar Card</option>
            <option value="pan">PAN Card</option>
            <option value="voter">Voter ID</option>
            <option value="license">Driving License</option>
          </select>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <Filter size={18} />
            <span>Apply Filters</span>
          </button>
        </div>
      </div>

      {/* Documents Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Document ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">User Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">User ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Document Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">AI Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Submission Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {documents.map((doc) => (
                <tr key={doc.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{doc.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{doc.userName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{doc.userId}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{doc.type}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
                        doc.aiScore >= 90
                          ? "bg-green-100 text-green-700"
                          : doc.aiScore >= 80
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {doc.aiScore}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{doc.date}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-700">
                      {doc.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleReview(doc.id)}
                      className="text-sm text-slate-700 hover:text-slate-900 font-medium hover:underline"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 5 of 24 entries</p>
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

export default VerificationQueue
