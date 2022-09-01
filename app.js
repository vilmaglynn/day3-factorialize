let num = document.getElementById("enterNumber");
let factorialize = document.getElementById("factorialize");
let  btnfactorialize = document.getElementById("btn-factorialize")



function factorFunct() {
	let total = 1;
	for (let i = 1; i <= num.value; i++) {
	  total *= i;
	  factorialize.innerHTML = `${total}`;
	}
	
  }


  
  btnfactorialize.addEventListener("click",factorFunct)
