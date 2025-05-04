import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenCheck, Menu } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Gridiron Playbook Pro" }) => {
  return (
    <header className="bg-purple-700 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <BookOpenCheck className="h-6 w-6 text-white" />
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-purple-600/20">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-purple-700 p-0">
              <Navigation className="flex flex-col mt-12" />
            </SheetContent>
          </Sheet>
        </div>

        <Navigation className="hidden md:flex md:items-center md:gap-6" />
      </div>
    </header>
  );
};

export default Header;
