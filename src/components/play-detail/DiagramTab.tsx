
import React, { useState } from 'react';
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

// Default football diagram image URLs that are known to work
const FALLBACK_IMAGES = [
  "https://i.imgur.com/LQAQZfZ.png",
  "https://i.imgur.com/Y7LlFEm.png",
  "https://i.imgur.com/5eKNyOC.png",
  "https://i.imgur.com/H1IBMvo.png"
];

const DiagramTab: React.FC<DiagramTabProps> = ({
  diagrams,
  keyPoints,
  imageUrl,
  activeDiagramIndex,
  setActiveDiagramIndex,
}) => {
  const [mainImageError, setMainImageError] = useState(false);
  const [diagramErrors, setDiagramErrors] = useState<Record<number, boolean>>({});
  
  const handleMainImageError = () => {
    setMainImageError(true);
  };
  
  const handleDiagramError = (index: number) => {
    setDiagramErrors(prev => ({...prev, [index]: true}));
  };
  
  // Get fallback image based on index
  const getFallbackImage = (index: number) => {
    return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  };

  return (
    <div>
      {diagrams && diagrams.length > 0 ? (
        <div>
          <Card className="bg-white mb-4">
            <div className="aspect-[16/9] bg-muted relative overflow-hidden">
              <img
                src={diagramErrors[activeDiagramIndex] 
                  ? getFallbackImage(activeDiagramIndex) 
                  : diagrams[activeDiagramIndex].imageUrl}
                alt="Play diagram"
                className="object-contain w-full h-full"
                onError={() => handleDiagramError(activeDiagramIndex)}
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
              src={mainImageError ? FALLBACK_IMAGES[0] : imageUrl}
              alt="Play diagram"
              className="object-contain w-full h-full"
              onError={handleMainImageError}
            />
          </div>
        </Card>
      )}
    </div>
  );
};

export default DiagramTab;
