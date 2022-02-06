function Dude(name){
    this.name = name;
}

const me = Dure('Jamecho');

me.prototype // this is Dude type and is not a constructor, it has a __proto__ (because is an object)
Dude.prototype // this is defined and a constructor is here, because is a constructor
me.__proto__// this is correct because me is an instance of Dude 

// Soime Notes:
/* 
- Por ejemplo, sise trata de buscar el toString en un objeto, y no esta, se busca en el prototype del prototype, y sino en el prototype del prototype del ptorotype (esto es herencia prototipal.
    - Object es el punto de partida de todos los objectos en JS
    - prototype property belongs to a constructor functions or classes (does not belong object nor instances);
*/

me.__proto__ === Dude.prototype //this returns true, because is the same

Dude.prototype.talk = function() {
    return 'Talk loud!';
}

me.talk(); // this displays: 'Talk loud!'
me.__proto__ // this shows that talk is now a functions of it (bacause it was declared in the parent object Dude) 

// the sintaxys:
const me = {} 
// is the same as: 
const me = new Object();

// -----------------------

const human = {
    kind: 'human'
}

const kraus = Object.create(human); // kraus inherits all from Humanm

kraus.age = 23;
kraus.age
kraus.kind // this prints kind even if its not a property from kras, but from human, because inherits 

// -----------------------------------


class Human {
    talk() {
        return 'TalkAndTalk';
    }
}

class SuperHuman extends Human {
    fly() {
        return 'FlyingHere!';
    }
}

const marrana = new SuperHuman();

marrana.fly(); // this will work
marrana.talk(); // this will work

marrana // this is a __proto__: Human
// the Human proto, will bne Object -- this is inheritance 

