export interface Skill {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: { id: number; name: string }[];
}
