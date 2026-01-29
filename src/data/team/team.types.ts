export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  phone?: string;
  email: string;
  image?: string;
  imageBg?: string;
}

export interface Department {
  title: string;
  description: string;
  members: TeamMember[];
}
