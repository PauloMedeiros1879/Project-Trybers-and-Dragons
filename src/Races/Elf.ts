import Race from './Race';

export default class Elf extends Race {
  public maxLifePoints: number;
  static numberInstances = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.IncrementsInstances();
  }

  static IncrementsInstances() {
    this.numberInstances += 1;
  }

  static createdRacesInstances() {
    return this.numberInstances;
  }
}