const btn = document.getElementById("btn");

const predictcolor = () => {
  const color1 = document.getElementById("color1").value;
  const color2 = document.getElementById("color2").value;
  const result = document.getElementById("result");

  if (
    (color1 == "red" && color2 == "blue") ||
    (color1 == "blue" && color2 == "red")
  ) {
    result.innerHTML =
      "The resulting color is <span style = 'color:purple;'>purple</span>";
  } else if (
    (color1 == "blue" && color2 == "yellow") ||
    (color1 == "yellow" && color2 == "blue")
  ) {
    result.innerHTML =
      "The resulting color is <span style = 'color:green;'>green</span>";
  } else if (
    (color1 == "red" && color2 == "yellow") ||
    (color1 == "yellow" && color2 == "red")
  ) {
    result.innerHTML =
      "The resulting color is <span style = 'color:orange;'>orange</span>";
  }
};
btn.addEventListener("click", predictcolor);
