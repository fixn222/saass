import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { 
  Users, 
  FileText, 
  CheckCircle2, 
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  TrendingUp,
  Globe2,
  DollarSign,
  Activity,
  MoreVertical,
  Eye,
  Check,
  X,
  FileQuestion
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

export function AdminDashboard() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const applications = [
    {
      id: "APP-2024-156",
      applicant: "Sarah Johnson",
      country: "🇺🇸 United States",
      type: "Work Visa",
      status: "Pending Review",
      submittedDate: "Feb 25, 2026",
      priority: "High"
    },
    {
      id: "APP-2024-155",
      applicant: "Michael Chen",
      country: "🇬🇧 United Kingdom",
      type: "Student Visa",
      status: "Under Review",
      submittedDate: "Feb 24, 2026",
      priority: "Medium"
    },
    {
      id: "APP-2024-154",
      applicant: "Emma Williams",
      country: "🇨🇦 Canada",
      type: "Tourist Visa",
      status: "Documents Requested",
      submittedDate: "Feb 23, 2026",
      priority: "Low"
    },
    {
      id: "APP-2024-153",
      applicant: "James Rodriguez",
      country: "🇦🇺 Australia",
      type: "Work Visa",
      status: "Approved",
      submittedDate: "Feb 22, 2026",
      priority: "High"
    },
    {
      id: "APP-2024-152",
      applicant: "Olivia Brown",
      country: "🇩🇪 Germany",
      type: "Student Visa",
      status: "Rejected",
      submittedDate: "Feb 21, 2026",
      priority: "Medium"
    },
  ];

  const monthlyData = [
    { month: "Jan", applications: 120, approved: 95, rejected: 15 },
    { month: "Feb", applications: 150, approved: 118, rejected: 22 },
    { month: "Mar", applications: 135, approved: 105, rejected: 18 },
    { month: "Apr", applications: 180, approved: 145, rejected: 25 },
    { month: "May", applications: 165, approved: 132, rejected: 20 },
    { month: "Jun", applications: 195, approved: 158, rejected: 27 },
  ];

  const visaTypeData = [
    { name: "Work Visa", value: 450, color: "#1E40AF" },
    { name: "Student Visa", value: 320, color: "#4F46E5" },
    { name: "Tourist Visa", value: 280, color: "#7C3AED" },
    { name: "Business Visa", value: 150, color: "#059669" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-[#059669]/10 text-[#059669] border-0">{status}</Badge>;
      case "Rejected":
        return <Badge className="bg-[#DC2626]/10 text-[#DC2626] border-0">{status}</Badge>;
      case "Under Review":
        return <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] border-0">{status}</Badge>;
      case "Documents Requested":
        return <Badge className="bg-[#1E40AF]/10 text-[#1E40AF] border-0">{status}</Badge>;
      default:
        return <Badge className="bg-[#64748B]/10 text-[#64748B] border-0">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return <Badge className="bg-[#DC2626] text-white border-0">High</Badge>;
      case "Medium":
        return <Badge className="bg-[#F59E0B] text-white border-0">Medium</Badge>;
      default:
        return <Badge className="bg-[#64748B] text-white border-0">Low</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      <Navigation />

      <div className="pt-24 px-6 lg:px-8 pb-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex gap-6">
            {/* Dark Sidebar */}
            <div className="w-64 flex-shrink-0 hidden lg:block">
              <div className="bg-[#0F172A] rounded-3xl overflow-hidden sticky top-28">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                      <Globe2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Admin Panel</h3>
                      <p className="text-xs text-gray-400">CNI Global</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20 rounded-2xl p-4 border border-[#4F46E5]/30">
                    <div className="text-white font-semibold mb-1">Admin User</div>
                    <div className="text-xs text-gray-300">admin@cniglobal.com</div>
                  </div>
                </div>

                <nav className="p-4">
                  {[
                    { icon: Activity, label: "Overview", active: true },
                    { icon: FileText, label: "Applications", active: false },
                    { icon: Users, label: "Users", active: false },
                    { icon: Globe2, label: "Countries", active: false },
                    { icon: DollarSign, label: "Revenue", active: false },
                  ].map((item, index) => (
                    <button
                      key={index}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${
                        item.active
                          ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-semibold text-[#0F172A] mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-lg text-[#64748B]">
                  Manage visa applications and monitor platform performance
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 rounded-2xl border-2 bg-gradient-to-br from-[#1E40AF] to-[#1E40AF]/90 text-white border-[#1E40AF]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <FileText className="w-6 h-6" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="text-3xl font-semibold mb-1">1,247</div>
                  <div className="text-sm text-white/80">Total Applications</div>
                  <div className="text-xs text-white/60 mt-2">+12.5% from last month</div>
                </Card>

                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <Badge className="bg-[#F59E0B]/10 text-[#F59E0B] border-0">
                      Active
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">89</div>
                  <div className="text-sm text-[#64748B]">Pending Review</div>
                  <div className="text-xs text-[#94A3B8] mt-2">Requires attention</div>
                </Card>

                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-[#059669]" />
                    </div>
                    <Badge className="bg-[#059669]/10 text-[#059669] border-0">
                      +8.2%
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">1,058</div>
                  <div className="text-sm text-[#64748B]">Approved</div>
                  <div className="text-xs text-[#94A3B8] mt-2">84.8% approval rate</div>
                </Card>

                <Card className="p-6 rounded-2xl border-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[#7C3AED]" />
                    </div>
                    <Badge className="bg-[#7C3AED]/10 text-[#7C3AED] border-0">
                      Revenue
                    </Badge>
                  </div>
                  <div className="text-3xl font-semibold text-[#0F172A] mb-1">$382K</div>
                  <div className="text-sm text-[#64748B]">Total Revenue</div>
                  <div className="text-xs text-[#94A3B8] mt-2">This quarter</div>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Application Trends */}
                <Card className="lg:col-span-2 rounded-3xl border-2 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-[#0F172A]">Application Trends</h2>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="month" stroke="#64748B" />
                      <YAxis stroke="#64748B" />
                      <Tooltip />
                      <Line type="monotone" dataKey="applications" stroke="#1E40AF" strokeWidth={3} />
                      <Line type="monotone" dataKey="approved" stroke="#059669" strokeWidth={3} />
                      <Line type="monotone" dataKey="rejected" stroke="#DC2626" strokeWidth={2} strokeDasharray="5 5" />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>

                {/* Visa Types Distribution */}
                <Card className="rounded-3xl border-2 p-6">
                  <h2 className="text-xl font-semibold text-[#0F172A] mb-6">Visa Types</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={visaTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={(entry) => entry.name}
                      >
                        {visaTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              {/* Applications Table */}
              <Card className="rounded-3xl border-2">
                <div className="p-6 border-b border-[#E2E8F0]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-xl font-semibold text-[#0F172A]">Recent Applications</h2>
                    
                    <div className="flex gap-3">
                      <div className="relative flex-1 md:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B]" />
                        <Input
                          type="text"
                          placeholder="Search applications..."
                          className="pl-10 h-10 rounded-xl border-2 md:w-64"
                        />
                      </div>
                      <Button variant="outline" size="icon" className="rounded-xl">
                        <Filter className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Application ID
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Applicant
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Country
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Priority
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Submitted
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E8F0]">
                      {applications.map((app) => (
                        <tr key={app.id} className="hover:bg-[#F8FAFC] transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-medium text-[#1E40AF]">{app.id}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white text-xs font-semibold">
                                {app.applicant.split(' ').map(n => n[0]).join('')}
                              </div>
                              <span className="text-sm font-medium text-[#0F172A]">{app.applicant}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-[#0F172A]">{app.country}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-[#64748B]">{app.type}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getStatusBadge(app.status)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getPriorityBadge(app.priority)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm text-[#64748B]">{app.submittedDate}</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-[#059669]">
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-[#DC2626]">
                                <X className="w-4 h-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-[#F59E0B]">
                                <FileQuestion className="w-4 h-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <p className="text-sm text-[#64748B]">
                    Showing 1 to 5 of 89 applications
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl bg-[#1E40AF] text-white hover:bg-[#1E40AF]/90">
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      3
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Next
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
