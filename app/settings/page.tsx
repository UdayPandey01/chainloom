"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Settings, Key, Wallet, Bell, Trash2, Eye, EyeOff, Copy, RefreshCw, Plus } from "lucide-react"
import { useState } from "react"

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false)

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account and automation preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* API Key Management */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="w-5 h-5" />
                API Key Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="apiKey">API Key</Label>
                <div className="flex items-center gap-2 mt-1">
                  <Input
                    id="apiKey"
                    type={showApiKey ? "text" : "password"}
                    value="cm_sk_1234567890abcdef..."
                    readOnly
                    className="font-mono"
                  />
                  <Button variant="outline" size="icon" onClick={() => setShowApiKey(!showApiKey)}>
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button variant="outline" size="icon">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Keep your API key secure. It provides full access to your account.
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate Key
                </Button>
                <Button variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New Key
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Connected Wallets */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="w-5 h-5" />
                Connected Wallets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <Wallet className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium">MetaMask</p>
                      <p className="text-sm text-gray-600 font-mono">0x1234...5678</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Connected</Badge>
                </div>

                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Wallet className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">WalletConnect</p>
                      <p className="text-sm text-gray-600">Not connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications">Email Notifications</Label>
                    <p className="text-sm text-gray-600">Receive job status updates via email</p>
                  </div>
                  <Switch id="emailNotifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="discordNotifications">Discord Notifications</Label>
                    <p className="text-sm text-gray-600">Send alerts to Discord channels</p>
                  </div>
                  <Switch id="discordNotifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="webhookNotifications">Webhook Notifications</Label>
                    <p className="text-sm text-gray-600">Send notifications to custom webhooks</p>
                  </div>
                  <Switch id="webhookNotifications" />
                </div>
              </div>

              <div className="space-y-3">
                <Label>Email Address</Label>
                <Input type="email" placeholder="john@example.com" defaultValue="john@example.com" />

                <Label>Discord Webhook URL</Label>
                <Input
                  placeholder="https://discord.com/api/webhooks/..."
                  defaultValue="https://discord.com/api/webhooks/123456789/abcdef..."
                />
              </div>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Trash2 className="w-5 h-5" />
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-red-900">Delete Account</h4>
                <p className="text-sm text-red-700 mt-1">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
              </div>
              <Button variant="destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Info */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-xs text-gray-500">NAME</Label>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <Label className="text-xs text-gray-500">EMAIL</Label>
                <p className="font-medium">john@example.com</p>
              </div>
              <div>
                <Label className="text-xs text-gray-500">PLAN</Label>
                <Badge className="mt-1">Pro Plan</Badge>
              </div>
              <div>
                <Label className="text-xs text-gray-500">MEMBER SINCE</Label>
                <p className="text-sm text-gray-600">January 2024</p>
              </div>
            </CardContent>
          </Card>

          {/* Usage Stats */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle>Usage This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <Label className="text-xs text-gray-500">JOB EXECUTIONS</Label>
                  <span className="text-sm font-medium">2,847 / 10,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <Label className="text-xs text-gray-500">ACTIVE JOBS</Label>
                  <span className="text-sm font-medium">24 / 100</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "24%" }}></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Billing Settings
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Key className="w-4 h-4 mr-2" />
              API Documentation
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Bell className="w-4 h-4 mr-2" />
              Support Center
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
