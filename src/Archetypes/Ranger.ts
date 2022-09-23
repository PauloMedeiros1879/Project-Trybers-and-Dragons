import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  static numberInstances = 0;
  private _energyType: EnergyType;

  constructor(_name: string) {
    super(_name);
    Ranger.incrementArchetypeInstances();
    this._energyType = 'stamina';
  }

  static incrementArchetypeInstances() {
    this.numberInstances += 1;
  }

  static createdArchetypeInstances() {
    return this.numberInstances;
  } 

  get energyType(): EnergyType {
    return this._energyType;
  }
}