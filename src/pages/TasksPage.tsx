import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckSquare, Calendar, Flag, Users, Plus, ArrowRight } from "lucide-react";
import tasksMockup from "@/assets/tasks-mockup.png";
import { toast } from "sonner";

const TasksPage = () => {
  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: "Design new landing page", priority: "high", assignee: "SC" },
      { id: 2, title: "Update documentation", priority: "medium", assignee: "MJ" }
    ],
    inProgress: [
      { id: 3, title: "Implement user authentication", priority: "high", assignee: "You" }
    ],
    done: [
      { id: 4, title: "Setup CI/CD pipeline", priority: "medium", assignee: "SC" }
    ]
  });

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: "New demo task",
      priority: "low",
      assignee: "You"
    };
    setTasks({ ...tasks, todo: [...tasks.todo, newTask] });
    toast.success("Task added!");
  };

  const moveTask = (taskId: number, from: string, to: string) => {
    const task = (tasks as any)[from].find((t: any) => t.id === taskId);
    if (task) {
      setTasks({
        ...tasks,
        [from]: (tasks as any)[from].filter((t: any) => t.id !== taskId),
        [to]: [...(tasks as any)[to], task]
      });
      toast.success("Task moved!");
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-scale-in">
            <CheckSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Task Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            Plan smarter. Execute faster.
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

      {/* Demo Kanban Board */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
            <p className="text-muted-foreground">Drag tasks between columns to organize your workflow</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* To Do Column */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">To Do</h3>
                <Button size="sm" variant="ghost" onClick={addTask}>
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-3">
                {tasks.todo.map((task) => (
                  <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <p className="font-medium mb-2">{task.title}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Flag className={`w-4 h-4 ${task.priority === 'high' ? 'text-red-500' : task.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}`} />
                          <span className="text-xs">{task.priority}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                            {task.assignee}
                          </div>
                          <Button size="sm" variant="ghost" onClick={() => moveTask(task.id, 'todo', 'inProgress')}>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* In Progress Column */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-4">In Progress</h3>
              <div className="space-y-3">
                {tasks.inProgress.map((task) => (
                  <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all border-primary/50">
                    <CardContent className="p-4">
                      <p className="font-medium mb-2">{task.title}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Flag className={`w-4 h-4 ${task.priority === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                          <span className="text-xs">{task.priority}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                            {task.assignee}
                          </div>
                          <Button size="sm" variant="ghost" onClick={() => moveTask(task.id, 'inProgress', 'done')}>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Done Column */}
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-4">
              <h3 className="font-semibold text-lg mb-4">Done</h3>
              <div className="space-y-3">
                {tasks.done.map((task) => (
                  <Card key={task.id} className="cursor-pointer hover:shadow-lg transition-all opacity-75">
                    <CardContent className="p-4">
                      <p className="font-medium mb-2 line-through">{task.title}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Flag className="w-4 h-4 text-green-500" />
                          <span className="text-xs">{task.priority}</span>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                          {task.assignee}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <img src={tasksMockup} alt="Task Management Interface" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CheckSquare, title: "Kanban Boards", desc: "Visual workflow management with drag-and-drop" },
              { icon: Calendar, title: "Due Dates", desc: "Never miss a deadline with smart reminders" },
              { icon: Flag, title: "Priority Levels", desc: "Organize tasks by urgency and importance" },
              { icon: Users, title: "Team Collaboration", desc: "Assign tasks and track progress together" },
              { icon: Plus, title: "Quick Add", desc: "Create tasks instantly from anywhere" },
              { icon: ArrowRight, title: "Workflow Automation", desc: "Auto-move tasks based on custom rules" }
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

export default TasksPage;
