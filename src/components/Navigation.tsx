
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HomeIcon, BookOpen, Film, ClipboardList } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const navItems = [
    { label: "Home", icon: <HomeIcon className="h-4 w-4 mr-2" />, path: "/" },
    { label: "Playbook", icon: <BookOpen className="h-4 w-4 mr-2" />, path: "/playbook" },
    { label: "Film", icon: <Film className="h-4 w-4 mr-2" />, path: "/film" },
    { label: "Notes", icon: <ClipboardList className="h-4 w-4 mr-2" />, path: "/notes" },
  ];

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link to={item.path} key={item.path}>
          <Button variant="ghost" className="text-white hover:bg-purple-light/20">
            {item.icon}
            <span>{item.label}</span>
          </Button>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
