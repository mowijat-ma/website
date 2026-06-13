export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

export interface WpPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  context: string;
  jetpack_featured_media_url: string;
  image?: string;
  category: string;
  description: string;
  
}


export interface Post{
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  content?: string;
}


export interface InterviewPost {
    id: number;
    title?: string;
    excerpt?: string;
    with?: {
        name_ar: string,
        image: string
    }
}



export interface CalendarEventProps {
    id?: number;
    title?: string;
    startDate?: string;
    endDate: string;
    location?: string;
    description?: string;
    image?: string;  
}

// This type can be used for any font-related component that accepts a value and className
export interface FontComponentProps extends React.HTMLAttributes<HTMLParagraphElement> {
  value?: string;
  className?: string;
}


export interface BreadCrumbLinksType {
        title: string,
        href: string
    }




export interface WpCategory {
  id: Number;
  name: String;
  slug: String;
  count: number;
  description: String;
}