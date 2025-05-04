
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface PlayCategoryCardProps {
  id: string;
  title: string;
  description: string;
  playCount: number;
  icon: React.ReactNode;
  color: string;
}

const PlayCategoryCard: React.FC<PlayCategoryCardProps> = ({
  id,
  title,
  description,
  playCount,
  icon,
  color
}) => {
  const navigate = useNavigate();
  
  const viewCategory = () => {
    navigate(`/category/${id}`);
  };

  return (
    <Card 
      className="play-card cursor-pointer border-l-4 h-full"
      style={{ borderLeftColor: color }}
      onClick={viewCategory}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <div className={`p-2 rounded-full bg-${color}/10`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground mb-2">{description}</CardDescription>
        <div className="text-sm font-medium">{playCount} plays</div>
      </CardContent>
    </Card>
  );
};

export default PlayCategoryCard;
