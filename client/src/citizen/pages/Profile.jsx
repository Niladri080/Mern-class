import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import Header from "../components/Header";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 98765 43210",
    address: "123 MG Road, Bangalore, Karnataka, India - 560001",
    dateOfBirth: "1985-06-15",
    aadhaarNumber: "XXXX XXXX 1234",
    panNumber: "ABCDE1234F",
  });

  const stats = {
    totalDocuments: 24,
    approvedDocuments: 18,
    pendingDocuments: 4,
    rejectedDocuments: 2,
    accountCreated: "2023-01-15",
    lastLogin: "2024-03-20 14:23",
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile updated successfully");
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/citizen"
          className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 mb-6 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8">User Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h2>
                {!isEditing && (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="bg-gray-800 text-white hover:bg-gray-900"
                    size="sm"
                  >
                    Edit Profile
                  </Button>
                )}
              </div>

              <form onSubmit={handleSave}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    ) : (
                      <div className="text-sm text-gray-900">
                        {formData.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    ) : (
                      <div className="text-sm text-gray-900">
                        {formData.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    ) : (
                      <div className="text-sm text-gray-900">
                        {formData.phone}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Address
                    </label>
                    {isEditing ? (
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    ) : (
                      <div className="text-sm text-gray-900">
                        {formData.address}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date of Birth
                    </label>
                    {isEditing ? (
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                      />
                    ) : (
                      <div className="text-sm text-gray-900">
                        {formData.dateOfBirth}
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                    <Button
                      type="submit"
                      className="bg-gray-800 text-white hover:bg-gray-900"
                    >
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="border-gray-300 text-gray-700 hover:bg-gray-100"
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </form>
            </div>

            {/* Government IDs */}
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Government IDs
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    Aadhaar Number
                  </div>
                  <div className="text-sm text-gray-900">
                    {formData.aadhaarNumber}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </div>
                  <div className="text-sm text-gray-900">
                    {formData.panNumber}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Statistics */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Account Statistics
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Total Documents
                  </div>
                  <div className="text-2xl font-semibold text-gray-900">
                    {stats.totalDocuments}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Approved</div>
                  <div className="text-xl font-semibold text-green-700">
                    {stats.approvedDocuments}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Pending</div>
                  <div className="text-xl font-semibold text-orange-700">
                    {stats.pendingDocuments}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Rejected</div>
                  <div className="text-xl font-semibold text-red-700">
                    {stats.rejectedDocuments}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Account Activity
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    Account Created
                  </div>
                  <div className="text-sm text-gray-900">
                    {stats.accountCreated}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Last Login</div>
                  <div className="text-sm text-gray-900">{stats.lastLogin}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
