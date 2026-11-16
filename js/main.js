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
        intro() {
            return "I am " + this.name + " from " + this.className;
        },
    };
}
const s1 = createStudent("Ada", "SS1");
const s2 = createStudent("Bayo", "SS2");
const s3 = createStudent("Chidi", "SS3");
console.log(s1.intro());
console.log(s2.intro());
console.log(s3.intro());



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

const _sneakers = createProduct("_Sneakers", 25000);
const Bag = createProduct("Bag", 18000);

console.log("_Sneakers 10% off:", _sneakers.discount(10));

console.log("Bag 20% off:", Bag.discount(20));


// 6

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.describe = function () {
        return this.title + " by " + this.author + " (" + this.pages + " pages)";
    };
}
const book1 = new Book("Learn JavaScript", "Ada Obi", 250);
const book2 = new Book("Mastering CSS", "Bayo Ade", 180);
console.log(book1.describe());
console.log(book2.describe());


// 7

const user = {
    name: "Chidi"
};

// Adding a new property
user.email = "stanleynnanna33@gmail.com";

// Changing the name
user.name = "Stan";

console.log(user);

// Removing the email
delete user.email;

console.log(user);


// 8

const phone = {
    brand: "Tecno"
};

phone.brand = "Samsung";

console.log(phone.brand);

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

const shoe = new Product("Shoe");

console.log(shoe.constructor === Product);   // true
console.log({}.constructor === Object);      // true
console.log("abc".constructor === String);   // true
console.log([].constructor === Array);       // true
console.log((5).constructor === Number);     // true


// 10

  function Product(name, price) {
    this.name = name;
    this.price = price;
    this.showPrice = function () {
      return this.name + " costs ₦" + this.price;
    };
  }
  const sneakers = new Product("Sneakers", 25000);
  const backpack = new Product("Backpack", 18000);
  const cap = new Product("Cap", 3000);

  sneakers.inStock = 10;     
  cap.price = 3500;         
  backpack.discount = 15;    
  delete backpack.discount;  

  console.log(sneakers.inStock);
  console.log(cap.showPrice());
  console.log(backpack.discount);
  console.log(backpack.constructor === Product);
