import Energy from '../Energy';

export default interface Fighter extends Fighter2 {
  defense: number,
  energy?: Energy,
  special(enemy: Fighter): void,
  levelUp(): void,
}

interface Fighter2 {
  lifePoints: number,
  strength: number,
  attack(enemy: Fighter2): void,
  receiveDamage(attackPoints: number): void,
}