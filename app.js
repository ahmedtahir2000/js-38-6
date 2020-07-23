//Chapter 38-42

//Q1

// var a= +prompt("Enter a: ");
// var b= +prompt("Enter b: ");
// var result=0;
// function power(a,b){
// result=a**b;
// alert("Result is "+result);
// }
// power(a,b);

//Q2

// var a= +prompt("Enter year: ");
// function checkLeap(a){
// var result=0;
// result=a%4;
// if(result===0){
//     alert("It's a leap year");
// }else{
//     alert("It's not a leap year");
// }
// }
// checkLeap(a);

//Q3

// var a= +prompt("Enter a: ");
// var b= +prompt("Enter b: ");
// var c= +prompt("Enter c: ");
// var s=0;
// var result=0;

// function area(a,b,c){
//     result= s*(s-a)*(s-b)*(s-c);
//     alert("Area is "+result);
// }
// function side(a,b,c){
// s=(a+b+c)/2;
// area(a,b,c);
// }
// side(a,b,c);

//Q4

// var result=0;
// function main(){
// var a= +prompt("Enter marks of English: ");
// var b= +prompt("Enter marks of Maths: ");
// var c= +prompt("Enter marks of Urdu: ");
// average(a,b,c);
// percent(a,b,c);
// }
// function average(a,b,c){
//     result=(a+b+c)/3;
//     document.write("Average: "+result+"<br>")
// }
// function percent(a,b,c){
// result=(result/300)*100;
// document.write("Percentage: "+result)
// }
// main();

//Q5

// var word=prompt("Enter word");
// var find=prompt("Enter letter for which you need to find Index");
// var i=0;

// do{
// if(word[i]==find){
//     alert(i);
//     break;
// }
// i++;
// }while(i<=word.length);

//Q6

// var word="Hi! How are ypu";
// var i=0;
// var res;

// function rep(word){
//     res=word.replace( /[aeiou]/g, '');
//         alert(res);
// } 

// rep(word);

//q7

// var sent="Pleases read this application and give me gratuity";
// var i=0;
// var twoletters="";
// var count=0;
// function countConsecutiveVowels(){
// do{
// twoletters=sent[i]+sent[i+1];
// switch(twoletters){
//     case "aa":
//     count ++;
//     break;
//     case "ae":
//     count ++;
//     break;
//     case "ai":
//     count ++;
//     break;
//     case "ao":
//     count ++;
//     break;
//     case "au":
//     count ++;
//     break;
//     case "ea":
//     count ++;
//     break;
//     case "ee":
//     count ++;
//     break;
//     case "ei":
//     count ++;
//     break;
//     case "eo":
//     count ++;
//     break;
//     case "eu":
//     count ++;
//     break;
//     case "ia":
//     count ++;
//     break;
//     case "ie":
//     count ++;
//     break;
//     case "ii":
//     count ++;
//     break;
//     case "io":
//     count ++;
//     break;
//     case "iu":
//     count ++;
//     break;
//     case "oa":
//     count ++;
//     break;
//     case "oe":
//     count ++;
//     break;
//     case "oi":
//     count ++;
//     break;
//     case "oo":
//     count ++;
//     break;
//     case "ou":
//     count ++;
//     break;
//     case "ua":
//     count ++;
//     break;
//     case "ue":
//     count ++;
//     break;
//     case "ui":
//     count ++;
//     break;
//     case "uo":
//     count ++;
//     break;
//     case "uu":
//     count ++;
//     break;
//     default:
//     break;
// }
// i++;
// }while(i<sent.length)
// alert(count);
// }

// countConsecutiveVowels();

//q8

// var dist=+prompt("Enter Distance in km");
// function meter(){
//     document.write("Meters= "+dist*1000+" m<br>");
// }
// function feet(){
//     document.write("Feets= "+dist*3280.84+" ft<br>");
// }

// function inches(){
//     document.write("Inches= "+dist*39370.08+" in<br>");
// }

// function cm(){
//     document.write("Centimeters= "+dist*100000+" cm");
// }

// meter();
// feet();
// inches();
// cm();

//q9

// var hoursWorked=+prompt("Total hours worked by an employee");
// if (hoursWorked>40){
// alert("Overtime pay: PKR "+(hoursWorked-40)*12);
// }else{
//     alert("No overtime");
// }

//q10
// var amount=+prompt("Amount need to withdraw");
// var note100=Math.floor(amount/100);
// amount=amount-(note100*100);
// var note50=Math.floor(amount/50);
// amount=amount-(note50*50);
// var note10=Math.floor(amount/10);
// alert("you will have "+note100+" hundred notes "+note50+" fifty notes "+note10+" ten notes.")


//Chapter 43-48

//q1
// function click1(){
//     alert("Thankyou for click");
// }

//q2
// function click1(){
//         alert("Thankyou for purchasing a phone from us");
//     }


//q3

// var index, table=document.getElementById('table');
//     for(var i = 1; i < table.rows.length; i++)
//     {
//         table.rows[i].cells[3].onclick = function()
//         {
           
//                 index = this.parentElement.rowIndex;
//                 table.deleteRow(index);
//             }
            
//             //console.log(index);
//         };
        

//q5

// var count=0;
// var counter=document.getElementById("co");
// function increase(){
//     count++;
//     counter.innerHTML=count;
// }
// function decrease(){
//     count--;
//     counter.innerHTML=count;
// }

//Chapter 43-48
//q1

// var pass=document.getElementById("password");
// var user=document.getElementById("username");
// function submit(){
//     document.write("Username: "+user.value+"<br>")
//     document.write("Password: "+pass.value)
// }

//q2

// var paragraph=document.getElementById("para");
// function read(){
//     paragraph.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend pretium lacinia. Cras a dolor sed ex congue pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis eget finibus dui, vel fermentum dui. Mauris ut auctor turpis. Maecenas nibh nisi, venenatis sit amet nisl ac, semper euismod neque. Suspendisse potenti. Phasellus non lacinia dolor. Integer elit dui, laoreet sit amet dictum in, mattis non quam. Duis aliquam eleifend felis, eget dignissim turpis vulputate et. Proin ultricies faucibus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a rhoncus erat, vitae euismod lacus. Nunc ultricies erat a nunc finibus vehicula.";
//     document.getElementById("readmore").style.display = "none";
// }

//q3
// var rIndex,
// table = document.getElementById("table");

// // check the empty input
// function checkEmptyInput()
// {
// var isEmpty = false,
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// if(fname === ""){
//     alert("First Name Connot Be Empty");
//     isEmpty = true;
// }
// else if(lname === ""){
//     alert("Last Name Connot Be Empty");
//     isEmpty = true;
// }
// else if(age === ""){
//     alert("Age Connot Be Empty");
//     isEmpty = true;
// }
// return isEmpty;
// }

// // add Row
// function addHtmlTableRow()
// {
// // get the table by id
// // create a new row and cells
// // get value from input text
// // set the values into row cell's
// if(!checkEmptyInput()){
// var newRow = table.insertRow(table.rows.length),
//     cell1 = newRow.insertCell(0),
//     cell2 = newRow.insertCell(1),
//     cell3 = newRow.insertCell(2),
//     fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;

// cell1.innerHTML = fname;
// cell2.innerHTML = lname;
// cell3.innerHTML = age;
// // call the function to set the event to the new row
// selectedRowToInput();
// }
// }

// // display selected row data into input text
// function selectedRowToInput()
// {

// for(var i = 1; i < table.rows.length; i++)
// {
//     table.rows[i].onclick = function()
//     {
//       // get the seected row index
//       rIndex = this.rowIndex;
//       document.getElementById("fname").value = this.cells[0].innerHTML;
//       document.getElementById("lname").value = this.cells[1].innerHTML;
//       document.getElementById("age").value = this.cells[2].innerHTML;
//     };
// }
// }
// selectedRowToInput();

// function editHtmlTbleSelectedRow()
// {
// var fname = document.getElementById("fname").value,
//     lname = document.getElementById("lname").value,
//     age = document.getElementById("age").value;
// if(!checkEmptyInput()){
// table.rows[rIndex].cells[0].innerHTML = fname;
// table.rows[rIndex].cells[1].innerHTML = lname;
// table.rows[rIndex].cells[2].innerHTML = age;
// }
// }

// function removeSelectedRow()
// {
// table.deleteRow(rIndex);
// // clear input text
// document.getElementById("fname").value = "";
// document.getElementById("lname").value = "";
// document.getElementById("age").value = "";
// }

//Chapter 58-67

//q1

// var x=document.getElementById("main-content")
// console.log(x.childNodes);
// var y=document.getElementsByClassName("render")
// for (var i=0; i<y.length; i++){
// document.write(y[i].innerHTML+"<br>");
// }
// var z=document.getElementById("first-name");
// z.value=y[0].childNodes[0].nodeValue;
// var p=document.getElementById("last-name");
// p.value=y[1].childNodes[0].nodeValue;
// var z=document.getElementById("email");
// z.value=y[2].childNodes[0].nodeValue;

//q2

var x=document.getElementById("form-content");
document.write("node type of element having id 'form-content' is: "+x.nodeType+"<br>");
var y=document.getElementById("lastName");
document.write("node type of element having id 'lastName' is: "+y.nodeType+"<br>");
document.write("node type of child of 'lastName' is: "+y.childNodes[0].nodeType+"<br>");
y.childNodes[0].nodeType=2;
document.write("Updated node type of child of 'lastName' is: "+y.childNodes[0].nodeType+"<br>");
var z=document.getElementById("main-content");
console.log(z.firstChild);
console.log(z.lastChild);
var p=document.getElementById("lastName");
console.log(p.nextSibling);
console.log(p.previousSibling);
var e=document.getElementById("email");
console.log(e.parentNode);
console.log(e.nodeType);



