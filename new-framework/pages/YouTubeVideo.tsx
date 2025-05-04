import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const YouTubeVideo: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // In a real app, we would use the videoId to load the correct YouTube video
  // For now, we'll use a placeholder
  const videoId = location.state?.videoId || "placeholder";
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Video Player" />
      
      <main className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Videos
        </Button>
        
        <div className="aspect-video w-full bg-black mb-6 rounded-lg overflow-hidden">
          {/* In a real app, this would be an iframe with an actual YouTube embed */}
          <div className="flex items-center justify-center w-full h-full text-white">
            YouTube Video Player - ID: {videoId}
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Video Title Would Go Here</h1>
        
        <div className="prose max-w-none">
          <p>This is where the video description would go. In a real implementation, this would include detailed information about the video content, possibly timestamped sections, and related resources.</p>
        </div>
      </main>
    </div>
  );
};

export default YouTubeVideo;
