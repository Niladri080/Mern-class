import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Download,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

export default function DocumentDetailsPage() {
  const { id: documentId } = useParams();
  const documents = {
    1: {
      id: 1,
      name: "Aadhaar_Card.pdf",
      type: "Identity Proof",
      uploadDate: "2024-03-10",
      status: "approved",
      fileSize: "2.3 MB",
      verificationDate: "2024-03-11",
      verifiedBy: "Ministry of Home Affairs",
      confidence: 96,
      feedback:
        "Document verified successfully. Aadhaar number matches with UIDAI records. All details are authentic and valid for official use.",
      remarks: "No discrepancies found. Document is genuine.",
      history: [
        {
          date: "2024-03-11 15:30",
          event: "Document approved by verification authority",
        },
        {
          date: "2024-03-10 18:45",
          event: "AI verification completed with 96% confidence",
        },
        {
          date: "2024-03-10 18:20",
          event: "Document submitted for verification",
        },
        { date: "2024-03-10 18:15", event: "Document uploaded to system" },
      ],
    },
    2: {
      id: 2,
      name: "PAN_Card.pdf",
      type: "Tax Document",
      uploadDate: "2024-03-12",
      status: "approved",
      fileSize: "1.8 MB",
      verificationDate: "2024-03-13",
      verifiedBy: "Income Tax Department",
      confidence: 94,
      feedback:
        "Document verified successfully. All details match with government records. Document is authentic and valid.",
      remarks: "PAN details verified with Income Tax database.",
      history: [
        {
          date: "2024-03-13 10:20",
          event: "Document approved by verification authority",
        },
        {
          date: "2024-03-12 16:30",
          event: "AI verification completed with 94% confidence",
        },
        {
          date: "2024-03-12 16:10",
          event: "Document submitted for verification",
        },
        { date: "2024-03-12 16:05", event: "Document uploaded to system" },
      ],
    },
    3: {
      id: 3,
      name: "Birth_Certificate.pdf",
      type: "Identity Proof",
      uploadDate: "2024-03-14",
      status: "pending",
      fileSize: "3.1 MB",
      verificationDate: null,
      verifiedBy: null,
      confidence: 88,
      feedback:
        "Document is under review by verification authority. AI analysis completed. Awaiting manual verification.",
      remarks: "Pending review - Municipal records verification in progress.",
      history: [
        { date: "2024-03-14 14:45", event: "Assigned to verification officer" },
        {
          date: "2024-03-14 14:20",
          event: "AI verification completed with 88% confidence",
        },
        {
          date: "2024-03-14 14:05",
          event: "Document submitted for verification",
        },
        { date: "2024-03-14 14:00", event: "Document uploaded to system" },
      ],
    },
    5: {
      id: 5,
      name: "Residence_Proof.pdf",
      type: "Address Proof",
      uploadDate: "2024-03-16",
      status: "rejected",
      fileSize: "2.5 MB",
      verificationDate: "2024-03-16",
      verifiedBy: "Municipal Authority",
      confidence: 45,
      feedback:
        "Document verification failed. Address format does not match standard requirements. Please upload a valid address proof document.",
      remarks:
        "Rejected - Document does not meet verification criteria. Address details unclear.",
      history: [
        {
          date: "2024-03-16 17:30",
          event: "Document rejected by verification authority",
        },
        {
          date: "2024-03-16 17:10",
          event: "Manual review flagged issues with address format",
        },
        {
          date: "2024-03-16 16:55",
          event: "AI verification completed with 45% confidence",
        },
        {
          date: "2024-03-16 16:50",
          event: "Document submitted for verification",
        },
        { date: "2024-03-16 16:45", event: "Document uploaded to system" },
      ],
    },
  };

  const document = documents[documentId] || documents[1];

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-700" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-700" />;
      case "pending":
        return <Clock className="w-5 h-5 text-orange-700" />;
      default:
        return null;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/citizen"
          className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Document Details
        </h1>
        <div className="bg-white border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {document.name}
              </h2>
              <div className="flex items-center gap-2">
                {getStatusIcon(document.status)}
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium ${getStatusColor(
                    document.status
                  )}`}
                >
                  {document.status.charAt(0).toUpperCase() +
                    document.status.slice(1)}
                </span>
              </div>
            </div>
            <Button className="bg-gray-800 text-white hover:bg-gray-900">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Document Type
                </div>
                <div className="text-sm text-gray-900">{document.type}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Upload Date
                </div>
                <div className="text-sm text-gray-900">
                  {document.uploadDate}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  File Size
                </div>
                <div className="text-sm text-gray-900">{document.fileSize}</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Verification Date
                </div>
                <div className="text-sm text-gray-900">
                  {document.verificationDate || "Pending"}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Verified By
                </div>
                <div className="text-sm text-gray-900">
                  {document.verifiedBy || "N/A"}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">
                  Confidence Score
                </div>
                <div className="text-sm font-semibold text-gray-900">
                  {document.confidence}%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Verification Feedback
          </h2>
          <div className="space-y-4">
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                Analysis Result
              </div>
              <p className="text-sm text-gray-900 leading-relaxed">
                {document.feedback}
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="text-sm font-medium text-gray-700 mb-2">
                Remarks
              </div>
              <p className="text-sm text-gray-900 leading-relaxed">
                {document.remarks}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              Verification Timeline
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {document.history.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-gray-800"></div>
                    {index < document.history.length - 1 && (
                      <div className="w-px h-full bg-gray-300 mt-1"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="text-xs text-gray-500 mb-1">
                      {item.date}
                    </div>
                    <div className="text-sm text-gray-900">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
