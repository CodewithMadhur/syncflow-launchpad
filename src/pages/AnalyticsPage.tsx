import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Clock, Download, Filter } from "lucide-react";
import analyticsMockup from "@/assets/analytics-mockup.png";
import { toast } from "sonner";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-scale-in">
            <BarChart3 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Analytics Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Turn team activity into actionable insights.
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

      {/* Demo Dashboard */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
            <p className="text-muted-foreground">Explore real-time analytics and insights</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Tasks Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">247</div>
                <div className="flex items-center text-sm text-green-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+12% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">89</div>
                <div className="flex items-center text-sm text-green-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+8% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">4.2m</div>
                <div className="flex items-center text-sm text-green-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>-15% faster</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Team Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-1">94%</div>
                <div className="flex items-center text-sm text-green-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span>+5% improvement</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Task Completion Trend</CardTitle>
                <Button variant="ghost" size="sm">
                  <Filter className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-t from-primary/20 to-transparent rounded-lg flex items-end justify-around p-4 gap-2">
                  {[65, 78, 82, 70, 88, 92, 95].map((height, i) => (
                    <div key={i} className="flex-1 bg-primary rounded-t-lg transition-all hover:bg-primary/80 cursor-pointer" style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="flex justify-around mt-4 text-xs text-muted-foreground">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Team Engagement</CardTitle>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { team: "Design Team", value: 92, color: "bg-blue-500" },
                    { team: "Development", value: 88, color: "bg-purple-500" },
                    { team: "Marketing", value: 85, color: "bg-pink-500" },
                    { team: "Sales", value: 78, color: "bg-orange-500" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{item.team}</span>
                        <span className="text-sm text-muted-foreground">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full ${item.color} transition-all duration-500`} style={{ width: `${item.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activity Feed */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { user: "Sarah Chen", action: "completed task", item: "Update homepage design", time: "2m ago" },
                  { user: "Mike Johnson", action: "uploaded file", item: "Q4 Report.pdf", time: "15m ago" },
                  { user: "Alex Rivera", action: "commented on", item: "Marketing Campaign", time: "1h ago" },
                  { user: "Emma Davis", action: "started meeting", item: "Sprint Planning", time: "2h ago" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 hover:bg-secondary rounded-lg transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-semibold">{activity.user}</span> {activity.action} <span className="text-primary">{activity.item}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <img src={analyticsMockup} alt="Analytics Dashboard" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Real-Time Metrics", desc: "Live dashboards that update as your team works" },
              { icon: TrendingUp, title: "Trend Analysis", desc: "Identify patterns and optimize workflows" },
              { icon: Users, title: "Team Performance", desc: "Track individual and team productivity" },
              { icon: Clock, title: "Time Tracking", desc: "Understand how time is spent across projects" },
              { icon: Download, title: "Export Reports", desc: "Generate and share custom reports" },
              { icon: Filter, title: "Custom Filters", desc: "Drill down into specific data points" }
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

export default AnalyticsPage;
