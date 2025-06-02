"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Webhook,
  Code,
  Clock,
  Settings,
  Bell,
  Play,
  Save,
  ArrowLeft,
} from "lucide-react";

export default function CreateJob() {
  // Job configuration states
  const [jobType, setJobType] = useState("webhook");
  const [triggerType, setTriggerType] = useState("interval");
  
  // Form data states
  const [jobName, setJobName] = useState("");
  const [intervalValue, setIntervalValue] = useState("");
  const [intervalUnit, setIntervalUnit] = useState("");
  const [cronExpression, setCronExpression] = useState("");
  const [customLogic, setCustomLogic] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [payload, setPayload] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [functionCall, setFunctionCall] = useState("");
  const [notifications, setNotifications] = useState({
    discord: false,
    email: false,
    webhook: false,
  });

  const handleCreateJob = async () => {
    const jobData = {
      jobName,
      jobType,
      triggerType,
      triggerConfig:
        triggerType === "interval"
          ? { intervalValue, intervalUnit }
          : triggerType === "cron"
          ? { cronExpression }
          : { customLogic },
      actionConfig:
        jobType === "webhook"
          ? { webhookUrl, payload }
          : { contractAddress, functionCall },
      notifications,
    };

    // try {
    //   const res = await fetch("/api/jobs", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(jobData),
    //   });
    //   if (!res.ok) throw new Error("Failed to create job");
    //   alert("Job created successfully!");
    // } catch (error) {
    //   console.error("Error creating job:", error);
    //   alert("Something went wrong!");
    // }

    console.log(jobData)
  };

  const handleNotificationChange = (type, checked) => {
    setNotifications(prev => ({
      ...prev,
      [type]: checked
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create New Job</h1>
          <p className="text-gray-600 mt-1">
            Set up automated triggers and actions
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="jobName">Job Name</Label>
                <Input
                  id="jobName"
                  placeholder="e.g., Discord Price Alert"
                  className="mt-1"
                  value={jobName}
                  onChange={(e) => setJobName(e.target.value)}
                />
              </div>

              <div>
                <Label>Job Type</Label>
                <div className="flex gap-2 mt-2">
                  <Button
                    variant={jobType === "webhook" ? "default" : "outline"}
                    onClick={() => setJobType("webhook")}
                    className="flex items-center gap-2"
                  >
                    <Webhook className="w-4 h-4" />
                    Webhook
                  </Button>
                  <Button
                    variant={jobType === "contract" ? "default" : "outline"}
                    onClick={() => setJobType("contract")}
                    className="flex items-center gap-2"
                  >
                    <Code className="w-4 h-4" />
                    Smart Contract
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trigger Configuration */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Trigger Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={triggerType} onValueChange={setTriggerType}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="interval">Interval</TabsTrigger>
                  <TabsTrigger value="cron">CRON</TabsTrigger>
                  <TabsTrigger value="custom">Custom Logic</TabsTrigger>
                </TabsList>

                <TabsContent value="interval" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="intervalValue">Every</Label>
                      <Input
                        id="intervalValue"
                        placeholder="5"
                        className="mt-1"
                        value={intervalValue}
                        onChange={(e) => setIntervalValue(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="intervalUnit">Unit</Label>
                      <Select value={intervalUnit} onValueChange={setIntervalUnit}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minutes">Minutes</SelectItem>
                          <SelectItem value="hours">Hours</SelectItem>
                          <SelectItem value="days">Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cron" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="cronExpression">CRON Expression</Label>
                    <Input
                      id="cronExpression"
                      placeholder="0 */5 * * * *"
                      className="mt-1 font-mono"
                      value={cronExpression}
                      onChange={(e) => setCronExpression(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Example: 0 */5 * * * * (every 5 minutes)
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="custom" className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="customLogic">Custom Logic</Label>
                    <Textarea
                      id="customLogic"
                      placeholder="// Write your custom trigger logic here
if (ethPrice > 3000) {
  return true;
}"
                      className="mt-1 font-mono h-32"
                      value={customLogic}
                      onChange={(e) => setCustomLogic(e.target.value)}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Action Configuration */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle>Action Configuration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobType === "webhook" ? (
                <>
                  <div>
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <Input
                      id="webhookUrl"
                      placeholder="https://discord.com/api/webhooks/..."
                      className="mt-1"
                      value={webhookUrl}
                      onChange={(e) => setWebhookUrl(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="payload">Payload (JSON)</Label>
                    <Textarea
                      id="payload"
                      placeholder='{"content": "ETH price is now $3,200!"}'
                      className="mt-1 font-mono h-24"
                      value={payload}
                      onChange={(e) => setPayload(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Label htmlFor="contractAddress">Contract Address</Label>
                    <Input
                      id="contractAddress"
                      placeholder="0x..."
                      className="mt-1 font-mono"
                      value={contractAddress}
                      onChange={(e) => setContractAddress(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="functionCall">Function Call</Label>
                    <Input
                      id="functionCall"
                      placeholder="transfer(address,uint256)"
                      className="mt-1 font-mono"
                      value={functionCall}
                      onChange={(e) => setFunctionCall(e.target.value)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="discord" 
                    checked={notifications.discord}
                    onCheckedChange={(checked) => handleNotificationChange('discord', checked)}
                  />
                  <Label htmlFor="discord">Discord</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="email" 
                    checked={notifications.email}
                    onCheckedChange={(checked) => handleNotificationChange('email', checked)}
                  />
                  <Label htmlFor="email">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="webhook-notify" 
                    checked={notifications.webhook}
                    onCheckedChange={(checked) => handleNotificationChange('webhook', checked)}
                  />
                  <Label htmlFor="webhook-notify">Webhook</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Preview */}
          <Card className="border-gray-200/60">
            <CardHeader>
              <CardTitle>Job Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-xs text-gray-500">NAME</Label>
                <p className="font-medium">{jobName || "Untitled Job"}</p>
              </div>
              <div>
                <Label className="text-xs text-gray-500">TYPE</Label>
                <Badge variant="outline" className="mt-1">
                  {jobType === "webhook" ? "Webhook" : "Smart Contract"}
                </Badge>
              </div>
              <div>
                <Label className="text-xs text-gray-500">TRIGGER</Label>
                <Badge variant="outline" className="mt-1">
                  {triggerType === "interval"
                    ? `Every ${intervalValue || "?"} ${intervalUnit || "units"}`
                    : triggerType === "cron"
                    ? "CRON"
                    : "Custom Logic"}
                </Badge>
              </div>
              <div>
                <Label className="text-xs text-gray-500">STATUS</Label>
                <Badge className="mt-1 bg-green-100 text-green-700">
                  Ready to deploy
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Play className="w-4 h-4 mr-2" />
              Test Trigger
            </Button>
            <Button variant="outline" className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={handleCreateJob}
            >
              Create Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}