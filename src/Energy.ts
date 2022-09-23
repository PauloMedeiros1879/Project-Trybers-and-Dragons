// Crie uma interface chamada Energy;
export default interface Energy {
  type_: EnergyType, // type_, do tipo EnergyType;
  amount: number // amount, do tipo number;
} 
export type EnergyType = 'mana' | 'stamina'; // Esse novo tipo deve receber os valores: 'mana' ou 'stamina';