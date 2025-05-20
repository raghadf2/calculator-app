let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += ` ${operator} `;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  let current = display.value.trim();
  display.value = current.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value.replace(/\^/g, "**");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

function power() {
  display.value += " ^ ";
}

function inverse() {
  try {
    display.value = 1 / eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  try {
    display.value = eval(display.value) * -1;
  } catch {
    display.value = "Error";
  }
}

function toggleSci() {
  const panel = document.getElementById("sciPanel");
  const button = document.getElementById("sciBtn");

  if (panel.classList.contains("show")) {
    panel.classList.remove("show");
    button.classList.remove("active");
    setTimeout(() => {
      panel.style.display = "none";
    }, 300);
  } else {
    panel.style.display = "grid";
    setTimeout(() => {
      panel.classList.add("show");
      button.classList.add("active");
    }, 10);
  }
}


