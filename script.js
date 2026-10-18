
function joinPlan(plan) {
  alert(
    "You selected the " + plan +
    " membership. Contact our gym to complete registration."
  );
}

document.getElementById("contactForm").addEventListener(
  "submit",
  function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    document.getElementById("result").textContent =
      "Thank you, " + name +
      "! Your form was validated successfully.";

    this.reset();
  }
);
