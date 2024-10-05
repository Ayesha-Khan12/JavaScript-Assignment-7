
// 1. Declare an empty array using JS literal notation to store student names in future.

var studentName = [];

// 2. Declare an empty array using JS object notation to store student names in future.

var studentName = newArray ();

// 3. Declare and initialize a strings array.

var array = ["Math"];

// 4. Declare and initialize a numbers array.

var array = [4];

// 5. Declare and initialize a boolean array.

var array = [true];


// 6. Declare and initialize a mixed array.

var array = ["Math", "Urdu", "English"];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan 
// (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
// Show the listed qualifications in your browser like:


document.write("<h1>Qualifications:</h1>")
var qualification = ["1) SSC" + " </br>" + "2) HSC" + "</br>" + "3) BCS" + "</br>" + "4) BS" + "</br>" + "5) BCOM" + "</br>" + "6) MS" + "</br>" + "7) M.Phil" + "</br>" + "8) PhD"];
document.write(qualification + "</br>");
document.write("<hr>");

// 8. Write a program to store 3 student names in an array.
// Take another array to store score of these three students.
//  Assume that total marks are 500 for each student,
//  display the scores & percentages of students like:

var studentsName = ["Michaael", "John", "Tony"];
var score = [320, 230, 480];
var total = [500];
var score1 = (score[0] / total) * 100;
var score2 = (score[1] / total) * 100;
var score3 = (score[2] / total) * 100;
document.write(`Score of Michael is ${score[0]}. Percentage: ${score1}% </br>`);
document.write(`Score of John is ${score[1]}. Percentage: ${score2}% </br>`);
document.write(`Score of Tony is ${score[2]}. Percentage: ${score3}% </br>`);
document.write("<hr>")


// 9. Initialize an array with color names.Display the array elements in your browser.
var color = ["Red", "Black", "Gray", "Blue"];
alert(color);

// a.Ask the user what color he / she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.
var startColor = prompt("Enter the color you want to add at the begginning:");
color.unshift(startColor);
alert("Updated Array " + color.join(", "));

// b.Ask the user what color he / she wants to add to the end & add that color to the end of the array.Display the updated array in your browser.
var endColor = prompt("Enter the color you want to add at the end:");
color.push(endColor);
alert("Updated Array " + color.join(", "));

// c.Add two more color to the beginning of the array.Display the updated array in your browser.
var startColor1 = prompt("Enter the first color you want to add at the beginning:");
var startColor2 = prompt("Enter the second color you want to add at the beginning:");
color.unshift(startColor1, startColor2);
alert("Updated Array " + color.join(", "));

// d.Delete the first color in the array.Display the updated array in your browser.
color.shift();
alert("Updated Array " + color.join(", "));

// e.Delete the last color in the array.Display the updated array in your browser.
color.pop();
alert("Updated Array " + color.join(", "));

// f.Ask the user at which index he / she wants to add a color & color name.Then add the color to desired position / index. .Display the updated array in your browser.

var index = prompt("At which index would you like to add a new color? (e.g., 0, 1, 2, etc.)");
var newcolor = prompt("What is the name of the new color you want to add?");
alert("Index Number is" + " " + index);
alert("New Add Color is" + " " + newcolor);

color.splice(index, 0, newcolor);

alert("Updated Colors is" + " " + color);
 

// g.Ask the user at which index he / she wants to delete color(s) & how many colors he / she wants to delete.Then
// remove the same number of color(s) from user - defined position / index. .Display the updated array in your browser.
var color = ["Pink" , "Blue" , "Yellow" , "Green"];
alert(color);
var index = prompt("At which index would you like to delete a new color? (e.g., 0, 1, 2, etc.)");
var colorNumber = prompt("How many colors would you like to delete?");
alert("Index Number is" + " " + index);
alert("Number of Colors to Delete is" + " " + colorNumber);

color.splice(index, colorNumber);

alert("Updated Colors is" + " " + color);


// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var scoreOfStudents = ["320", "230", "480", "120"];
document.write(`Scores of Students : ${scoreOfStudents} </br>`);
scoreOfStudents.sort();
document.write(`Ordered Scores of Students : ${scoreOfStudents}`);


// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var citeName = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write(`Cities List : </br> ${citeName} </br>`); 
var selectedCities = citeName.slice(2,4);
document.write(`Seleted Cities List : </br> ${selectedCities}`);


// 12. Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write(`Array : </br> ${arr} </br>`);
var arr = arr.join(" ");
document.write(`String : </br> ${arr}`);

// 13. Create a new array. Store values one by one in such a way that you can access
//  the values in the order in which they were stored. (FIFO-First In First Out)

var device = ["keyboard", "mouse", "printer", "monitor"];
document.write(`Devices: <br> ${device} <br> <br>`);

while(arr.length > 0){
    document.write(`Out: <br> ${device.shift()} <br>`);
}

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

var device = ["keyboard", "mouse", "printer", "monitor"];
document.write(`Devices: <br> ${device} <br> <br>`);

while(device.length > 0){
    document.write(`Out: <br> ${device.pop()} <br>`);
}

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//  Display the following dropdown/select menu in your browser using document.write() method:

let phoneManufactures = ["Apple","Samsung", "Motorola", "Nokia", "Sony & Haier"];
document.write("<select>");
for(let i = 0; i < phoneManufactures.length; i++){
    document.write(`<option value="${phoneManufactures[i]}">${phoneManufactures[i]}</option>`);
}
document.write("</select>");
