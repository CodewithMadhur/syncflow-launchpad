import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Video, Mic, MicOff, VideoOff, Monitor, Phone, Users, Calendar } from "lucide-react";
import videoMockup from "@/assets/video-mockup.png";
import { toast } from "sonner";

const VideoPage = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast.success(isMuted ? "Microphone on" : "Microphone muted");
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    toast.success(isVideoOff ? "Camera on" : "Camera off");
  };

  const toggleShare = () => {
    setIsSharing(!isSharing);
    toast.success(isSharing ? "Stopped sharing" : "Sharing screen");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-scale-in">
            <Video className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Video Meetings
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Meet, brainstorm, and connect — no downloads required.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up">
            <Button size="lg" onClick={() => toast.success("Starting meeting!")}>
              Try It Now
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Video Interface */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
            <p className="text-muted-foreground">Try the video controls in our interactive demo</p>
          </div>
          
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Video Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gradient-to-br from-secondary/50 to-background min-h-[400px]">
                {[
                  { name: "You", active: !isVideoOff },
                  { name: "Sarah Chen", active: true },
                  { name: "Mike Johnson", active: true },
                  { name: "Alex Rivera", active: true },
                  { name: "Emma Davis", active: false },
                  { name: "Tom Wilson", active: true }
                ].map((participant, i) => (
                  <div key={i} className={`relative rounded-xl overflow-hidden ${participant.active ? 'bg-primary/10' : 'bg-secondary'} flex items-center justify-center aspect-video`}>
                    {participant.active ? (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center text-2xl font-bold">
                          {participant.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    ) : (
                      <VideoOff className="w-8 h-8 text-muted-foreground" />
                    )}
                    <div className="absolute bottom-2 left-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {participant.name}
                    </div>
                    {participant.name === "Sarah Chen" && (
                      <div className="absolute top-2 right-2">
                        <div className="bg-red-500 text-white px-2 py-1 rounded text-xs">Speaking</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Screen Share Area */}
              {isSharing && (
                <div className="p-6 bg-secondary/30">
                  <div className="bg-primary/5 rounded-xl p-8 text-center border-2 border-dashed border-primary/30">
                    <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold">Screen Sharing Active</p>
                    <p className="text-sm text-muted-foreground">Your screen is being shared with participants</p>
                  </div>
                </div>
              )}

              {/* Control Bar */}
              <div className="border-t border-border p-6">
                <div className="flex items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    variant={isMuted ? "destructive" : "secondary"}
                    onClick={toggleMute}
                    className="rounded-full w-14 h-14"
                  >
                    {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </Button>
                  <Button 
                    size="lg" 
                    variant={isVideoOff ? "destructive" : "secondary"}
                    onClick={toggleVideo}
                    className="rounded-full w-14 h-14"
                  >
                    {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
                  </Button>
                  <Button 
                    size="lg" 
                    variant={isSharing ? "default" : "secondary"}
                    onClick={toggleShare}
                    className="rounded-full w-14 h-14"
                  >
                    <Monitor className="w-6 h-6" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="destructive"
                    onClick={() => toast.error("Call ended")}
                    className="rounded-full w-14 h-14"
                  >
                    <Phone className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Meeting ID: 123-456-789 • 6 participants
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <img src={videoMockup} alt="Video Meeting Interface" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Video, title: "HD Video Quality", desc: "Crystal clear video up to 1080p resolution" },
              { icon: Monitor, title: "Screen Sharing", desc: "Share your screen with one click" },
              { icon: Users, title: "Up to 100 Participants", desc: "Host large team meetings effortlessly" },
              { icon: Calendar, title: "Meeting Scheduling", desc: "Schedule and automate meeting invites" },
              { icon: Mic, title: "Noise Cancellation", desc: "AI-powered background noise removal" },
              { icon: Phone, title: "Recording", desc: "Record meetings for later review" }
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

export default VideoPage;
