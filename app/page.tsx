"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react" // Import Plus here
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Activity, CheckCircle, Clock, Zap, Play, Pause, Eye, TrendingUp, Target } from "lucide-react"

const overviewStats = [
  {
    title: "Total Jobs",
    value: "24",
    icon: Zap,
    trend: "+12%",
    description: "Active automation jobs",
  },
  {
    title: "Success Rate",
    value: "98.2%",
    icon: CheckCircle,
    trend: "+2.1%",
    description: "Last 30 days",
  },
  {
    title: "Last Trigger",
    value: "2m ago",
    icon: Clock,
    trend: "On time",
    description: "Discord webhook",
  },
  {
    title: "Active Conditions",
    value: "156",
    icon: Activity,
    trend: "+8",
    description: "Monitoring conditions",
  },
]

const activeJobs = [
  {
    id: "job_001",
    name: "Discord Price Alert",
    status: "active",
    nextRun: "in 5 minutes",
    triggerType: "Interval",
    lastRun: "2m ago",
    success: true,
  },
  {
    id: "job_002",
    name: "ETH Balance Monitor",
    status: "active",
    nextRun: "in 1 hour",
    triggerType: "Smart Contract",
    lastRun: "58m ago",
    success: true,
  },
  {
    id: "job_003",
    name: "Weekly Report Generator",
    status: "paused",
    nextRun: "Paused",
    triggerType: "CRON",
    lastRun: "2 days ago",
    success: false,
  },
  {
    id: "job_004",
    name: "API Health Check",
    status: "active",
    nextRun: "in 30 seconds",
    triggerType: "Interval",
    lastRun: "30s ago",
    success: true,
  },
]

const recentActivity = [
  {
    job: "Discord Price Alert",
    action: "Executed successfully",
    time: "2 minutes ago",
    status: "success",
  },
  {
    job: "ETH Balance Monitor",
    action: "Triggered webhook",
    time: "58 minutes ago",
    status: "success",
  },
  {
    job: "Weekly Report Generator",
    action: "Failed to execute",
    time: "2 days ago",
    status: "error",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor and manage your automation jobs</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Create Job
        </Button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="border-gray-200/60 hover:shadow-md transition-shadow duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-green-600 font-medium">{stat.trend}</span>
                <span className="text-xs text-gray-500">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Jobs Table */}
        <Card className="lg:col-span-2 border-gray-200/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Active Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Next Run</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeJobs.map((job) => (
                  <TableRow key={job.id} className="hover:bg-gray-50/50">
                    <TableCell className="font-medium">{job.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={job.status === "active" ? "default" : "secondary"}
                        className={job.status === "active" ? "bg-green-100 text-green-700 hover:bg-green-100" : ""}
                      >
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{job.nextRun}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{job.triggerType}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          {job.status === "active" ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Recent Activity Timeline */}
        <Card className="border-gray-200/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === "success" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.job}</p>
                    <p className="text-sm text-gray-600">{activity.action}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
