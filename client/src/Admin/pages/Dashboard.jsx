import { CheckCircle, Clock, XCircle, AlertTriangle } from "lucide-react"

function AdminDashboard() {
  const stats = [
    { label: "Pending Verifications", value: "24", icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
    { label: "Approved Today", value: "156", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
    { label: "Rejected Today", value: "8", icon: XCircle, color: "text-red-600", bg: "bg-red-50" },
    { label: "Error Logs", value: "3", icon: AlertTriangle, color: "text-orange-600", bg: "bg-orange-50" },
  ]

  const recentActivity = [
    { id: 1, action: "Document verified", user: "User #12345", time: "2 minutes ago", status: "approved" },
    { id: 2, action: "Document rejected", user: "User #12344", time: "15 minutes ago", status: "rejected" },
    { id: 3, action: "New submission", user: "User #12346", time: "23 minutes ago", status: "pending" },
    { id: 4, action: "Document verified", user: "User #12343", time: "1 hour ago", status: "approved" },
    { id: 5, action: "System log warning", user: "System", time: "2 hours ago", status: "warning" },
  ]

  const systemHealth = [
    { metric: "API Response Time", value: "145ms", status: "good" },
    { metric: "Database Connection", value: "Active", status: "good" },
    { metric: "AI Service", value: "Running", status: "good" },
    { metric: "Storage Used", value: "67%", status: "good" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={stat.color} size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
          <div className="p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {activity.user} • {activity.time}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    activity.status === "approved"
                      ? "bg-green-100 text-green-700"
                      : activity.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : activity.status === "warning"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="p-5 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">System Health</h2>
          </div>
          <div className="p-5 space-y-4">
            {systemHealth.map((item) => (
              <div key={item.metric}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-700">{item.metric}</span>
                  <span className={`text-sm font-medium ${item.status === "good" ? "text-green-600" : "text-red-600"}`}>
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard;
