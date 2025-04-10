
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Video } from 'lucide-react';

const FilmTab: React.FC = () => {
  return (
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
  );
};

export default FilmTab;
