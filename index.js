// Add your Circle class here
let pi = Math.PI;

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(d) {
        this._diameter = d;
        this.radius = this._diameter / 2;
    }

    get diameter() {
        return this.radius * 2;
    }

    set circumference(c) {
        this._circumference = c;
        this.radius = (this._circumference / pi) / 2
    }

    get circumference() {
        return pi * this.radius * 2;
    }

    get area() {
        return pi * (this.radius ** 2);
    }
}