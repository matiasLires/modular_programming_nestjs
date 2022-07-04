// const myName = 'Nono';
// const myAge = 12;
// const suma = (a: number, b: number) => a + b;

// suma(12, 13);

class Persona {
	constructor(private age: number, private name: string) {
		this.age = age;
		this.name = name;
	}

	getSummary() {
		return `my name is ${this.name}, ${this.age} `;
	}
}

const matias = new Persona(26, 'Matias');
matias.getSummary();
