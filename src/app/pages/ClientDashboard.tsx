import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  Upload, 
  Download,
  Bell,
  CreditCard,
  BarChart3,
  User,
  Settings,
  LogOut,
  Home
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

export function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const applications = [
    {
      id: "APP-2024-001",
      country: "🇺🇸 United States",
      type: "H-1B Work Visa",
      status: "Under Review",
      progress: 75,
      statusColor: "text-[#F59E0B]",
      bgColor: "bg-[#F59E0B]/10",
      submittedDate: "Feb 15, 2026",
      estimatedCompletion: "Mar 15, 2026"
    },
    {
      id: "APP-2024-002",
      country: "🇬🇧 United Kingdom",
      type: "Tourist Visa",
      status: "Approved",
      progress: 100,
      statusColor: "text-[#059669]",
      bgColor: "bg-[#059669]/10",
      submittedDate: "Jan 10, 2026",
      estimatedCompletion: "Feb 10, 2026"
    }
  ];

  const documents = [
    { name: "Passport Copy", status: "Uploaded", date: "Feb 15, 2026", size: "2.4 MB" },
    { name: "Employment Letter", status: "Uploaded", date: "Feb 16, 2026", size: "1.1 MB" },
    { name: "Bank Statement", status: "Uploaded", date: "Feb 17, 2026", size: "3.2 MB" },
    { name: "Educational Certificate", status: "Pending", date: "-", size: "-" },
  ];

  const payments = [
    { id: "PAY-001", amount: "$299", status: "Completed", date: "Feb 15, 2026", method: "Visa •••• 4242" },
    { id: "PAY-002", amount: "$349", status: "Completed", date: "Jan 10, 2026", method: "Mastercard •••• 8888" },
  ];

  const notifications = [
    { type: "success", message: "Your document has been verified", time: "2 hours ago" },
    { type: "info", message: "Application status updated to 'Under Review'", time: "1 day ago" },
    { type: "warning", message: "Additional document requested", time: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      <Navigation />

      <div className="pt-24 px-6 lg:px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-6">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0 hidden lg:block">
              <Card className="rounded-3xl border-2 overflow-hidden sticky top-28">
                <div className="p-6 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 text-2xl font-semibold">
                    JD
                  </div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-sm text-white/80">john.doe@email.com</p>
                </div>

                <nav className="p-4">
                  {[
                    { id: "overview", icon: Home, label: "Overview" },
                    { id: "applications", icon: FileText, label: "Applications" },
                    { id: "documents", icon: Upload, label: "Documents" },
                    { id: "payments", icon: CreditCard, label: "Payments" },
                    { id: "analytics", icon: BarChart3, label: "Analytics" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${
                        activeTab === item.id
                          ? "bg-[#1E40AF] text-white"
                          : "text-[#64748B] hover:bg-[#F1F5F9]"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}

                  <div className="border-t border-[#E2E8F0] my-4" />

                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-[#64748B] hover:bg-[#F1F5F9] transition-colors">
                    <Settings className="w-5 h-5" />
                    <span className="text-sm font-medium">Settings</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#DC2626] hover:bg-red-50 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </nav>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-semibold text-[#0F172A] mb-2">
                  Welcome back, John! 👋
                </h1>
                <p className="text-lg text-[#64748B]">
                  Here's what's happening with your visa applications
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1E40AF]/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[#1E40AF]" />
                    </div>
                    <Badge variant="secondary" className="bg-[#F1F5F9] text-[#64748B]">
                      Total
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">2</div>
                  <div className="text-sm text-[#64748B]">Active Applications</div>
                </Card>

                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <Badge className="bg-[#F59E0B] text-white border-0">
                      Pending
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">1</div>
                  <div className="text-sm text-[#64748B]">Under Review</div>
                </Card>

                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#059669]" />
                    </div>
                    <Badge className="bg-[#059669] text-white border-0">
                      Success
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">1</div>
                  <div className="text-sm text-[#64748B]">Approved</div>
                </Card>

                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                      <Upload className="w-6 h-6 text-[#7C3AED]" />
                    </div>
                    <Badge variant="secondary" className="bg-[#F1F5F9] text-[#64748B]">
                      Files
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">7</div>
                  <div className="text-sm text-[#64748B]">Documents Uploaded</div>
                </Card>
              </div>

              {/* Applications Status */}
              <Card className="mb-8 rounded-3xl border-2">
                <div className="p-6 border-b border-[#E2E8F0]">
                  <h2 className="text-xl font-semibold text-[#0F172A]">Application Status</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {applications.map((app) => (
                      <div key={app.id} className="bg-[#F8FAFC] rounded-2xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-[#0F172A]">{app.country}</h3>
                              <Badge className={`${app.bgColor} ${app.statusColor} border-0`}>
                                {app.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-[#64748B] mb-1">{app.type}</p>
                            <p className="text-xs text-[#94A3B8]">Application ID: {app.id}</p>
                          </div>
                          <Button variant="outline" size="sm" className="rounded-xl">
                            View Details
                          </Button>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm mb-2">
                            <span className="text-[#64748B]">Progress</span>
                            <span className="font-semibold text-[#0F172A]">{app.progress}%</span>
                          </div>
                          <Progress value={app.progress} className="h-2" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-[#64748B]">Submitted:</span>
                            <div className="font-medium text-[#0F172A]">{app.submittedDate}</div>
                          </div>
                          <div>
                            <span className="text-[#64748B]">Est. Completion:</span>
                            <div className="font-medium text-[#0F172A]">{app.estimatedCompletion}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Documents Section */}
                <Card className="rounded-3xl border-2">
                  <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-[#0F172A]">Recent Documents</h2>
                    <Button size="sm" className="bg-[#1E40AF] hover:bg-[#1E40AF]/90 text-white rounded-xl">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                              <FileText className="w-5 h-5 text-[#1E40AF]" />
                            </div>
                            <div>
                              <div className="font-medium text-[#0F172A] text-sm">{doc.name}</div>
                              <div className="text-xs text-[#64748B]">{doc.size} • {doc.date}</div>
                            </div>
                          </div>
                          <Badge className={
                            doc.status === "Uploaded" 
                              ? "bg-[#059669]/10 text-[#059669] border-0" 
                              : "bg-[#F59E0B]/10 text-[#F59E0B] border-0"
                          }>
                            {doc.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Notifications */}
                <Card className="rounded-3xl border-2">
                  <div className="p-6 border-b border-[#E2E8F0] flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-[#0F172A]">Notifications</h2>
                    <Bell className="w-5 h-5 text-[#64748B]" />
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {notifications.map((notification, index) => (
                        <div key={index} className="flex gap-3 p-4 bg-[#F8FAFC] rounded-xl">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            notification.type === "success" 
                              ? "bg-[#059669]" 
                              : notification.type === "warning"
                              ? "bg-[#F59E0B]"
                              : "bg-[#1E40AF]"
                          }`} />
                          <div className="flex-1">
                            <p className="text-sm text-[#0F172A] mb-1">{notification.message}</p>
                            <p className="text-xs text-[#64748B]">{notification.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                {/* Payment History */}
                <Card className="rounded-3xl border-2 lg:col-span-2">
                  <div className="p-6 border-b border-[#E2E8F0]">
                    <h2 className="text-xl font-semibold text-[#0F172A]">Payment History</h2>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {payments.map((payment) => (
                        <div key={payment.id} className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-xl">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                              <CreditCard className="w-6 h-6 text-[#059669]" />
                            </div>
                            <div>
                              <div className="font-semibold text-[#0F172A]">{payment.amount}</div>
                              <div className="text-sm text-[#64748B]">{payment.method}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className="bg-[#059669]/10 text-[#059669] border-0 mb-1">
                              {payment.status}
                            </Badge>
                            <div className="text-xs text-[#64748B]">{payment.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
