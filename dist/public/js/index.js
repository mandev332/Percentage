"use strict";
let amount = document.querySelector("#amount");
let percentage = document.querySelector("#percentage");
let year = document.querySelector("#year");
let table = document.querySelector(".table");

function percents(amount, percent, year) {
  let liTitle = document.createElement("li");
  liTitle.innerHTML = `
                    <h4>All</h4>
                    <h4>Month</h4>
                    <h4>Year</h4>
                `;
  table.append(liTitle);
  for (var i = 0; i < year; i++) {
    let li = document.createElement("li");
    let year = document.createElement("h4");
    let month = document.createElement("h4");
    let all = document.createElement("h4");
    var overtime = amount - (amount * (100 - percent)) / 100;
    amount += overtime;
    year.textContent = i + 1;
    month.textContent = (overtime / 12).toFixed(1);
    all.textContent = amount.toFixed(1);

    li.append(all, month, year);
    table.append(li);
  }
  return amount.toFixed(1);
}

function run(e) {
  table.innerHTML = "";
  e.preventDefault();
  if (e.keyCode != 13) return;
  if (amount.value && percentage.value && year.value) {
    percents(
      parseInt(amount.value),
      parseInt(percentage.value),
      parseInt(year.value)
    );
  }
  this.blur();
  amount.textContent = "";
  percentage.textContent = "";
  year.textContent = "";
}

amount.onkeyup = run;
year.onkeyup = run;
percentage.onkeyup = run;
