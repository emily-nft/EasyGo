const cashApp = document.querySelector(".logo");
const block = document.querySelector(".block");
const zelle = document.querySelector(".zelle");
const boa = document.querySelector(".boa");
const chase = document.querySelector(".chase");
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");
const names = document.getElementById("namey");
const email = document.getElementById("email");
const submit = document.getElementById("submit");
const labE = document.getElementById("ln");
const labN = document.getElementById("le");
console.log(labE);

let confirm = false;
let change = true;
submit.addEventListener("click", function (e) {
  e.preventDefault();

  const data = names.value;
  const data2 = email.value;

  if (data && data2) {
    console.log(data);
    email.value = "";
    names.value = "";
    text.textContent = "Authorizing...";
    setTimeout(function () {
      text.textContent = `Hello ${data}, We Are Glad to have you; kindly select your payment choice below`;
    }, 3000);

    confirm = true;
  } else {
    text.textContent = "kindly fill out the form to authorize this device";
  }
  if (
    labE.textContent === "Amount" &&
    labN.textContent === "CashTag" &&
    data &&
    data2
  ) {
    text.style.display = "none";
    text2.textContent = "pending...";
    setTimeout(function () {
      text2.textContent = `You have successfully sent $${data} to ${data2}`;
    }, 8000);
  }
});
cashApp.addEventListener("click", function () {
  if (confirm) {
    console.log("CashApp");
    text.textContent = "Authorizing...";
    setTimeout(function () {
      labE.textContent = "Amount";
      labN.textContent = "CashTag";
      submit.value = "Send";
      text.textContent =
        "please enter cashtag and amount to send; the amount will be deducted from your bank!";
    }, 5000);
  } else {
    text.textContent = "Please fill out the form to confirm you are not a bot!";
  }
});

block.addEventListener("click", function () {
  console.log("blockchain");
});

zelle.addEventListener("click", function () {
  console.log("zelle");
});

boa.addEventListener("click", function () {
  console.log("BOA");
});

chase.addEventListener("click", function () {
  console.log("Chase");
});
