import type { ComponentType } from 'react';
import type { SVGProps } from 'react';
import { 
    PaintBrushIcon, // Design
    ComputerDesktopIcon, // Technology
    RocketLaunchIcon, // Projects
    ChatBubbleLeftEllipsisIcon, // Commentary
    BookOpenIcon, // Guides
    DocumentTextIcon, // Uncategorized
  } from '@heroicons/react/24/outline';

type HeroIcon = ComponentType<SVGProps<SVGSVGElement>>;
  
export const categories: Record<string, { icon: HeroIcon; description: string }> = {
    'Design': {
      icon: PaintBrushIcon,
      description: 'Design processes, methods, and case studies'
    },
    'Technology': {
      icon: ComputerDesktopIcon,
      description: 'Tools, platforms, and industry news'
    },
    'Projects': {
      icon: RocketLaunchIcon,
      description: 'Personal and professional work'
    },
    'Commentary': {
      icon: ChatBubbleLeftEllipsisIcon,
      description: 'Analysis and opinion pieces'
    },
    'Guides': {
      icon: BookOpenIcon,
      description: 'How-tos and best practices'
    },
    'Uncategorized': {
      icon: DocumentTextIcon,
      description: 'Other posts'
    }
  } as const;
  
export type Category = keyof typeof categories;