import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  static numberInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.IncrementsInstances();
  }

  static IncrementsInstances() {
    this.numberInstances += 1;
  }

  static createdRacesInstances() {
    return this.numberInstances;
  }
}