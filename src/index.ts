import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Crie 3 objetos do tipo Character as variáveis devem-se chamar player1, player2 e player3
const player1 = new Character('Legolas');
const player2 = new Character('Dooby');
const player3 = new Character('Galadriel');

for (let i = 0; i < 15; i += 1) player1.levelUp(); // Executando algumas vezes o método levelUp do player1

// Crie 2 objetos do tipo Monster, as variáveis devem se chamar monster1 e monster2
// monster1 deve ser um Monster e monster2 deve ser um Dragon
const monster1 = new Monster();
const monster2 = new Dragon();

// Crie um objeto do tipo PVP, a variável deve se chamar pvp
// Como parâmetro do construtor passe player2 e player3
const pvp = new PVP(player2, player3);

// Crie um objeto do tipo PVE, a variável deve se chamar pve
// Como parâmetro do construtor passe player1 e um array contendo monster1 e monster2
const pve = new PVE(player1, [monster1, monster2]);

// Battle não pode ser instanciada, pois é uma classe abstrata
class BattleType extends Battle { }

// Crie uma função chamada runBattles
// A função recebe por parâmetro um array de batalhas (battles) e este array é do tipo Battle
// Dentro da função, crie uma repetição percorrendo este array e chame o método fight
const runBattles = (battlesArray: BattleType[]) => {
  for (let i = 0; i < battlesArray.length; i += 1) {
    battlesArray[i].fight();
  }
};

// Ao final do arquivo index.ts exporte player1, player2, player3, monster1, monster2, pvp, pve e runBattles
export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };