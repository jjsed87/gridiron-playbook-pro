
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DiagramItem } from '@/types/play';

interface DiagramTabProps {
  diagrams?: DiagramItem[];
  keyPoints?: string[];
  imageUrl: string;
  activeDiagramIndex: number;
  setActiveDiagramIndex: (index: number) => void;
}

const DiagramTab: React.FC<DiagramTabProps> = ({
  diagrams,
  keyPoints,
  imageUrl,
  activeDiagramIndex,
  setActiveDiagramIndex,
}) => {
  return (
    <div>
      {diagrams && diagrams.length > 0 ? (
        <div>
          <Card className="bg-white mb-4">
            <div className="aspect-[16/9] bg-muted relative overflow-hidden">
              <img
                src={diagrams[activeDiagramIndex].imageUrl}
                alt="Play diagram"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-center">{diagrams[activeDiagramIndex].title}</h3>
            </div>
          </Card>

          {diagrams.length > 1 && (
            <div className="flex gap-2 justify-center mb-4">
              {diagrams.map((diagram, index) => (
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

          {keyPoints && keyPoints.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Key Points</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  {keyPoints.map((point, index) => (
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
              src={imageUrl}
              alt="Play diagram"
              className="object-contain w-full h-full"
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default DiagramTab;
