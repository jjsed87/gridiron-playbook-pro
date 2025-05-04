
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Video, Play } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';

interface FilmTabProps {
  diagrams?: { title: string; imageUrl: string }[];
  imageUrl?: string;
  videoUrl?: string;
}

// More reliable football-related image fallbacks
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000",
  "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1000",
  "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=1000",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000",
];

const FilmTab: React.FC<FilmTabProps> = ({ diagrams, imageUrl, videoUrl }) => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [showVideo, setShowVideo] = useState(false);
  
  const handleImageError = (index: number) => {
    setImageErrors(prev => ({...prev, [index]: true}));
  };
  
  // Get fallback image based on index
  const getFallbackImage = (index: number) => {
    return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  };
  
  // Extract YouTube video ID from URL
  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return "";
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    const videoId = (match && match[7].length === 11) ? match[7] : "";
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // If we have a video URL, show video player (when clicked)
  if (videoUrl && showVideo) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Film Study</CardTitle>
          <CardDescription>Video examples of this play</CardDescription>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9}>
            <iframe 
              src={getYoutubeEmbedUrl(videoUrl)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            ></iframe>
          </AspectRatio>
          <Button 
            variant="outline" 
            onClick={() => setShowVideo(false)} 
            className="mt-4"
          >
            Back to Diagrams
          </Button>
        </CardContent>
      </Card>
    );
  }

  // If we have diagrams, display them in a carousel
  if (diagrams && diagrams.length > 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Film Study</CardTitle>
          <CardDescription>Video examples and diagrams of this play</CardDescription>
          {videoUrl && (
            <Button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 mt-2"
              variant="outline"
            >
              <Play className="h-4 w-4" /> Watch Film
            </Button>
          )}
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
                            src={imageErrors[index] ? getFallbackImage(index) : diagram.imageUrl} 
                            alt={diagram.title}
                            className="object-contain w-full h-full rounded-md"
                            onError={() => handleImageError(index)}
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

  // If only video URL (no diagrams), show a button to watch the video
  if (videoUrl) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Film Study</CardTitle>
          <CardDescription>Video examples of this play</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-12 text-center rounded text-gray-500">
            <Video className="mx-auto h-12 w-12 mb-2 text-gray-300" />
            <Button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-2 mt-2"
            >
              <Play className="h-4 w-4" /> Watch Film
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // If no diagrams or video are available, show the placeholder
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
