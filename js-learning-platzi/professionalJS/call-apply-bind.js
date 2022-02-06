      // establish `this` using `call`
      function saludar() {
        console.log(`Hola. Soy ${this.name} ${this.apellido}`);
      }

      const rick = {
        name: 'Rick',
        apellido: 'Krog Mendez',
      };

      saludar.call(rick);

      // establish  `this` using `call` and pass arguments to the function
      function caminar(metros, direccion) {
        console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
      }

      caminar.call(leoc, 400, 'norte');

      // establish  `this` using `apply` and pass arguments to the function
      const valores = [800, 'noreste'];
      caminar.apply(richard, valores);

      
      //  Call uses a comma 
//        Apply uses Array


      // estblish  `this` in a new function using `bind`
      const daniel = { name: 'Juandi', apellido: 'Lopez' };
      const danielSaluda = saludar.bind(daniel);
      danielSaluda();

      const danielCamina = caminar.bind(daniel, 2000);
      danielCamina('oeste');

      // when is usefull to use this methods 
      const buttons = document.getElementsByClassName('call-to-action');
      // buttons.forEach(button => {
      //   button.onclick = () => alert('Nunca pares de aprender!');
      // });

      // NodeList
      Array.prototype.forEach.call(buttons, button => {
        button.onclick = () => alert('Nunca pares de aprender!');
      });