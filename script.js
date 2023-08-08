const radioButtons = document.querySelectorAll(".radio-button");
const priceCards = document.querySelectorAll(".price-card");
const toggleTable = document.querySelectorAll(".toggler");
const priceValue = document.querySelectorAll(".price");
const tableSelect = document.querySelectorAll(".tableJS");

radioButtons.forEach((radioButton, index) => {
  console.log("index", index);
  radioButton.addEventListener("change", function () {
    // Reset styles for all price cards
    priceCards.forEach((card) => {
      card.classList.remove("active");
    });
    var htmlTable = `<table>
      <tr>
      <td></td>
      <td>Size</td>
      <td>Colour</td>
      </tr>
      <tr>
      <td>#1</td>
      <td>
        <select>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </td>
      <td>
        <select>
          <option value="colour" disabled selected>Colour</option>
          <option class="red">Red</option>
          <option class="green">Green</option>
        </select>
       </td>
       </tr>
       <tr>
            <td>#2</td>
            <td>
              <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </td>
            <td>
              <select>
                <option value="colour" disabled selected>Colour</option>
                <option class="red">Red</option>
                <option class="green">Green</option>
              </select>
            </td>
          </tr>
    </table>`;

    tableSelect[1].innerHTML = htmlTable;

    // Apply styles to the addStyle price card
    if (this.checked) {
      priceCards[index].classList.add("active");

      tableSelect[1].innerHTML = htmlTable;
      tableSelect[index].innerHTML = htmlTable;
      if (index === 0) {
        tableSelect[1].innerHTML = "";
        tableSelect[2].innerHTML = "";
      } else if (index === 1) {
        tableSelect[0].innerHTML = "";
        tableSelect[2].innerHTML = "";
      } else if (index === 2) {
        tableSelect[0].innerHTML = "";
        tableSelect[1].innerHTML = "";
      }

      let newTotal = priceValue[index].innerHTML;
      document.getElementById("total").innerHTML = "Total: " + newTotal;
    }
  });
});

priceCards.forEach((priceCard, index) => {
  priceCard.addEventListener("click", function () {
    radioButtons[index].click();
  });
});

//Add to cart button functionality

function addToCart() {
  alert("Cart has been updated.");
}
