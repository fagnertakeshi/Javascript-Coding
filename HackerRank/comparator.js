

function processData(input) {
    //Enter your code here
    
    let players = fromInputString(input);
    players.sort(comparator);
    players.shift();
    console.log(players.map(player => player.toString()).join('\n'));
} 


function fromInputString(inputString) {
    return inputString.split('\n')
      .map(line => line.split(' '))
      .map(([name, score]) => new Player(name, parseInt(score)));
  }
  class Player {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  
    toString() {
      return `${this.name} ${this.score}`;
    }
  }
  
  function comparator(a, b) {
    if (a.score !== b.score) {
      return b.score - a.score;
    } else {
      return a.name.localeCompare(b.name);
    }
  }


input="5\namy 100\ndavid 100\nheraldo 50\naakansha 75\naleksa 150"

processData(input)