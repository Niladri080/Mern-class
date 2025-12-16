import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import Header from "../components/Header";
import axios from "axios";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_PATH}/user/profile`,
          { withCredentials: true }
        );
        if (res.data.success) {
          setFormData({
            name: res.data.citizen.name || "",
            email: res.data.citizen.email || "",
            phone: res.data.citizen.phoneNumber || "",
            address: res.data.citizen.address || "",
            dateOfBirth: res.data.citizen.dateOfBirth || "",
            aadhaarNumber: res.data.citizen.govtIds?.find(
              (id) => id.type === "aadhaar"
            )?.value
              ? res.data.citizen.govtIds?.find((id) => id.type === "aadhaar")
                  ?.value
              : "",
            panNumber: res.data.citizen.govtIds?.find((id) => id.type === "pan")
              ?.value
              ? res.data.citizen.govtIds?.find((id) => id.type === "pan")?.value
              : "",
            accountCreated: res.data.citizen.createdAt || "",
            lastLogin: res.data.citizen.lastLoginAt || "",
          });
        } else {
          setError(res.data.message || "Failed to fetch profile");
        }
      } catch (err) {
        setError(err?.response?.data?.message || "Network error");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

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

  // Helper to decide if a field should be editable (if missing or editing)
  const editableField = (field, label, type = "text") => {
    return isEditing || !formData[field] ? (
      <input
        type={type}
        name={field}
        value={formData[field] || ""}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
        required
      />
    ) : (
      <div className="text-sm text-gray-900">{formData[field]}</div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );
  }
  if (!formData) {
    return null;
  }

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
                    {editableField("name", "Full Name")}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    {editableField("email", "Email Address", "email")}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    {editableField("phone", "Phone Number", "tel")}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Address
                    </label>
                    {isEditing || !formData.address ? (
                      <textarea
                        name="address"
                        value={formData.address || ""}
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
                    {editableField("dateOfBirth", "Date of Birth", "date")}
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
                    {formData.aadhaarNumber ? (
                      formData.aadhaarNumber
                    ) : (
                      <span className="text-gray-400 italic">
                        Not uploaded yet
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    PAN Number
                  </div>
                  <div className="text-sm text-gray-900">
                    {formData.panNumber ? (
                      formData.panNumber
                    ) : (
                      <span className="text-gray-400 italic">
                        Not uploaded yet
                      </span>
                    )}
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
                  <div className="text-2xl font-semibold text-gray-900">24</div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Approved</div>
                  <div className="text-xl font-semibold text-green-700">18</div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Pending</div>
                  <div className="text-xl font-semibold text-orange-700">4</div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Rejected</div>
                  <div className="text-xl font-semibold text-red-700">2</div>
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
                    {formData.accountCreated ? (
                      new Date(formData.accountCreated).toLocaleDateString()
                    ) : (
                      <span className="text-gray-400 italic">
                        Not available
                      </span>
                    )}
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Last Login</div>
                  <div className="text-sm text-gray-900">
                    {formData.lastLogin ? (
                      new Date(formData.lastLogin).toLocaleString()
                    ) : (
                      <span className="text-gray-400 italic">
                        Not available
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
