import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';
import {
  BookOpen,
  Video,
  FileText,
  ArrowLeft,
  UsersRound
} from 'lucide-react';

// Import custom components
import DiagramTab from '@/components/play-detail/DiagramTab';
import AssignmentsTab from '@/components/play-detail/AssignmentsTab';
import FilmTab from '@/components/play-detail/FilmTab';
import NotesTab from '@/components/play-detail/NotesTab';
import PlayDetailsSidebar from '@/components/play-detail/PlayDetailsSidebar';
import PersonalNotes from '@/components/play-detail/PersonalNotes';

// Import types and mock data
import { mockPlayData } from '@/types/play';

const PlayDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const playData = id ? mockPlayData[id] : undefined;
  
  const [personalNotes, setPersonalNotes] = useState("");
  const [activeTab, setActiveTab] = useState("diagram");
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);
  
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
                <DiagramTab 
                  diagrams={playData.diagrams}
                  keyPoints={playData.keyPoints}
                  imageUrl={playData.imageUrl}
                  activeDiagramIndex={activeDiagramIndex}
                  setActiveDiagramIndex={setActiveDiagramIndex}
                />
              </TabsContent>
              
              <TabsContent value="assignments" className="mt-0">
                <AssignmentsTab 
                  assignments={playData.assignments}
                  playId={playData.id}
                />
              </TabsContent>
              
              <TabsContent value="film" className="mt-0">
                <FilmTab 
                  diagrams={playData.diagrams}
                  imageUrl={playData.imageUrl}
                />
              </TabsContent>
              
              <TabsContent value="notes" className="mt-0">
                <NotesTab notes={playData.notes} />
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <PlayDetailsSidebar playData={playData} />
            <PersonalNotes 
              personalNotes={personalNotes}
              setPersonalNotes={setPersonalNotes}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlayDetail;
