
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
      <CardContent>
        <p className="whitespace-pre-line">{notes}</p>
      </CardContent>
    </Card>
  );
};

export default NotesTab;
