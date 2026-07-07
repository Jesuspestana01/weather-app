export interface MoreInfoCardsProps {
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  skeleton: boolean;
  data: Array<{
    id: number;
    title: string;
    description: string;
    symbol: string;
  }>;
}

export interface SearchBarProps {
  placeholder: string;
}
