const DELIVERY_FEE = 10;

/* EMPANADAS */
const empanadaBox = document.getElementById("empanadaBox");
const addEmpanada = document.getElementById("addEmpanada");
const removeEmpanada = document.getElementById("removeEmpanada");

addEmpanada.addEventListener("click", () => {
  const row = document.createElement("div");
  row.className = "order-row empanada-row";

  row.innerHTML = `
    <select class="empanada-select" required>
      <option value="" selected disabled>Select empanada</option>
      <option value="45">Regular Empanada</option>
      <option value="65">Special Empanada</option>
      <option value="100">Overload Empanada</option>
    </select>
    <input type="number" class="qty" min="1" value="1">
  `;

  empanadaBox.insertBefore(row, empanadaBox.querySelector(".row-actions"));
});

removeEmpanada.addEventListener("click", () => {
  const rows = empanadaBox.querySelectorAll(".empanada-row");
  if (rows.length > 1) {
    rows[rows.length - 1].remove();
  }
});

/* DRINKS */
const drinkBox = document.getElementById("drinkBox");
const addDrink = document.getElementById("addDrink");
const removeDrink = document.getElementById("removeDrink");

addDrink.addEventListener("click", () => {
  const row = document.createElement("div");
  row.className = "order-row drink-row";

  row.innerHTML = `
    <select class="drink-select" required>
      <option value="" selected disabled>Select drink</option>
      <option value="20">Coke Mismo</option>
      <option value="20">Royal Mismo</option>
      <option value="20">Sprite Mismo</option>
      <option value="20">Bottled Water</option>
    </select>
    <input type="number" class="qty" min="1" value="1">
  `;

  drinkBox.insertBefore(row, drinkBox.querySelector(".row-actions"));
});

removeDrink.addEventListener("click", () => {
  const rows = drinkBox.querySelectorAll(".drink-row");
  if (rows.length > 1) {
    rows[rows.length - 1].remove();
  }
});

/* GCASH TOGGLE */
const gcashInfo = document.getElementById("gcashInfo");
document.querySelectorAll('input[name="payment"]').forEach(radio => {
  radio.addEventListener("change", () => {
    gcashInfo.style.display = radio.value === "GCash" ? "block" : "none";
  });
});

/* FORM SUBMIT */
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let total = 0;

  document.querySelectorAll(".empanada-row").forEach(row => {
    const price = row.querySelector("select").value;
    const qty = row.querySelector(".qty").value;
    if (price) total += price * qty;
  });

  document.querySelectorAll(".drink-row").forEach(row => {
    const price = row.querySelector("select").value;
    const qty = row.querySelector(".qty").value;
    if (price) total += price * qty;
  });

  if (document.getElementById("orderType").value === "delivery") {
    total += DELIVERY_FEE;
  }

  alert(`Order placed successfully!\nTotal Amount: ₱${total}`);
});
