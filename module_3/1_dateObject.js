/*1.Date Object:
a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.

Solution:*/
function getDayofWeek(date){
    var dateObj = new Date(date);
    var day = dateObj.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}
console.log(getDayofWeek('mm-dd-yyyy'));


/*b. Implement the function to display the day of the week for the current date.

Solution:*/
function getWeekDay() {
  var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[d.getDay()];
} 
console.log(getWeekDay());

