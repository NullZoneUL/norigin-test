export interface EPGDataInterface {
  channels: {
    id: string;
    title: string;
    images: {
      logo: string;
    };
    schedules: {
      title: string;
      id: string;
      start: string;
      end: string;
      minutes?: number;
      parsedSchedule?: string;
    }[];
  }[];
}
