import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import utils from './utils';

export default class Character {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, utils(1, 10));
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._strength = utils(1, 10);
    this._defense = utils(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: utils(1, 10),
    };
  }

  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  private _lostLifePoints(damage: number) {
    this._lifePoints -= damage;
  }

  private _conditionForLostLifePoints(damage: number) {
    if ((this.lifePoints - damage) > 0) return this._lostLifePoints(damage);
    this._lifePoints = -1;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._conditionForLostLifePoints(damage);
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  private _incrementMaxLifePoints(incrementValue: number) {
    if ((this._maxLifePoints + incrementValue) < this._race.maxLifePoints) {
      this._maxLifePoints += incrementValue;
      return;
    }
    this._maxLifePoints = this._race.maxLifePoints;
  }

  private _incrementEnergy() {
    this._energy.amount = 10;
  }

  private _incrementstrength(incrementValue: number) {
    this._strength += incrementValue;
  }

  private _incrementDexterity(incrementValue: number) {
    this._dexterity += incrementValue;
  }

  private _incrementDefense(incrementValue: number) {
    this._defense += incrementValue;
  }

  levelUp(): void {
    this._incrementMaxLifePoints(utils(1, 10));
    this._incrementstrength(utils(1, 10));
    this._incrementDexterity(utils(1, 10));
    this._incrementDefense(utils(1, 10));
    this._incrementEnergy();
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const specialDamage = this._strength * 3;
    enemy.receiveDamage(specialDamage);
  }
}