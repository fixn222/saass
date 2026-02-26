import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { Sparkles, Send, CheckCircle2, Circle, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content: "Hello! I'm your CNI Global AI assistant. I'm here to help you with your visa application. What country are you planning to visit?",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      type: "user",
      content: "I want to apply for a work visa to the United States",
      timestamp: "10:31 AM"
    },
    {
      id: 3,
      type: "ai",
      content: "Great! For a US work visa, you'll typically need an H-1B visa. Let me guide you through the requirements. First, can you tell me about your current occupation and educational background?",
      timestamp: "10:31 AM"
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState("");

  const progressSteps = [
    { id: 1, label: "Country Selection", status: "completed" },
    { id: 2, label: "Personal Information", status: "current" },
    { id: 3, label: "Document Upload", status: "pending" },
    { id: 4, label: "Review & Submit", status: "pending" },
    { id: 5, label: "Payment", status: "pending" },
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user" as const,
        content: inputMessage,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: "ai" as const,
          content: "Thank you for that information. Based on what you've shared, I'll help you gather the necessary documents. Would you like to proceed with uploading your passport copy?",
          timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Inter']">
      <Navigation />

      <div className="pt-24 px-6 lg:px-8 h-screen flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex gap-6 pb-6">
          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="bg-white rounded-t-3xl border-2 border-b-0 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#0F172A]">AI Visa Assistant</h2>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
                      <span className="text-sm text-[#64748B]">Online</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0">
                  AI Powered
                </Badge>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 bg-white border-2 border-y-0 p-6 overflow-y-auto">
              <div className="space-y-6 max-w-3xl">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.type === "ai" && (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                    )}
                    
                    <div className={`flex flex-col ${message.type === "user" ? "items-end" : "items-start"} max-w-[70%]`}>
                      <div
                        className={`rounded-2xl p-4 ${
                          message.type === "ai"
                            ? "bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] rounded-tl-sm"
                            : "bg-[#1E40AF] text-white rounded-tr-sm"
                        }`}
                      >
                        <p className={`text-sm leading-relaxed ${
                          message.type === "ai" ? "text-[#0F172A]" : "text-white"
                        }`}>
                          {message.content}
                        </p>
                      </div>
                      <span className="text-xs text-[#64748B] mt-1 px-1">
                        {message.timestamp}
                      </span>
                    </div>

                    {message.type === "user" && (
                      <div className="w-10 h-10 rounded-xl bg-[#1E40AF] flex items-center justify-center flex-shrink-0 text-white font-semibold">
                        U
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-white rounded-b-3xl border-2 border-t-0 p-6">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 h-12 rounded-xl border-2 bg-[#F8FAFC]"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:opacity-90 text-white rounded-xl px-6"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-[#64748B] mt-3 text-center">
                AI responses are generated to assist with your visa application. Always verify important information.
              </p>
            </div>
          </div>

          {/* Progress Sidebar */}
          <div className="w-80 flex-shrink-0 hidden lg:block">
            <Card className="p-6 rounded-3xl border-2 sticky top-28">
              <h3 className="text-lg font-semibold text-[#0F172A] mb-6">
                Application Progress
              </h3>

              <div className="space-y-6">
                {progressSteps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {index < progressSteps.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-[#E2E8F0]" />
                    )}
                    
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 relative z-10 ${
                        step.status === "completed"
                          ? "bg-[#059669] text-white"
                          : step.status === "current"
                          ? "bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-white"
                          : "bg-[#F1F5F9] text-[#94A3B8]"
                      }`}>
                        {step.status === "completed" ? (
                          <CheckCircle2 className="w-4 h-4" />
                        ) : step.status === "current" ? (
                          <Clock className="w-4 h-4" />
                        ) : (
                          <Circle className="w-4 h-4" />
                        )}
                      </div>
                      
                      <div>
                        <div className={`font-medium ${
                          step.status === "pending"
                            ? "text-[#94A3B8]"
                            : "text-[#0F172A]"
                        }`}>
                          {step.label}
                        </div>
                        <div className="text-xs text-[#64748B] mt-0.5">
                          {step.status === "completed" && "Completed"}
                          {step.status === "current" && "In Progress"}
                          {step.status === "pending" && "Pending"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E2E8F0]">
                <div className="bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[#64748B]">Completion</span>
                    <span className="text-sm font-semibold text-[#1E40AF]">40%</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-[#0F172A] mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start rounded-xl text-sm">
                    📄 View Required Documents
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl text-sm">
                    💰 Pricing Information
                  </Button>
                  <Button variant="outline" className="w-full justify-start rounded-xl text-sm">
                    📞 Contact Support
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
