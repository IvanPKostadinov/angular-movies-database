import { CastMember } from './cast-member.model';
import { CrewMember } from './crew-member.model';

export interface Movie {
  name: string;
  releaseDate: Date;
  genre: string;
  runtime: string;
  poster: string;
  overview: string;
  cast?: CastMember[];
  crew?: CrewMember[];
}
