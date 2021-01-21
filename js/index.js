//DOM

//input
let bill = document.querySelector('#bill-amount');
let rate = document.querySelector('#serv-rating');
let people = document.querySelector('#total-people');
//calculate toggle
const button = document.querySelector('#button');
//output
let tipSection = document.querySelector('#tip-amount');
let result = document.querySelector('#pay-each');

//STARTUPS

//hide result section
tipSection.style.display = "none";

//on button click
button.onclick = ()=>{
	toggleResult();
	result.innerText = validate();
};

//FUNCTIONS

//un/show result section
function toggleResult(){
	if(tipSection.style.display === "none"){
		tipSection.style.display = "block";
		setTimeout(()=>{
			tipSection.style.display = "none";
		}, 10000);
	}
}
//calculate and show result
function calculate(){
	return ((parseFloat(bill.value)*parseFloat(rate.value))/parseInt(people.value)).toFixed(2);
}
//validate calculation
function validate(){
	if(isNaN(calculate()) || isFinite(calculate()) == false) return (0).toFixed(2);
	return calculate();
}
