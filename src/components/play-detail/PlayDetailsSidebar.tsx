
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AdvancedPlayData } from '@/types/play';

interface PlayDetailsSidebarProps {
  playData: AdvancedPlayData;
}

const PlayDetailsSidebar: React.FC<PlayDetailsSidebarProps> = ({ playData }) => {
  return (
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
            <p className="whitespace-pre-line">{playData.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayDetailsSidebar;
