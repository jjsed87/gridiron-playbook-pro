
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Video } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface FilmTabProps {
  diagrams?: { title: string; imageUrl: string }[];
  imageUrl?: string;
}

const FilmTab: React.FC<FilmTabProps> = ({ diagrams, imageUrl }) => {
  // If we have diagrams, display them in a carousel
  if (diagrams && diagrams.length > 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Film Study</CardTitle>
          <CardDescription>Video examples of this play</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              {diagrams.map((diagram, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="p-0">
                        <AspectRatio ratio={16 / 9}>
                          <img 
                            src={diagram.imageUrl} 
                            alt={diagram.title}
                            className="object-contain w-full h-full rounded-md" 
                          />
                        </AspectRatio>
                      </CardContent>
                      <div className="p-3">
                        <h3 className="text-center font-medium">{diagram.title}</h3>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </CardContent>
      </Card>
    );
  }

  // If no diagrams are available, show the placeholder
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
