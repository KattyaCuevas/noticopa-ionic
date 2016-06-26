import { Game } from '../interfaces/game-interface';
export interface Tournament {
  name: string,
  description?: string,
  image_url: string,
  games: Game[]
}