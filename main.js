#! /usr/bin/env node
import inquirer from "inquirer";
//lets make class for player
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = 100; //this is only for player
    }
}
//for opponent
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
//for name of player
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name",
    },
]);
//for opponent name
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    },
]);
//let get user data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                //for fuel decrease
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                //for fuel  decrease
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
            }
        }
        //Drink Portion
        if (ask.opt == "Drink Portion") {
            //for fuel increase
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is  ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(`You Loose, Better Luck Next Time`);
            process.exit();
        }
    }
    // Alien 
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                //for fuel decrease
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                //for fuel  decrease
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
            }
        }
        //Drink Portion
        if (ask.opt == "Drink Portion") {
            //for fuel increase
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is  ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(`You Loose, Better Luck Next Time`);
            process.exit();
        }
    }
    //zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                //for fuel decrease
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(`You Loose, Better Luck Next Time`);
                    process.exit();
                }
            }
            if (num <= 0) {
                //for fuel  decrease
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(`You Win`);
                    process.exit();
                }
            }
        }
        //Drink Portion
        if (ask.opt == "Drink Portion") {
            //for fuel increase
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel is  ${p1.fuel}`);
        }
        if (ask.opt == "Run For Your Life..") {
            console.log(`You Loose, Better Luck Next Time`);
            process.exit();
        }
    }
} while (true);
