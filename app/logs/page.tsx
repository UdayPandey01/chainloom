"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Filter, Eye, Download, CheckCircle, XCircle, Clock, RefreshCw } from "lucide-react"

const jobLogs = [
  {
    id: "log_001",
    jobName: "Discord Price Alert",
    timestamp: "2024-01-15 14:30:25",
    duration: "1.2s",
    status: "success",
    result: "Webhook delivered successfully",
    payload: '{"content": "ETH price: $3,200"}',
    response: '{"status": "ok"}',
  },
  {
    id: "log_002",
    jobName: "ETH Balance Monitor",
    timestamp: "2024-01-15 14:25:10",
    duration: "2.8s",
    status: "success",
    result: "Contract call executed",
    payload: '{"address": "0x...", "amount": "1000"}',
    response: '{"txHash": "0x..."}',
  },
  {
    id: "log_003",
    jobName: "Weekly Report Generator",
    timestamp: "2024-01-13 09:00:00",
    duration: "timeout",
    status: "error",
    result: "Request timeout after 30s",
    payload: '{"report_type": "weekly"}',
    response: "null",
  },
  {
    id: "log_004",
    jobName: "API Health Check",
    timestamp: "2024-01-15 14:29:45",
    duration: "0.8s",
    status: "success",
    result: "Health check passed",
    payload: '{"endpoint": "/health"}',
    response: '{"status": "healthy"}',
  },
  {
    id: "log_005",
    jobName: "Discord Price Alert",
    timestamp: "2024-01-15 14:25:25",
    duration: "1.1s",
    status: "success",
    result: "Webhook delivered successfully",
    payload: '{"content": "ETH price: $3,180"}',
    response: '{"status": "ok"}',
  },
]

export default function JobLogs() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Logs</h1>
          <p className="text-gray-600 mt-1">Monitor execution history and debug issues</p>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Filters */}
      <Card className="border-gray-200/60">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search logs..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                <SelectItem value="discord">Discord Price Alert</SelectItem>
                <SelectItem value="eth">ETH Balance Monitor</SelectItem>
                <SelectItem value="report">Weekly Report</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card className="border-gray-200/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Execution History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Name</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobLogs.map((log) => (
                <TableRow key={log.id} className="hover:bg-gray-50/50">
                  <TableCell className="font-medium">{log.jobName}</TableCell>
                  <TableCell className="text-gray-600 font-mono text-sm">{log.timestamp}</TableCell>
                  <TableCell className="font-mono text-sm">{log.duration}</TableCell>
                  <TableCell>
                    <Badge
                      variant={log.status === "success" ? "default" : "destructive"}
                      className={`flex items-center gap-1 w-fit ${
                        log.status === "success"
                          ? "bg-green-100 text-green-700 hover:bg-green-100"
                          : "bg-red-100 text-red-700 hover:bg-red-100"
                      }`}
                    >
                      {log.status === "success" ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : log.status === "error" ? (
                        <XCircle className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 max-w-xs truncate">{log.result}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Empty State (hidden when there are logs) */}
      <div className="hidden">
        <Card className="border-gray-200/60">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <FileText className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No logs yet</h3>
            <p className="text-gray-600 text-center mb-6">
              Your job execution logs will appear here once you start running automation jobs.
            </p>
            <Button>Create Your First Job</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
