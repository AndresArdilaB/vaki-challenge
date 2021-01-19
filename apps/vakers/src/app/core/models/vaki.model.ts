import { Country } from "./country";

export interface Vaki {
  description: string;
  start_date: number;
  close_date: number;
  name: string;
  summary: string;
  url: string;
  id: string;
  photo?: string;
  video?: string;
  country: Country['isoCode'];
}