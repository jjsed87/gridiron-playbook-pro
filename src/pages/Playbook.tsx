
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import PlayCard from '@/components/PlayCard';

// Mock data that would come from an API
const playData = [
  {
    id: "p1",
    title: "Power Right",
    category: "Run",
    formation: "I-Formation",
    imageUrl: "https://th.bing.com/th/id/OIP.Fvrt-j-BDLKu5_WVEWI6ywHaFL?rs=1&pid=ImgDetMain",
    isFavorite: true
  },
  {
    id: "p2",
    title: "Zone Left",
    category: "Run",
    formation: "Shotgun",
    imageUrl: "https://fadeawayfootball.com/wp-content/uploads/2019/08/Inside-Zone-Run-569x400.jpg",
    isFavorite: false
  },
  {
    id: "p5",
    title: "ATLANTA / FALCONS",
    category: "Run",
    formation: "Various",
    imageUrl: "public/lovable-uploads/c292e911-0413-4f67-8be6-066fa4e41fe4.png",
    isFavorite: false
  }
];

const Playbook: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [formationFilter, setFormationFilter] = useState('all');
  const [favorites, setFavorites] = useState<string[]>(
    playData.filter(play => play.isFavorite).map(play => play.id)
  );

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        return prev.filter(playId => playId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const filterPlays = (plays: typeof playData) => {
    return plays.filter(play => {
      const matchesSearch = play.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || play.category === categoryFilter;
      const matchesFormation = formationFilter === 'all' || play.formation === formationFilter;
      
      return matchesSearch && matchesCategory && matchesFormation;
    });
  };

  const filteredPlays = filterPlays(playData);
  const filteredFavorites = filteredPlays.filter(play => favorites.includes(play.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Offensive Line Playbook" />
      
      <main className="container px-4 py-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
                <CardDescription>Refine the play list</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search</label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search plays..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select 
                    value={categoryFilter}
                    onValueChange={setCategoryFilter}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Run">Run</SelectItem>
                      <SelectItem value="Pass">Pass</SelectItem>
                      <SelectItem value="Play Action">Play Action</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Formation</label>
                  <Select 
                    value={formationFilter}
                    onValueChange={setFormationFilter}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select formation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Formations</SelectItem>
                      <SelectItem value="I-Formation">I-Formation</SelectItem>
                      <SelectItem value="Shotgun">Shotgun</SelectItem>
                      <SelectItem value="Various">Various</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button variant="outline" className="w-full" onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('all');
                  setFormationFilter('all');
                }}>
                  <Filter className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Plays</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                {filteredPlays.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPlays.map(play => (
                      <PlayCard
                        key={play.id}
                        id={play.id}
                        title={play.title}
                        category={play.category}
                        formation={play.formation}
                        imageUrl={play.imageUrl}
                        isFavorite={favorites.includes(play.id)}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No plays match your filters</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="favorites" className="mt-6">
                {filteredFavorites.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredFavorites.map(play => (
                      <PlayCard
                        key={play.id}
                        id={play.id}
                        title={play.title}
                        category={play.category}
                        formation={play.formation}
                        imageUrl={play.imageUrl}
                        isFavorite={true}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No favorite plays match your filters</p>
                    <p className="text-muted-foreground text-sm mt-2">Add favorites by clicking the bookmark icon on plays</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Playbook;
