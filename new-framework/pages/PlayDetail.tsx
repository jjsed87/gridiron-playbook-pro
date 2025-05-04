import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { mockPlayData } from "@/types/play";
import Header from "@/components/Header";
import DiagramTab from "@/components/play-detail/DiagramTab";
import AssignmentsTab from "@/components/play-detail/AssignmentsTab";
import PlayDetailsSidebar from "@/components/play-detail/PlayDetailsSidebar";
import PersonalNotes from "@/components/play-detail/PersonalNotes";

const PlayDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeDiagramIndex, setActiveDiagramIndex] = useState(0);
  const [personalNotes, setPersonalNotes] = useState("");

  // Get play data from the mock data using the ID from URL
  const playData = id ? mockPlayData[id] : undefined;

  if (!playData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1>Play not found</h1>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={playData.title} />
      
      <main className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{playData.title}</h1>
            
            <Tabs defaultValue="diagram">
              <TabsList>
                <TabsTrigger value="diagram">Diagram</TabsTrigger>
                <TabsTrigger value="assignments">Assignments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="diagram" className="mt-6">
                <DiagramTab 
                  diagrams={playData.diagrams} 
                  keyPoints={playData.keyPoints}
                  imageUrl={playData.imageUrl}
                  activeDiagramIndex={activeDiagramIndex}
                  setActiveDiagramIndex={setActiveDiagramIndex}
                />
              </TabsContent>
              
              <TabsContent value="assignments" className="mt-6">
                <AssignmentsTab 
                  assignments={playData.assignments}
                  playId={playData.id}
                />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
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
