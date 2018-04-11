var femaleNames = ["Asia", "Kasia", "Ola", "Jola"];
var maleNames = ["Piotrek", "Marek", "Arek", "Jarek"];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = "Marian";


if (allNames.indexOf(newName) === -1) {
	var addNewName = allNames.push(newName);
	console.log(addNewName);
} else {
	console.log("To imię już istnieje. Dodaj inne imię")
}