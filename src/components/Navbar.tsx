import { Users } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header 
        className={`w-full border-b transition-all duration-200 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60' 
            : 'bg-background'
        }`}
      >
        <div className="container flex h-16 items-center px-4">
          <div className="flex gap-6 md:gap-10">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-500" />
              <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Git Gud | Team Directory
              </span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#team"
                    className={navigationMenuTriggerStyle()}
                  >
                    Team
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className={navigationMenuTriggerStyle()}
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}