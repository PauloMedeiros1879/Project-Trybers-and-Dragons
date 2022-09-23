import { EnergyType } from '../Energy';
// A classe Archetype deve ter os atributos privados: name, special, cost, que serão inicializados em seu construtor;
export default abstract class Archetype {
  private _special: number;
  private _cost: number;

  constructor(private _name: string) { // name deve ser recebido como parâmetro e inicializado no construtor;
    this._special = 0;
    this._cost = 0;
  }

  // Os atributos da classe Archetype podem ser lidos, mas não podem ser alterados;
  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances(): number { // A classe Archetype deve ter um método estático chamado createdArchetypeInstances que retorna um number
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType; // A classe Archetype deve ter um getter abstrato chamado energyType que retorna uma EnergyType
}
