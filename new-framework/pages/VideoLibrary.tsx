import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Mock video data
const videos = [
  {
    id: "v1",
    title: "Power Run Fundamentals",
    thumbnail: "https://i.ytimg.com/vi/example1/maxresdefault.jpg",
    duration: "10:23"
  },
  {
    id: "v2",
    title: "Zone Blocking Schemes",
    thumbnail: "https://i.ytimg.com/vi/example2/maxresdefault.jpg",
    duration: "8:15"
  },
  {
    id: "v3",
    title: "Counter Play Analysis",
    thumbnail: "https://i.ytimg.com/vi/example3/maxresdefault.jpg",
    duration: "12:47"
  }
];

const VideoLibrary: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Video Library" />
      
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">Coaching Videos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden cursor-pointer" onClick={() => navigate('/youtube-video', { state: { videoId: video.id } })}>
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/640x360?text=Video+Thumbnail";
                  }}
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-lg">{video.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Button size="sm" onClick={() => navigate('/youtube-video', { state: { videoId: video.id } })}>
                  Watch Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VideoLibrary;
