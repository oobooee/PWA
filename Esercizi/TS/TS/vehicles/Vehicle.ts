interface IVehicle {
    start(): void;
    stop(): void;
}

export abstract class Vehicle implements IVehicle {
    
    constructor(protected wheels: number) {
    }

    start(): void {
        console.log("Vehicle is starting.");
    }

    stop(): void {
        console.log("Vehicle is stopping.");
    }

    abstract drive(): void;
}

export class Car extends Vehicle {

    constructor(protected plate: string) {
        console.log("Car initializing.");
        super(4);
    }

    public drive(): void {
        console.log(`Vehicle is driving on ${this.wheels} with plate ${this.plate}`);
    }

}