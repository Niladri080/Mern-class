import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Upload,
  FileText,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [documentType, setDocumentType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const documentsPerPage = 5;

  // Mock data
  const stats = {
    total: 24,
    approved: 18,
    pending: 4,
  };

  const documents = [
    {
      id: 1,
      name: "Aadhaar_Card.pdf",
      type: "Identity Proof",
      date: "2024-03-10",
      status: "approved",
    },
    {
      id: 2,
      name: "PAN_Card.pdf",
      type: "Tax Document",
      date: "2024-03-12",
      status: "approved",
    },
    {
      id: 3,
      name: "Birth_Certificate.pdf",
      type: "Identity Proof",
      date: "2024-03-14",
      status: "pending",
    },
    {
      id: 4,
      name: "Income_Certificate.pdf",
      type: "Financial Document",
      date: "2024-03-15",
      status: "pending",
    },
    {
      id: 5,
      name: "Residence_Proof.pdf",
      type: "Address Proof",
      date: "2024-03-16",
      status: "rejected",
    },
    {
      id: 6,
      name: "Driving_License.pdf",
      type: "Identity Proof",
      date: "2024-03-18",
      status: "approved",
    },
    {
      id: 7,
      name: "Voter_ID.pdf",
      type: "Identity Proof",
      date: "2024-03-20",
      status: "approved",
    },
  ];

  const activityLogs = [
    {
      id: 1,
      timestamp: "2024-03-20 14:23",
      action: "Uploaded Voter_ID.pdf for verification",
    },
    {
      id: 2,
      timestamp: "2024-03-18 09:15",
      action: "Driving_License.pdf approved by verification authority",
    },
    {
      id: 3,
      timestamp: "2024-03-16 16:45",
      action: "Uploaded Residence_Proof.pdf for verification",
    },
    {
      id: 4,
      timestamp: "2024-03-16 11:30",
      action: "Residence_Proof.pdf rejected - invalid address format",
    },
    {
      id: 5,
      timestamp: "2024-03-15 13:20",
      action: "Uploaded Income_Certificate.pdf for verification",
    },
    {
      id: 6,
      timestamp: "2024-03-14 10:10",
      action: "Uploaded Birth_Certificate.pdf for verification",
    },
  ];

  const verificationResult = {
    documentName: "PAN_Card.pdf",
    confidence: 94,
    feedback:
      "Document verified successfully. All details match with government records. Document is authentic and valid.",
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile && documentType) {
      alert(`Submitting ${selectedFile.name} as ${documentType}`);
      setSelectedFile(null);
      setDocumentType("");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-orange-100 text-orange-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalPages = Math.ceil(documents.length / documentsPerPage);
  const startIndex = (currentPage - 1) * documentsPerPage;
  const paginatedDocuments = documents.slice(
    startIndex,
    startIndex + documentsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Citizen Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-1">Total Documents</div>
            <div className="text-3xl font-semibold text-gray-900">
              {stats.total}
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-1">Approved Documents</div>
            <div className="text-3xl font-semibold text-green-700">
              {stats.approved}
            </div>
          </div>
          <div className="bg-white border border-gray-200 p-6">
            <div className="text-sm text-gray-600 mb-1">Pending Documents</div>
            <div className="text-3xl font-semibold text-orange-700">
              {stats.pending}
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Upload Document
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="document-type"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Document Type
                </label>
                <select
                  id="document-type"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                >
                  <option value="">Select document type</option>
                  <option value="Identity Proof">Identity Proof</option>
                  <option value="Address Proof">Address Proof</option>
                  <option value="Tax Document">Tax Document</option>
                  <option value="Financial Document">Financial Document</option>
                  <option value="Educational Certificate">
                    Educational Certificate
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="file-upload"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Choose File (PDF or Image)
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 file:mr-4 file:py-1 file:px-4 file:border-0 file:bg-gray-700 file:text-white file:text-sm hover:file:bg-gray-800"
                  required
                />
              </div>
            </div>
            {selectedFile && (
              <div className="text-sm text-gray-600">
                Selected: {selectedFile.name}
              </div>
            )}
            <Button
              type="submit"
              className="bg-gray-800 text-white hover:bg-gray-900 px-6"
            >
              <Upload className="w-4 h-4 mr-2" />
              Submit Document
            </Button>
          </form>
        </div>

        {/* Document Status Table */}
        <div className="bg-white border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Document Status
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Document Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Document Type
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Upload Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedDocuments.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {doc.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {doc.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {doc.date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium ${getStatusColor(
                          doc.status
                        )}`}
                      >
                        {doc.status.charAt(0).toUpperCase() +
                          doc.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => navigate(`/citizen/document/${doc.id}`)}
                        className="text-sm text-gray-700 hover:text-gray-900 underline"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + documentsPerPage, documents.length)} of{" "}
              {documents.length} documents
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                  className={
                    currentPage === i + 1
                      ? "bg-gray-800 text-white hover:bg-gray-900"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Verification Feedback Section */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Verification Result
          </h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Document:
              </span>
              <span className="text-sm text-gray-900">
                {verificationResult.documentName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Confidence Score:
              </span>
              <span className="text-sm font-semibold text-green-700">
                {verificationResult.confidence}%
              </span>
            </div>
            <div className="pt-2 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-700 block mb-2">
                Feedback:
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                {verificationResult.feedback}
              </p>
            </div>
          </div>
        </div>

        {/* User Activity Logs */}
        <div className="bg-white border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Activity History
            </h2>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <div className="divide-y divide-gray-200">
              {activityLogs.map((log) => (
                <div key={log.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="text-xs text-gray-500 mb-1">
                    {log.timestamp}
                  </div>
                  <div className="text-sm text-gray-900">{log.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
