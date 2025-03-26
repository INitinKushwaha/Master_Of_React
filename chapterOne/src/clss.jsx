
 class  Car {
    constructor(name) {
        this.band = name;
    }
    present() {
        return 'I have a ' + this.band;
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

const mycar = new Model('Ford', 'Mustang');
console.log(mycar.show());

export default mycar;