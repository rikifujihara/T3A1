class Car { // in this line, a class called 'Car' is being defined.
    constructor(brand) { // `constructor` defines the block of code that will be run when a new instance of Car is created and takes 'brand' as a parameter
      this.carname = brand; // `this`is self-referring in order to declare that whatever is passed into the paramater 'brand' is assigned to the object's 'carname' attribute
    }
    present() { // in this line, a function called 'present' is being defined.
      return 'I have a ' + this.carname; // `this` is self-referring to access the current Car object's carname attribute. String concatenation is also being used, combining the hardcoded string with the object's atteibute 'carname'.
    }
  }
  
  class Model extends Car { // here a class called 'Model' is being defined, and is inheriting all of the properties from the Car class
    constructor(brand, mod) { // `constructor` defines the block of code that will be run when a new instance of Car is created and takes 'brand' as a parameter
      super(brand); // this line executes the super class' function of assigning the `brand` parameter as the object's brand attribute
      this.model = mod; // `this`is self-referring in order to declare that whatever is passed into the paramater 'mod' is assigned to the object's 'model' attribute
    }
    show() { // in this line, a function called 'present' is being defined.
      return this.present() + ', it was made in ' + this.model; // 
    }
  }
  
  let makes = ["Ford", "Holden", "Toyota"] // in this line, an array is being seeded with strings and assigned to the variable `makes`
  let models = Array.from(new Array(40), (x,i) => i + 1980) // here the Array.from static method is used to create a new array
  
  console.log(models)


  function randomIntFromInterval(min,max) { // 
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  for (model of models) {
  
    make = makes[randomIntFromInterval(0,makes.length-1)]
    model = models[randomIntFromInterval(0,models.length-1)]
  
    mycar = new Model(make, model);
    // console.log(mycar.show())
  }