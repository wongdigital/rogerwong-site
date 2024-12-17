import type { ComponentType } from 'react';
import type { SVGProps } from 'react';
import { 
    CaseStudiesIcon,
    GuidesIcon,
    EssaysIcon,
    NotesIcon,
    ReviewsIcon,
    SideProjectsIcon,
    UpdatesIcon
} from './icons';
    
type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
  
export const categories: Record<string, { icon: IconComponent; description: string }> = {
    'Case Studies': {
      icon: CaseStudiesIcon,
      description: 'Behind-the-scenes of real-world projects'
    },
    'Guides': {
      icon: GuidesIcon,
      description: 'Tutorials and how-to content'
    },
    'Essays': {
      icon: EssaysIcon,
      description: 'Long-form thoughts and opinions on specific topics'
    },
    'Notes': {
      icon: NotesIcon,
      description: 'Quick observations and brief thoughts'
    },
    'Reviews': {
      icon: ReviewsIcon,
      description: 'Commentary and analysis'
    },
    'Side Projects': {
      icon: SideProjectsIcon,
      description: 'Personal projects and experiments'
    },
    'Updates': {
      icon: UpdatesIcon,
      description: 'News and status reports about ongoing work'
    }
  } as const;
  
export type Category = keyof typeof categories;