export interface Skill {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: { id: number; name: string }[];
}
export type SectionContentTypes = 'TEXT' | 'IMAGE_TEXT' | 'VIDEO';

export interface ContentTypeRenderObject {
  label: string;
  type: SectionContentTypes;
  iconName: string;
}
