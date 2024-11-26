import { Member } from '@/types/member';

// Add your profile in this file!
// Copy the template below and fill in your information

/*
Template to copy:

{
  id: "unique-id", // Use a unique identifier
  name: "Your Name",
  role: "Your Role",
  bio: "A brief bio about yourself (2-3 sentences)",
  imageUrl: "Your image URL from Unsplash or other source",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    website: "https://yourwebsite.com"
  },
  skills: ["Skill 1", "Skill 2", "Skill 3"]
},
*/

export const teamMembers: Member[] = [
  {
    id: "avien-mexico",
    name: "Avien Mexico",
    role: "Software Developer",
    bio: "Passionate about building web applications, database management, automations and leveraging an entire AI team for programming. Always learning and sharing knowledge with the community.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    links: {
      github: "https://github.com/avienmexico",
      linkedin: "https://linkedin.com/in/avienmexico",
    },
    skills: ["Python", "PHP", "Node.js", "React", "TypeScript", "SQL", "Azure", "UI/UX", "Prototyping"]
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "UX Designer",
    bio: "Creating intuitive and beautiful user experiences. Focused on accessibility and inclusive design principles.",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop",
    links: {
      twitter: "https://twitter.com/sarahchen",
      website: "https://sarahchen.design"
    },
    skills: ["UI/UX", "Figma", "User Research", "Prototyping"]
  },
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    role: "Full Stack Developer",
    bio: "Passionate about building scalable web applications and mentoring junior developers. Always learning and sharing knowledge with the community.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    links: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson"
    },
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  }
];