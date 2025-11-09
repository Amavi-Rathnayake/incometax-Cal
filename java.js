function calculateTax() {
  const taxType = document.getElementById("taxType").value;
  const amountField = document.getElementById("amount");
  const amount = parseFloat(amountField.value);
  const errorMsg = document.getElementById("errorMsg");
  const result = document.getElementById("result");

  errorMsg.textContent = "";
  result.textContent = "";

   if (isNaN(amount) || amount <= 0) {
    errorMsg.textContent = "Please enter a valid amount greater than 0.";
    return;
  }
  if (!taxType) {
    errorMsg.textContent = "Please select a tax type.";
    return;
  }

  let tax = 0;
 

  if (taxType === "rent") {
    if (amount > 100000) {
      tax = amount * 0.10;
    } 
      
  } else if (taxType === "bank") {
    tax = amount * 0.05;
   
  } else if (taxType === "dividend") {
    if (amount > 100000) {
      tax = amount * 0.14;  
  }
  }
   
   console.log("Tax",tax);
   result.innerText=tax;
}


function payableTax(){
  
  const salaryfield = document.getElementById("salary");
  const salary = parseFloat(salaryfield.value);
  const errorMsg = document.getElementById("errorMsg");
  const result2 = document.getElementById("result2");

  errorMsg.textContent = "";
  result2.textContent = "";

   if (isNaN(salary) || salary <= 0) {
    errorMsg.textContent = "Please enter a valid amount greater than 0.";
    return;
  }
  

  let tax = 0;
  let massage="";
  let limit=100000;
  let sal_limit=41667;

  if (salary<=limit){
				tax=0;
				massage="Your tax rate is 0%";

			}else if (salary<=(limit+sal_limit)){
				tax = (salary-limit)*0.06;
        massage="Your tax rate is 6%";
				
			}else if (salary<=(limit+2*sal_limit)){
				tax = limit*0.06 + (salary-(limit+sal_limit))*0.12;
        massage="Your tax rate is 12%";
				
			}else if (salary<=(limit+3*sal_limit)){
				tax = limit*0.06+limit*0.12+ (salary- (limit+2*sal_limit))*0.18;
				massage="Your tax rate is 18%";

			}else if (salary<=(limit+4*sal_limit)){
				tax = limit*0.06+limit*0.12+limit*0.18 + (salary-(limit+3*sal_limit))*0.24;
				massage="Your tax rate is 24%";

			}else if (salary<=(limit+5*sal_limit)){
				tax = limit*0.06+limit*0.12+limit*0.18+limit*0.24 + (salary-(limit+4*sal_limit))*0.30;
				massage="Your tax rate is 30%";

			}else{
				tax = limit*0.06+limit*0.12+limit*0.18+limit*0.24+limit*0.30 + (salary-(limit+5*sal_limit))*0.36;
        massage="Your tax rate is 36%";

      }

      console.log("Tax",tax);
      result2.innerText=tax + "  (" +massage + ")";

}


function incomeTax(){
  
  const salaryfield = document.getElementById("salary");
  const salary = parseFloat(salaryfield.value);
  const errorMsg = document.getElementById("errorMsg");
  const result2 = document.getElementById("result2");

  errorMsg.textContent = "";
  result2.textContent = "";

   if (isNaN(salary) || salary <= 0) {
    errorMsg.textContent = "Please enter a valid amount greater than 0.";
    return;
  }
  

  let tax = 0;
  let massage="";
  let limit=120000;
  let sal_limit=50000;

  if (salary<=limit){
				tax=0;
				massage="Your tax rate is 0%";

			}else if (salary<=(limit+sal_limit)){
				tax = (salary-limit)*0.06;
        massage="Your tax rate is 6%";
				
			}else if (salary<=(limit+2*sal_limit)){
				tax = limit*0.06 + (salary-(limit+sal_limit))*0.12;
        massage="Your tax rate is 12%";
				
			}else if (salary<=(limit+3*sal_limit)){
				tax = limit*0.06+limit*0.12+ (salary- (limit+2*sal_limit))*0.18;
				massage="Your tax rate is 18%";

			}else if (salary<=(limit+4*sal_limit)){
				tax = limit*0.06+limit*0.12+limit*0.18 + (salary-(limit+3*sal_limit))*0.24;
				massage="Your tax rate is 24%";

			}else if (salary<=(limit+5*sal_limit)){
				tax = limit*0.06+limit*0.12+limit*0.18+limit*0.24 + (salary-(limit+4*sal_limit))*0.30;
				massage="Your tax rate is 30%";

			}else{
				tax = limit*0.06+limit*0.12+limit*0.18+limit*0.24+limit*0.30 + (salary-(limit+5*sal_limit))*0.36;
        massage="Your tax rate is 36%";

      }

      console.log("Tax",tax);
      result2.innerText=tax + "  (" +massage + ")";

}

function ssclTax(){
  const salaryfield = document.getElementById("salary");
  const salary = parseFloat(salaryfield.value);
  const errorMsg = document.getElementById("errorMsg");
  const saletax = document.getElementById("saletax");
  const afterSale = document.getElementById("aftersale");
  const vat = document.getElementById("vat");
  const sscl = document.getElementById("sscl");

  errorMsg.textContent = "";
  saletax.textContent = "";
  aftersale.textContent = "";
  vat.textContent = "";
  sscl.textContent = "";

   if (isNaN(salary) || salary <= 0) {
    errorMsg.textContent = "Please enter a valid amount greater than 0.";
    return;
  }

  let sTax=0.025;
  let vTax=0.15;
  let SSCL=0;

  let saleTax=salary*sTax;
  let afterSaleTax=salary+saleTax;
  let Vat=afterSaleTax*vTax;
  SSCL=saleTax+Vat;

  console.log("Sale Tax ",saleTax);
  saletax.innerText="Sale Tax : "+saleTax;

  console.log("After Sale Tax ",afterSaleTax);
  afterSale.innerText="After Sale Tax "+ afterSaleTax;

  console.log("Vat ",Vat);
  vat.innerText="Vat : "+ Vat;

  console.log("Finel SSCL Value ",SSCL);
  sscl.innerText="Finel SSCL Value "+ SSCL;

}
