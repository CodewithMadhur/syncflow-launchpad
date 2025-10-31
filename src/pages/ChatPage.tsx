import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Send, Smile, Paperclip, Users, Check, CheckCheck } from "lucide-react";
import chatMockup from "@/assets/chat-mockup.png";
import { toast } from "sonner";

const ChatPage = () => {
  const [demoMessages, setDemoMessages] = useState([
    { id: 1, user: "Sarah Chen", message: "Great progress on the project today! 🎉", time: "2:30 PM", read: true },
    { id: 2, user: "You", message: "Thanks! Ready for tomorrow's demo.", time: "2:32 PM", read: true },
    { id: 3, user: "Mike Johnson", message: "I'll prepare the slides", time: "2:35 PM", read: false }
  ]);

  const sendDemoMessage = () => {
    const newMessage = {
      id: demoMessages.length + 1,
      user: "You",
      message: "This is a demo message!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };
    setDemoMessages([...demoMessages, newMessage]);
    toast.success("Message sent!");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-scale-in">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Real-Time Chat
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Stay connected with your team — anytime, anywhere.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up">
            <Button size="lg" onClick={() => toast.success("Starting trial!")}>
              Try It Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Chat Interface */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
            <p className="text-muted-foreground">Try sending a message in our interactive demo</p>
          </div>
          
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex h-[500px]">
                {/* Sidebar */}
                <div className="w-1/3 border-r border-border p-4 space-y-2">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Team General</p>
                      <p className="text-xs text-muted-foreground">8 members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">SC</div>
                    <div>
                      <p className="font-semibold">Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 hover:bg-secondary rounded-lg cursor-pointer transition-colors">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">MJ</div>
                    <div>
                      <p className="font-semibold">Mike Johnson</p>
                      <p className="text-xs text-muted-foreground">Away</p>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                    {demoMessages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[70%] ${msg.user === "You" ? "bg-primary text-primary-foreground" : "bg-secondary"} rounded-2xl p-4`}>
                          {msg.user !== "You" && <p className="text-xs font-semibold mb-1">{msg.user}</p>}
                          <p>{msg.message}</p>
                          <div className="flex items-center gap-1 justify-end mt-1">
                            <p className="text-xs opacity-70">{msg.time}</p>
                            {msg.user === "You" && (msg.read ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Input Area */}
                  <div className="border-t border-border p-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Paperclip className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Smile className="w-5 h-5" />
                      </Button>
                      <div className="flex-1 bg-secondary rounded-lg px-4 py-2">
                        Type your message...
                      </div>
                      <Button onClick={sendDemoMessage}>
                        <Send className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <img src={chatMockup} alt="Chat Interface" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Instant Messaging", desc: "Send messages instantly with real-time delivery" },
              { icon: Users, title: "Group Channels", desc: "Create unlimited channels for teams and projects" },
              { icon: Smile, title: "Rich Media", desc: "Share emojis, GIFs, and files seamlessly" },
              { icon: CheckCheck, title: "Read Receipts", desc: "Know when your messages are read" },
              { icon: Paperclip, title: "File Sharing", desc: "Drag and drop files directly in chat" },
              { icon: Check, title: "Online Status", desc: "See who's available in real-time" }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatPage;
