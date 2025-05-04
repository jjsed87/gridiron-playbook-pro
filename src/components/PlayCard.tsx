
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

// Fallback football play diagram
const FALLBACK_IMAGE = "https://i.imgur.com/LQAQZfZ.png";

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
          src={imageError ? FALLBACK_IMAGE : imageUrl} 
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
