
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlayCard from '@/components/PlayCard';
import PlayCategoryCard from '@/components/PlayCategoryCard';
import { ArrowRight, TrendingUp, Shield, Monitor, Clock, Star, Search } from 'lucide-react';

// Mock data for categories - updated to focus on requested categories
const categories = [
  { 
    id: "run", 
    title: "Run Plays", 
    description: "Power, zone, and counter run plays", 
    playCount: 15, 
    icon: <TrendingUp className="h-4 w-4 text-orange-600" />,
    color: "#ED8936" 
  },
  { 
    id: "protection", 
    title: "Pass Protection", 
    description: "Protection schemes for passing plays", 
    playCount: 12, 
    icon: <Shield className="h-4 w-4 text-purple-600" />,
    color: "#805AD5" 
  },
  { 
    id: "screen", 
    title: "Screen Plays", 
    description: "RB, WR, and TE screen concepts", 
    playCount: 8, 
    icon: <Monitor className="h-4 w-4 text-teal-600" />,
    color: "#2C7A7B" 
  }
];

// Updated mock data for plays - removed placeholders
const recentPlays = [
  { 
    id: "p1", 
    title: "Power Right", 
    category: "Run", 
    formation: "I-Formation", 
    imageUrl: "https://th.bing.com/th/id/OIP.Fvrt-j-BDLKu5_WVEWI6ywHaFL?rs=1&pid=ImgDetMain" 
  },
  { 
    id: "p2", 
    title: "Zone Left", 
    category: "Run", 
    formation: "Shotgun", 
    imageUrl: "https://fadeawayfootball.com/wp-content/uploads/2019/08/Inside-Zone-Run-569x400.jpg" 
  },
  { 
    id: "p5", 
    title: "ATLANTA / FALCONS", 
    category: "Run", 
    formation: "Various", 
    imageUrl: "public/lovable-uploads/c292e911-0413-4f67-8be6-066fa4e41fe4.png" 
  }
];

const Index: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 football-field-pattern">
      <Header />
      
      <main className="container px-4 py-6 mx-auto">
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Gridiron Playbook</h2>
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search plays..."
                className="pl-8 pr-4 bg-white"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <PlayCategoryCard 
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                playCount={category.playCount}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </section>
        
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Recent Plays</h2>
            <Button variant="ghost" className="text-purple hover:text-purple-dark">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <Tabs defaultValue="recent">
            <TabsList className="mb-4">
              <TabsTrigger value="recent">
                <Clock className="mr-2 h-4 w-4" />
                Recent
              </TabsTrigger>
              <TabsTrigger value="favorites">
                <Star className="mr-2 h-4 w-4" />
                Favorites
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentPlays.map((play) => (
                  <PlayCard
                    key={play.id}
                    id={play.id}
                    title={play.title}
                    category={play.category}
                    formation={play.formation}
                    imageUrl={play.imageUrl}
                    isFavorite={favorites.includes(play.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recentPlays
                  .filter(play => favorites.includes(play.id))
                  .map((play) => (
                    <PlayCard
                      key={play.id}
                      id={play.id}
                      title={play.title}
                      category={play.category}
                      formation={play.formation}
                      imageUrl={play.imageUrl}
                      isFavorite={true}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                  
                {favorites.length === 0 && (
                  <div className="col-span-full p-8 text-center text-gray-500 bg-white rounded-lg border border-gray-200">
                    <Star className="mx-auto h-12 w-12 mb-2 text-gray-300" />
                    <h3 className="text-lg font-medium mb-1">No favorites yet</h3>
                    <p className="max-w-md mx-auto mb-4">Favorite plays will appear here for quick access</p>
                    <Button variant="outline" onClick={() => {}}>
                      Browse Plays
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  );
};

export default Index;
