
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  BookOpen,
  Video,
  FileText,
  Plus,
  Save,
  ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

// Mock data - would come from API
const mockPlayData = {
  "p1": {
    id: "p1",
    title: "Power Right",
    description: "A downhill power run play to the right side",
    category: "Run",
    formation: "I-Formation",
    imageUrl: "https://th.bing.com/th/id/OIP.Fvrt-j-BDLKu5_WVEWI6ywHaFL?rs=1&pid=ImgDetMain",
    assignments: [
      { position: "QB", assignment: "Hand off to RB, boot opposite" },
      { position: "RB", assignment: "Receive hand off, follow FB and pulling guard" },
      { position: "FB", assignment: "Kick out EMOL (End Man On Line)" },
      { position: "LT", assignment: "Down block inside gap" },
      { position: "LG", assignment: "Down block inside gap" },
      { position: "C", assignment: "Down block right" },
      { position: "RG", assignment: "Pull and lead through hole" },
      { position: "RT", assignment: "Down block inside gap" }
    ],
    notes: "This is our bread and butter run play. Watch for the defensive end alignment and adjust the FB path accordingly."
  },
  "p2": {
    id: "p2",
    title: "Zone Left",
    description: "A zone blocking run concept to the left",
    category: "Run",
    formation: "Shotgun",
    imageUrl: "https://fadeawayfootball.com/wp-content/uploads/2019/08/Inside-Zone-Run-569x400.jpg",
    assignments: [
      { position: "QB", assignment: "Hand off to RB, read backside DE" },
      { position: "RB", assignment: "Take handoff, read blocks and make one cut" },
      { position: "WR1", assignment: "Block CB or nearest threat" },
      { position: "WR2", assignment: "Block CB or nearest threat" },
      { position: "TE", assignment: "Zone block left" },
      { position: "LT", assignment: "Zone block left" },
      { position: "LG", assignment: "Zone block left" },
      { position: "C", assignment: "Zone block left" },
      { position: "RG", assignment: "Zone block left" },
      { position: "RT", assignment: "Zone block left or cut off backside" }
    ],
    notes: "Look for the cutback lane if defense flows too hard to the playside."
  }
};

const PlayDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, fetch data based on id
  const playData = mockPlayData[id as keyof typeof mockPlayData];
  
  const [personalNotes, setPersonalNotes] = useState("");
  
  const handleSaveNotes = () => {
    // In a real app, save notes to API/backend
    toast({
      title: "Notes saved",
      description: "Your personal notes have been saved for this play.",
    });
  };
  
  if (!playData) {
    return <div className="p-8 text-center">Play not found</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={playData.title} />
      
      <main className="container px-4 py-6 mx-auto">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Tabs defaultValue="diagram">
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="diagram">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Diagram
                </TabsTrigger>
                <TabsTrigger value="film">
                  <Video className="mr-2 h-4 w-4" />
                  Film
                </TabsTrigger>
                <TabsTrigger value="notes">
                  <FileText className="mr-2 h-4 w-4" />
                  Coach's Notes
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="diagram" className="mt-0">
                <Card className="bg-white mb-4">
                  <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                    <img 
                      src={playData.imageUrl || "/placeholder.svg"} 
                      alt={`${playData.title} diagram`} 
                      className="object-contain w-full h-full"
                    />
                  </div>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Position Assignments</CardTitle>
                    <CardDescription>Responsibilities for each position</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {playData.assignments.map((item, i) => (
                        <div key={i} className="grid grid-cols-4 gap-2 py-2 border-b border-gray-100">
                          <div className="font-medium">{item.position}</div>
                          <div className="col-span-3">{item.assignment}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="film" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Film Study</CardTitle>
                    <CardDescription>Video examples of this play</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 p-12 text-center rounded text-gray-500">
                      <Video className="mx-auto h-12 w-12 mb-2 text-gray-300" />
                      <p>Film clips will be available here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notes" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Coach's Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="whitespace-pre-line">{playData.notes}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Play Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                    <p className="font-medium">{playData.category}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Formation</h4>
                    <p className="font-medium">{playData.formation}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Description</h4>
                    <p>{playData.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>My Notes</CardTitle>
                <CardDescription>Add your personal notes about this play</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea 
                  placeholder="Write your notes here..." 
                  className="min-h-[120px]"
                  value={personalNotes}
                  onChange={(e) => setPersonalNotes(e.target.value)}
                />
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2" onClick={handleSaveNotes}>
                  <Save className="h-4 w-4" />
                  Save Notes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlayDetail;
