import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Upload, Folder, FileText, Image, Lock, Cloud, Search } from "lucide-react";
import filesMockup from "@/assets/files-mockup.png";
import { toast } from "sonner";

const FilesPage = () => {
  const [files] = useState([
    { name: "Q4 Report.pdf", type: "pdf", size: "2.4 MB", shared: true },
    { name: "Team Photo.jpg", type: "image", size: "1.8 MB", shared: false },
    { name: "Project Plan.docx", type: "doc", size: "856 KB", shared: true },
    { name: "Budget 2024.xlsx", type: "sheet", size: "1.2 MB", shared: false }
  ]);

  const uploadFile = () => {
    toast.success("File uploaded successfully!");
  };

  const shareFile = (fileName: string) => {
    toast.success(`${fileName} shared with team`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 animate-scale-in">
            <Share2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            File Sharing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            All your team's files. One secure space.
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

      {/* Demo File Manager */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Demo</h2>
            <p className="text-muted-foreground">Try uploading and managing files</p>
          </div>
          
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Toolbar */}
              <div className="border-b border-border p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button onClick={uploadFile}>
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                  <Button variant="outline">
                    <Folder className="w-4 h-4 mr-2" />
                    New Folder
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input 
                      type="text" 
                      placeholder="Search files..." 
                      className="pl-10 pr-4 py-2 rounded-lg bg-secondary border border-border text-sm w-64"
                    />
                  </div>
                </div>
              </div>

              {/* Folder Structure */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-1/4 border-r border-border p-4 space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-primary/10 rounded-lg">
                    <Folder className="w-5 h-5 text-primary" />
                    <span className="font-medium">All Files</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-secondary rounded-lg cursor-pointer">
                    <Share2 className="w-5 h-5" />
                    <span>Shared with me</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-secondary rounded-lg cursor-pointer">
                    <Cloud className="w-5 h-5" />
                    <span>Cloud Storage</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 hover:bg-secondary rounded-lg cursor-pointer">
                    <Lock className="w-5 h-5" />
                    <span>Private</span>
                  </div>
                </div>

                {/* File Grid */}
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {files.map((file, i) => (
                      <Card key={i} className="cursor-pointer hover:shadow-lg transition-all group">
                        <CardContent className="p-4">
                          <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                            {file.type === "image" ? (
                              <Image className="w-12 h-12 text-primary" />
                            ) : (
                              <FileText className="w-12 h-12 text-primary" />
                            )}
                          </div>
                          <p className="font-medium text-sm truncate mb-1">{file.name}</p>
                          <p className="text-xs text-muted-foreground mb-2">{file.size}</p>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs px-2 py-1 rounded ${file.shared ? 'bg-primary/10 text-primary' : 'bg-secondary'}`}>
                              {file.shared ? 'Shared' : 'Private'}
                            </span>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              className="opacity-0 group-hover:opacity-100"
                              onClick={() => shareFile(file.name)}
                            >
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Upload Drop Zone */}
                  <div 
                    className="mt-6 border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/60 cursor-pointer transition-colors"
                    onClick={uploadFile}
                  >
                    <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold mb-2">Drop files here to upload</p>
                    <p className="text-sm text-muted-foreground">or click to browse</p>
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
          <img src={filesMockup} alt="File Sharing Interface" className="rounded-2xl shadow-lg" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Upload, title: "Drag & Drop Upload", desc: "Upload files effortlessly with drag and drop" },
              { icon: Folder, title: "Smart Organization", desc: "Auto-organize files with AI-powered folders" },
              { icon: Share2, title: "Secure Sharing", desc: "Share with custom permissions and expiry dates" },
              { icon: Lock, title: "End-to-End Encryption", desc: "Military-grade security for all files" },
              { icon: Cloud, title: "Cloud Integration", desc: "Connect Google Drive, Dropbox, and OneDrive" },
              { icon: Search, title: "Instant Search", desc: "Find any file in milliseconds" }
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

export default FilesPage;
