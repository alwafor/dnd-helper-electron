import { statToModifier } from './creatureCalculation';

export function difficultyToXp(difficulty: number) {
  switch (difficulty) {
    case 0:
    default:
      return 10;
    case 1:
      return 200;
    case 2:
      return 450;
    case 3:
      return 700;
    case 4:
      return 1100;
    case 5:
      return 1800;
    case 6:
      return 2300;
    case 7:
      return 2900;
    case 8:
      return 3900;
    case 9:
      return 5000;
    case 10:
      return 5900;
    case 11:
      return 7200;
    case 12:
      return 8400;
    case 13:
      return 10000;
    case 14:
      return 11500;
    case 15:
      return 13000;
    case 16:
      return 15000;
    case 17:
      return 18000;
    case 18:
      return 20000;
    case 19:
      return 22000;
    case 20:
      return 25000;
    case 21:
      return 33000;
    case 22:
      return 41000;
    case 23:
      return 50000;
    case 24:
      return 62000;
    case 25:
      return 75000;
    case 26:
      return 90000;
    case 27:
      return 105000;
    case 28:
      return 120000;
    case 29:
      return 135000;
    case 30:
      return 155000;
  }
}

export function percToPassivePerc(wisdom: string) {
  return 10 + statToModifier(wisdom);
}
