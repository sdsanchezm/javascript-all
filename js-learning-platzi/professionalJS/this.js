      // this in the global scope
      console.log(`this: ${this}`);

      // this in the scope of a function
      function whoIsThis() {
        return this;
      }

      console.log(`whoIsThis(): ${whoIsThis()}`);

      // this in the scopeof a function in strict mode
      function whoIsThisStrict() {
        'use strict';
        return this;
      }

      console.log(`whoIsThisStrict(): ${whoIsThisStrict()}`);

      // this in the context of an object
      const person = {
        name: 'Gabriel',
        saludar: function() {
          console.log(`Hola soy ${this.name}`);
        },
      };

      person.saludar();

      // this when take a function out of an object
      const accion = person.saludar;
      accion();

      // this in the context of a class
      function Person(name) {
        // this = {}
        this.name = name;
      }

      Person.prototype.saludar = function() {
        console.log(`Me llamo ${this.name}`);
      };

      const inger = new Person('Inger');
      inger.saludar();