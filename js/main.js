// 1

const student = {
    name: "Ada",
    age: 17,
    isPresent: true,

    greet: function () {
        console.log("Hi, I am " + this.name);
    }
};

console.log(student.name);

student.greet();


// 2

const Telle = {
    brand: "Tekno",
    model: "Spark 10",
    price: 120000,

    describe: function () {
        return "Tekno spark 10 " + ' cost ' + this.price + ' naira';
    }
};

console.log(Telle.describe());


// 3

const car = {
    make: "Toyota",
    topSpeed: 220
};

let property = "topSpeed";

console.log(car[property]);


// 4

function createStudent(name, className) {
    return {
        name: name,
        className: className,

        greet: function () {
            return "I am " + this.name + " from " + this.className;
        }
    };
}

const student1 = createStudent("Ada", "SS1");
const student2 = createStudent("Bayo", "SS2");
const student3 = createStudent("Chidi", "SS3");

console.log(student1.greet());
console.log(student2.greet());
console.log(student3.greet());


// 5

function createProduct(name, price) {
    return {
        name: name,
        price: price,

        addTax: function () {
            return this.price * 1.075;
        },

        discount: function (percent) {
            return this.price - (this.price * percent / 100);
        }
    };
}

const sneakers = createProduct("Sneakers", 25000);
const Bag = createProduct("Bag", 18000);

console.log("Sneakers 10% off:", sneakers.discount(10));

console.log("Bag 20% off:", Bag.discount(20));


// 6

function Book(title, author, pages) {
    this.title = "Learn JavaScript";
    this.author = "by Ada Obi";
    this.pages = 250;

    this.describe = function () {
        return this.title + " by " + this.author + " (" + this.pages + " pages)";
    };
}

const book1 = new Book("Things Fall Apart", "Chinua Achebe", 200);

const book2 = new Book("Half of a Yellow Sun", "Chimamanda", 300);

console.log(book1.describe());
console.log(book2.describe());


// 7

const user = {
    name: "John"
};

// Adding a new property
user.email = "john@gmail.com";

// Changing the name
user.name = "Ola";

console.log(user);

// Removing the email
delete user.email;

console.log(user);


// 8

const phone = {
    brand: "Tecno"
};

// Changing the property
phone.brand = "Samsung";

console.log(phone.brand);

// Trying to replace the entire object
try {
    phone = {
        brand: "iPhone"
    };
} catch (error) {
    console.log(error.message);
}


// 9

function Product(name) {
    this.name = name;
}

const product1 = new Product("Laptop");

console.log(product1.constructor === Product);

console.log(product1.constructor === Object);

console.log(product1.constructor === String);


// 10

function Product(name, price) {
    this.name = name;
    this.price = price;

    this.display = function() {
        console.log(this.name + ": ₦" + this.price);
    };
}

// Creating three products
const smartphone = new Product("Smartphone", 150000);

const backpack = new Product("Backpack", 20000);

const cap = new Product("Cap", 5000);

// Changing cap price
cap.price = 3000;

// Adding a discount property
backpack.discount = "5%";

console.log("Products:");

smartphone.display();
backpack.display();
cap.display();

// Deleting the discount property
delete backpack.discount;

console.log("After deleting discount:");

console.log(backpack);

// Checking the constructor
console.log(smartphone.constructor === Product);
console.log(backpack.constructor === Product);
console.log(cap.constructor === Product);

