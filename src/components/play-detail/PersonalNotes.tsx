
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PersonalNotesProps {
  personalNotes: string;
  setPersonalNotes: (notes: string) => void;
}

const PersonalNotes: React.FC<PersonalNotesProps> = ({ personalNotes, setPersonalNotes }) => {
  const { toast } = useToast();

  const handleSaveNotes = () => {
    toast({
      title: "Notes saved",
      description: "Your personal notes have been saved for this play.",
    });
  };

  return (
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
  );
};

export default PersonalNotes;
