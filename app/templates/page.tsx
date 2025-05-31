"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Layers, Search, MessageCircle, TrendingUp, RefreshCw, Mail, Webhook, Code, Clock, Zap } from "lucide-react"

const templates = [
  {
    id: "template_001",
    name: "Discord Price Alert",
    description: "Send cryptocurrency price alerts to Discord channels when thresholds are met",
    category: "Notifications",
    icon: MessageCircle,
    triggerType: "Interval",
    difficulty: "Beginner",
    usageCount: 1247,
    tags: ["Discord", "Crypto", "Alerts"],
  },
  {
    id: "template_002",
    name: "Ethereum Balance Monitor",
    description: "Monitor wallet balances and trigger actions when balance changes occur",
    category: "Blockchain",
    icon: TrendingUp,
    triggerType: "Smart Contract",
    difficulty: "Intermediate",
    usageCount: 892,
    tags: ["Ethereum", "Wallet", "Monitoring"],
  },
  {
    id: "template_003",
    name: "Retry Failed Webhooks",
    description: "Automatically retry failed webhook calls with exponential backoff",
    category: "Reliability",
    icon: RefreshCw,
    triggerType: "Custom Logic",
    difficulty: "Advanced",
    usageCount: 634,
    tags: ["Webhooks", "Retry", "Reliability"],
  },
  {
    id: "template_004",
    name: "Weekly Newsletter Trigger",
    description: "Schedule and send weekly newsletters with automated content compilation",
    category: "Marketing",
    icon: Mail,
    triggerType: "CRON",
    difficulty: "Beginner",
    usageCount: 1089,
    tags: ["Email", "Newsletter", "Automation"],
  },
  {
    id: "template_005",
    name: "API Health Monitor",
    description: "Continuously monitor API endpoints and alert on downtime or errors",
    category: "Monitoring",
    icon: Webhook,
    triggerType: "Interval",
    difficulty: "Intermediate",
    usageCount: 756,
    tags: ["API", "Health", "Monitoring"],
  },
  {
    id: "template_006",
    name: "Smart Contract Event Listener",
    description: "Listen for specific smart contract events and trigger automated responses",
    category: "Blockchain",
    icon: Code,
    triggerType: "Smart Contract",
    difficulty: "Advanced",
    usageCount: 423,
    tags: ["Smart Contracts", "Events", "Web3"],
  },
]

const categories = ["All", "Notifications", "Blockchain", "Reliability", "Marketing", "Monitoring"]

export default function Templates() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Templates</h1>
          <p className="text-gray-600 mt-1">Pre-built automation templates to get you started quickly</p>
        </div>
        <Button variant="outline">
          <Zap className="w-4 h-4 mr-2" />
          Request Template
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="border-gray-200/60">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search templates..." className="pl-10" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm" className="h-8">
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card
            key={template.id}
            className="border-gray-200/60 hover:shadow-lg transition-all duration-200 hover:border-blue-200 group cursor-pointer"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <template.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{template.name}</CardTitle>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {template.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">{template.description}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{template.triggerType}</span>
                </div>
                <Badge
                  variant="secondary"
                  className={`text-xs ${
                    template.difficulty === "Beginner"
                      ? "bg-green-100 text-green-700"
                      : template.difficulty === "Intermediate"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {template.difficulty}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-1">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-500">Used {template.usageCount.toLocaleString()} times</span>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Use Template
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State (hidden when templates exist) */}
      <div className="hidden">
        <Card className="border-gray-200/60">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Layers className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600 text-center mb-6">Try adjusting your search or browse different categories.</p>
            <Button variant="outline">Clear Filters</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
