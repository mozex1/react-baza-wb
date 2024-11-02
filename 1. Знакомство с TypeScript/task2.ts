enum EngineTypes {
    Petrol = 'petrol',
    Diesel = 'diesel'
}

interface IEngine {
    type: EngineTypes;
    power: number;
    isRunning?: boolean;
}

interface IWheels {
    count: number;
    pressure: number;
}

interface ICar {
    manufacturer: string;
    model: string;
    year: number;
    engine: IEngine;
    wheels: IWheels;
    displayInfo(): void;
}

class Car implements ICar {
    manufacturer: string;
    model: string;
    year: number;
    engine: IEngine;
    wheels: IWheels;

    constructor(manufacturer: string, model: string, year: number, engine: IEngine, wheels: IWheels) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.engine = new Engine(engine);
        this.wheels = wheels;
    }

    displayInfo(): void {
        console.log(`Производитель: ${this.manufacturer}, Модель: ${this.model}, Год: ${this.year}`);
        console.log(`Двигатель: тип ${this.engine.type}, Лошадиные силы: ${this.engine.power}, Запущен: ${this.engine.isRunning}`);
        console.log(`Колеса: ${this.wheels.count} колес, Давление: ${this.wheels.pressure} PSI`);
    }
}

class Engine implements IEngine {
    type: EngineTypes;
    power: number;
    isRunning: boolean;

    constructor(info: IEngine) {
        this.type = info.type;
        this.power = info.power;
        this.isRunning = false;
    }
}

class Wheels implements IWheels {
    count: number;
    pressure: number;

    constructor(count: number, pressure: number) {
        this.count = count;
        this.pressure = pressure;
    }
}

const engine = new Engine({type: EngineTypes.Petrol, power: 250});
const wheels = new Wheels(4, 10);
const AudiA4 = new Car('Audi', 'A4', 2024, engine, wheels);

AudiA4.displayInfo()
