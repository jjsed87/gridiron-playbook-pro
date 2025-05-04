
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, FileText, Bookmark, BookmarkMinus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PlayCardProps {
  id: string;
  title: string;
  category: string;
  formation: string;
  imageUrl?: string;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

// More reliable football play diagram fallback images
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=1000",
  "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1000",
  "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=1000",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000",
];

const PlayCard: React.FC<PlayCardProps> = ({ 
  id, 
  title, 
  category, 
  formation, 
  imageUrl = "/placeholder.svg",
  isFavorite = false,
  onToggleFavorite
}) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  
  // Generate a consistent fallback image based on the play ID
  const getFallbackImage = () => {
    // Use the last character of the ID to select an image from the array
    const idLastChar = id.charAt(id.length - 1);
    const index = parseInt(idLastChar, 36) % FALLBACK_IMAGES.length;
    return FALLBACK_IMAGES[index];
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const viewPlay = () => {
    navigate(`/play/${id}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(id);
    }
  };

  return (
    <Card className="play-card cursor-pointer overflow-hidden flex flex-col" onClick={viewPlay}>
      <div className="aspect-[16/9] bg-muted relative overflow-hidden">
        <img 
          src={imageError ? getFallbackImage() : imageUrl} 
          alt={`${title} diagram`} 
          className="object-cover w-full h-full"
          onError={handleImageError}
        />
        <div className="absolute top-2 right-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`rounded-full ${isFavorite ? 'bg-purple text-white' : 'bg-white/80'}`}
            onClick={toggleFavorite}
          >
            {isFavorite ? <BookmarkMinus className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="p-4 text-sm text-muted-foreground flex-grow">
        <div className="flex flex-col gap-1">
          <p><span className="font-medium">Category:</span> {category}</p>
          <p><span className="font-medium">Formation:</span> {formation}</p>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="outline" size="sm" className="text-xs gap-1" onClick={viewPlay}>
          <Eye className="h-3 w-3" />
          View
        </Button>
        <Button variant="outline" size="sm" className="text-xs gap-1">
          <FileText className="h-3 w-3" />
          Notes
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlayCard;
