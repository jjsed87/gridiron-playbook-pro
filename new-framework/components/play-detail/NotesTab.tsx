
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface NotesTabProps {
  notes: string;
}

const NotesTab: React.FC<NotesTabProps> = ({ notes }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Coach's Notes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notes.split('\n').map((paragraph, index) => (
          paragraph.trim() ? (
            <p key={index} className="text-sm">{paragraph}</p>
          ) : (
            <div key={index} className="h-2" />
          )
        ))}
      </CardContent>
    </Card>
  );
};

export default NotesTab;
