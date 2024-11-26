import { Navbar } from '@/components/Navbar';
import { MemberCard } from '@/components/MemberCard';
import { teamMembers } from '@/data/team-members';
import { ThemeProvider } from '@/components/ThemeProvider';
import { CircleIcon, StarIcon, SquareIcon } from 'lucide-react';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="team-directory-theme">
      <div className="min-h-screen pt-16 bg-gradient-to-b from-background via-background to-muted/50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <CircleIcon className="absolute top-20 left-12 w-6 h-6 text-blue-500/20 animate-float" style={{ animationDelay: '0s' }} />
          <StarIcon className="absolute top-40 right-12 w-4 h-4 text-purple-500/20 animate-float" style={{ animationDelay: '1s' }} />
          <SquareIcon className="absolute bottom-20 left-1/2 w-5 h-5 text-blue-500/20 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <Navbar />
        
        <main className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block">
              <span className="inline-block animate-float" style={{ animationDelay: '0.5s' }}>
                <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                  Meet the Team
                </h1>
              </span>
            </div>
            <p className="text-lg text-muted-foreground mt-4">
              A diverse group of passionate individuals working together to create amazing experiences
            </p>
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="inline-flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id}>
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </main>

        <footer className="border-t mt-32 bg-muted/5 relative">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-24 right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-500">About Us</h3>
                <p className="text-sm text-muted-foreground">
                  We're a team of passionate individuals dedicated to creating amazing experiences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-500">Quick Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#team" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-500">Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Follow us on social media for updates and news.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;