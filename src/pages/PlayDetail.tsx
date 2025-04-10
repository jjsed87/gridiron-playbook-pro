
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
  ArrowLeft,
  UsersRound,
  AlertTriangle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Define interfaces for better type safety
interface PlayAssignment {
  position: string;
  assignment: string;
}

interface DiagramItem {
  title: string;
  imageUrl: string;
}

interface BasePlayData {
  id: string;
  title: string;
  description: string;
  category: string;
  formation: string;
  imageUrl: string;
  assignments: PlayAssignment[];
  notes: string;
}

interface AdvancedPlayData extends BasePlayData {
  diagrams?: DiagramItem[];
  keyPoints?: string[];
  scheme?: string;
  personnel?: string;
}

// Mock data with types applied
const mockPlayData: Record<string, AdvancedPlayData> = {
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
  },
  "p5": {
    id: "p5",
    title: "ATLANTA / FALCONS",
    description: "Counter run play with backside guard pull and playside tackle lead",
    category: "Run",
    scheme: "Counter (Backside Guard & Tackle/Wing Pull)",
    personnel: "10/11 (Adjust as needed)",
    formation: "Various",
    imageUrl: "public/lovable-uploads/c292e911-0413-4f67-8be6-066fa4e41fe4.png",
    diagrams: [
      {
        title: "Diagram A: Counter vs. 4-2-5 Defense (Even Front)",
        imageUrl: "public/lovable-uploads/c292e911-0413-4f67-8be6-066fa4e41fe4.png"
      },
      {
        title: "Diagram B: Counter vs. 4i/Tite Front (Tite 3-4)",
        imageUrl: "public/lovable-uploads/9e11bf2e-157e-467e-9ace-ec17f59a91a6.png"
      }
    ],
    keyPoints: [
      "Identify the Mike Linebacker (FIRST LINEBACKER AT 3-5 YARDS DEPTH IN THE BOX PLAY SIDE)",
      "Backside Guard pulls, play-side tackle/wing lead",
      "\"Wall-Street\" call indicates Wing pulls, Tackle hinges",
      "Play-side Tackle covers \"-1\" (backside LB) if no B-gap threat; otherwise, the Guard covers if his A-gap isn't threatened",
      "Center picks up backside A and B gaps when there's no hinge call"
    ],
    assignments: [
      { position: "PST (Play-Side Tackle)", assignment: "Responsible for \"-1\" (backside linebacker) if no defender threatens his B-gap. If defender threatens B-gap, the Guard takes that responsibility" },
      { position: "Center", assignment: "When there is no \"Wall-Street\" call (no backside hinge), Center is responsible for both backside A-gap and B-gap" },
      { position: "BSG (Backside Guard)", assignment: "Pull to kick out the C-gap or play-side edge defender. If defender wrong-arms or spills, \"LOG\" him by getting to his outside shoulder" },
      { position: "Second Puller (BST/TE)", assignment: "If \"Wall-Street\" is called, the Wing pulls and the Tackle hinges. Responsible for reading guard's pull block and then insert if effective, get outside if guard is logged. Also responsible for picking up Mike LB if possible" },
      { position: "RB", assignment: "Follow the pulling guard's kick-out or log. Read the guard's block: cut inside if kick-out works or bounce outside if defender spills" },
      { position: "QB", assignment: "Read the backside C-gap defender if there is no hinge call (Wall-Street)" }
    ],
    notes: "• Against a Tite or 4i front, defensive ends line up in 4i technique on the inside shoulder.\n• Play-side tackle \"pins\" the 4i defensive end inside to clear the B-gap.\n• The pulling Guard kicks out the edge defender (often an OLB or DB).\n• A pulling TE or H-back (second puller) leads through to block the inside linebacker(Mike).\n• Center and backside guard combine to double the nose, ensuring backside A-gap and B-gap are secured.\n• The design creates a crease for the running back, who reads the guard's kick-out (cut inside if open or bounce outside)."
  }
};

const PlayDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // In a real app, fetch data based on id
  const playData = id ? mockPlayData[id] : undefined;
  
  const [personalNotes, setPersonalNotes] = useState("");
  const [activeTab, setActiveTab] = useState("diagram");
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);
  
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
            <Tabs defaultValue="diagram" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-4 w-full">
                <TabsTrigger value="diagram">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Diagram
                </TabsTrigger>
                <TabsTrigger value="assignments">
                  <UsersRound className="mr-2 h-4 w-4" />
                  Assignments
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
                {playData.diagrams && playData.diagrams.length > 0 ? (
                  <div>
                    <Card className="bg-white mb-4">
                      <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                        <img 
                          src={playData.diagrams[activeDiagramIndex].imageUrl} 
                          alt={`${playData.title} diagram`} 
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-center">{playData.diagrams[activeDiagramIndex].title}</h3>
                      </div>
                    </Card>
                    
                    {playData.diagrams.length > 1 && (
                      <div className="flex gap-2 justify-center mb-4">
                        {playData.diagrams.map((diagram, index) => (
                          <Button 
                            key={index}
                            size="sm"
                            variant={activeDiagramIndex === index ? "default" : "outline"}
                            onClick={() => setActiveDiagramIndex(index)}
                          >
                            Diagram {String.fromCharCode(65 + index)}
                          </Button>
                        ))}
                      </div>
                    )}
                    
                    {playData.keyPoints && playData.keyPoints.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Key Points</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-4 space-y-2">
                            {playData.keyPoints.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ) : (
                  <Card className="bg-white mb-4">
                    <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                      <img 
                        src={playData.imageUrl} 
                        alt={`${playData.title} diagram`} 
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="assignments" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Position Assignments</CardTitle>
                    <CardDescription>Responsibilities for each position</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[180px]">Position</TableHead>
                          <TableHead>Assignment</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {playData.assignments.map((item, i) => (
                          <TableRow key={i} className={item.position.includes("T") || item.position.includes("G") || item.position === "Center" ? "bg-purple-50" : ""}>
                            <TableCell className="font-medium">{item.position}</TableCell>
                            <TableCell>{item.assignment}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                
                {playData.id === "p5" && (
                  <Card className="mt-4 border-orange-300 border-2">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg">Special Call: "Wall-Street"</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">
                        When "Wall-Street" is called:
                      </p>
                      <ul className="list-disc pl-4 space-y-1 text-sm">
                        <li>Wing pulls instead of Tackle</li>
                        <li>Tackle hinges (stays home to protect backside)</li>
                        <li>Affects backside protection scheme</li>
                      </ul>
                    </CardContent>
                  </Card>
                )}
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
                  {playData.scheme && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Scheme</h4>
                      <p className="font-medium">{playData.scheme}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Formation</h4>
                    <p className="font-medium">{playData.formation}</p>
                  </div>
                  {playData.personnel && (
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">Personnel</h4>
                      <p className="font-medium">{playData.personnel}</p>
                    </div>
                  )}
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
