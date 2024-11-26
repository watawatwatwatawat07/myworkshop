import { Github, Globe, Linkedin, Twitter } from 'lucide-react';
import { Member } from '@/types/member';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  const { name, role, bio, imageUrl, links, skills } = member;
  
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 border-muted/40">
      <CardHeader className="text-center relative overflow-hidden pb-0">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-background shadow-xl transition-transform group-hover:scale-105">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="text-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white">{initials}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-semibold tracking-tight mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground font-medium">{role}</p>
      </CardHeader>
      <CardContent className="mt-4">
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{bio}</p>
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 hover:from-blue-500/10 hover:to-purple-500/10 text-blue-700 dark:text-blue-300 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 border-t bg-muted/5">
        {links.github && (
          <Button variant="ghost" size="icon" className="hover:text-blue-600 dark:hover:text-blue-500" asChild>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {links.linkedin && (
          <Button variant="ghost" size="icon" className="hover:text-blue-600 dark:hover:text-blue-500" asChild>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        )}
        {links.twitter && (
          <Button variant="ghost" size="icon" className="hover:text-blue-600 dark:hover:text-blue-500" asChild>
            <a href={links.twitter} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
        )}
        {links.website && (
          <Button variant="ghost" size="icon" className="hover:text-blue-600 dark:hover:text-blue-500" asChild>
            <a href={links.website} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}