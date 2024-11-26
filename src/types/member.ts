export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  skills: string[];
}