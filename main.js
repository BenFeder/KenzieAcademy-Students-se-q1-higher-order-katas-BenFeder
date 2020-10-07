// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");

function printKata(kataNumber, object) {
  const detailsElement = document.createElement("details");
  main.append(detailsElement);

  const summaryElement = document.createElement("summary");
  summaryElement.append("KATA " + kataNumber);
  detailsElement.append(summaryElement);

  const stringifiedObject = JSON.stringify(object);
  detailsElement.append(stringifiedObject);
}

// Kata 1
let usersActive = users.filter(function (user) {
  return user.isActive == true;
});

printKata(1, usersActive);

// Kata 2
let usersEmail = users.map(function (user) {
  return user.email;
});

printKata(2, usersEmail);

// Kata 3
let companyOvationSome = users.some(function (user) {
  return user.company == "OVATION";
});

printKata(3, companyOvationSome);

// Kata 4
let over38 = users.find(function (user) {
  return user.age > 38;
});

printKata(4, over38);

// Kata 5
let usersOver38andActive = users
  .filter(function (user) {
    return user.isActive == true;
  })
  .find(function (user) {
    return user.age > 38;
  });

printKata(5, usersOver38andActive);

// Kata 6
let zencoBalances = users
  .filter((user) => user.company == "ZENCO")
  .map((user) => user.balance);

printKata(6, zencoBalances);

// Kata 7
let usersAgeFugiat = users
  .filter((user) => user.tags.includes("fugiat"))
  .map((user) => user.age);

printKata(7, usersAgeFugiat);
