"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, FileText } from "lucide-react"

function DocumentReview() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [rejectionReason, setRejectionReason] = useState("")
  const [showRejectDialog, setShowRejectDialog] = useState(false)

  const documentData = {
    id: id,
    userName: "Rajesh Kumar",
    userId: "12345",
    type: "Aadhaar Card",
    submissionDate: "2024-12-15 10:30 AM",
    aiScore: 92,
    extractedText: {
      name: "RAJESH KUMAR",
      dob: "15/08/1985",
      gender: "MALE",
      aadhaarNumber: "1234 5678 9012",
      address: "123, MG Road, Bangalore, Karnataka - 560001",
    },
    aiAnalysis: {
      confidence: 92,
      remarks: [
        "Document appears authentic",
        "Text extraction successful",
        "No tampering detected",
        "All fields are clearly visible",
      ],
      warnings: ["Minor blur detected in bottom right corner"],
    },
    timeline: [
      { time: "10:30 AM", event: "Document submitted by user", type: "info" },
      { time: "10:31 AM", event: "AI verification initiated", type: "info" },
      { time: "10:32 AM", event: "AI verification completed - Score: 92%", type: "success" },
      { time: "10:33 AM", event: "Queued for manual review", type: "pending" },
    ],
  }

  const handleApprove = () => {
    if (window.confirm("Are you sure you want to approve this document?")) {
      console.log("Document approved:", id)
      navigate("/verification")
    }
  }

  const handleReject = () => {
    if (!rejectionReason.trim()) {
      alert("Please provide a rejection reason")
      return
    }
    console.log("Document rejected:", id, "Reason:", rejectionReason)
    setShowRejectDialog(false)
    navigate("/verification")
  }

  return (
    <div>
      <button
        onClick={() => navigate("/verification")}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back to Queue</span>
      </button>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Document Review</h1>
        <p className="text-sm text-gray-600">
          {documentData.type} - {documentData.id}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Document Preview & Extracted Text */}
        <div className="lg:col-span-2 space-y-6">
          {/* Document Preview */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Document Preview</h2>
            </div>
            <div className="p-5">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <FileText className="mx-auto text-gray-400 mb-3" size={48} />
                  <p className="text-gray-600">Document Preview</p>
                  <p className="text-sm text-gray-500 mt-1">{documentData.type}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Extracted Text */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Extracted Information</h2>
            </div>
            <div className="p-5">
              <dl className="grid grid-cols-2 gap-4">
                {Object.entries(documentData.extractedText).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-xs font-medium text-gray-500 uppercase mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="text-sm text-gray-900 font-medium">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Right Column - AI Analysis & Timeline */}
        <div className="space-y-6">
          {/* User Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">User Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Name</p>
                <p className="text-sm font-medium text-gray-900">{documentData.userName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">User ID</p>
                <p className="text-sm font-medium text-gray-900">{documentData.userId}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Submission Date</p>
                <p className="text-sm font-medium text-gray-900">{documentData.submissionDate}</p>
              </div>
            </div>
          </div>

          {/* AI Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">AI Analysis</h2>
            </div>
            <div className="p-5">
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Confidence Score</p>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${documentData.aiAnalysis.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{documentData.aiAnalysis.confidence}%</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs font-medium text-gray-700 mb-2">AI Remarks</p>
                <ul className="space-y-2">
                  {documentData.aiAnalysis.remarks.map((remark, index) => (
                    <li key={index} className="flex gap-2 text-sm">
                      <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{remark}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {documentData.aiAnalysis.warnings.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-gray-700 mb-2">Warnings</p>
                  <ul className="space-y-2">
                    {documentData.aiAnalysis.warnings.map((warning, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <AlertCircle className="text-orange-600 flex-shrink-0" size={16} />
                        <span className="text-gray-700">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-gray-200 rounded-lg">
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Activity Timeline</h2>
            </div>
            <div className="p-5">
              <div className="space-y-4">
                {documentData.timeline.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                        item.type === "success"
                          ? "bg-green-500"
                          : item.type === "pending"
                            ? "bg-yellow-500"
                            : "bg-blue-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{item.event}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Final Decision</h3>
            <div className="space-y-3">
              <button
                onClick={handleApprove}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <CheckCircle size={20} />
                <span>Approve Document</span>
              </button>
              <button
                onClick={() => setShowRejectDialog(true)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                <XCircle size={20} />
                <span>Reject Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reject Dialog */}
      {showRejectDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reject Document</h3>
            <p className="text-sm text-gray-600 mb-4">Please provide a reason for rejection:</p>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Enter rejection reason..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowRejectDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleReject}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Confirm Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentReview
