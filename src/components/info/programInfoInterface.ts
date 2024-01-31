interface PersonInfo {
  name: string;
  role: string;
}

export interface ProgramInfoInterface {
  id: string;
  title: string;
  start: string;
  end: string;
  images: {
    icon: string;
  };
  channelId: string;
  channelTitle: string;
  channelImages: {
    logo: string;
  };
  meta: {
    year: string;
    genres: string[];
    cast: PersonInfo[];
    creators: PersonInfo[];
  };
  series: {
    title: string;
    episodes: {
      id: string;
      title: string;
    }[];
  }[];
  description: string;
  parsedSchedule?: string;
  parsedDate?: string;
}
