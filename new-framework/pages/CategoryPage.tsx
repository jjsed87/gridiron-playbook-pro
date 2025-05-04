
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PlayCard from '@/components/PlayCard';
import { Search, SlidersHorizontal, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data for categories
const categories = {
  "run": { 
    id: "run", 
    title: "Run Plays", 
    description: "Power, zone, and option run plays", 
    plays: [
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
    ]
  },
  "protection": { 
    id: "protection", 
    title: "Pass Protection", 
    description: "Protection schemes for passing plays", 
    plays: [
      { 
        id: "pr1", 
        title: "Half-Slide", 
        category: "Protection", 
        formation: "Shotgun", 
        imageUrl: "https://res.cloudinary.com/hslry6ksp/image/upload/v1610303417/pass-protection/half-slide-protection.jpg" 
      },
      { 
        id: "pr2", 
        title: "Max Protect", 
        category: "Protection", 
        formation: "I-Formation", 
        imageUrl: "https://qb-universe.com/wp-content/uploads/2023/01/maxprotection-768x530.jpg" 
      }
    ]
  },
  "screen": { 
    id: "screen", 
    title: "Screen Plays", 
    description: "RB, WR, and TE screen concepts", 
    plays: [
      { 
        id: "sc1", 
        title: "HB Screen", 
        category: "Screen", 
        formation: "Shotgun 3WR", 
        imageUrl: "https://s3media.247sports.com/Uploads/Assets/721/788/10788721.jpg" 
      },
      { 
        id: "sc2", 
        title: "Bubble Screen", 
        category: "Screen", 
        formation: "Trips Left", 
        imageUrl: "https://i0.wp.com/chipwagleyfootball.com/wp-content/uploads/2018/01/Bubble-Screen.jpg" 
      }
    ]
  }
};

const CategoryPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState("");
  
  const category = categories[id as keyof typeof categories];
  
  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  if (!category) {
    return <div className="p-8 text-center">Category not found</div>;
  }
  
  const filteredPlays = category.plays.filter(play => 
    play.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    play.formation.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gray-50 football-field-pattern">
      <Header title={category.title} />
      
      <main className="container px-4 py-6 mx-auto">
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
      
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
            <p className="text-muted-foreground">{category.description}</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search plays..."
                className="pl-8 pr-4 bg-white"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            
            <Button variant="outline" className="gap-1">
              <SlidersHorizontal className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>
        
        {filteredPlays.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPlays.map((play) => (
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
        ) : (
          <div className="p-8 text-center text-gray-500 bg-white rounded-lg border border-gray-200">
            <Search className="mx-auto h-12 w-12 mb-2 text-gray-300" />
            <h3 className="text-lg font-medium mb-1">No plays found</h3>
            <p className="max-w-md mx-auto mb-4">Try adjusting your search or filters</p>
            <Button variant="outline" onClick={() => setSearchValue("")}>
              Clear search
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryPage;
