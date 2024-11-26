import { teamMembers } from './data/team-members'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './components/ThemeProvider'
import { MemberCard } from './components/MemberCard'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </main>

        <footer className="border-t mt-32 bg-muted/5 relative">
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
  )
}

export default App