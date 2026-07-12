export interface NavLink {
  label: string;
  href: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}
