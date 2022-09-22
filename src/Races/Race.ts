export default abstract class Race { // A classe Race é abstrata;
  constructor(
    private _name: string,
    private _dexterity: number,
  ) { }

  get name() { // O atributo name da classe Race pode ser lido e NÃO pode ser alterado;
    return this._name;
  }

  get dexterity() { // O atributo dexterity da classe Race pode ser lido e NÃO pode ser redefinido;
    return this._dexterity;
  }

  static createdRacesInstances(): number { // O método createdRacesInstances é estático e lança um erro com a mensagem "Not implemented";
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number; // O método maxLifePoints da classe Race é abstrato e retorna um valor numérico;
}
