const headerH1 = document.querySelector(".header");
const btnChangeCity = document.querySelector(".btn");

const headerH1Update = function (icon, temp, city) {
  headerH1.innerHTML = `
  <span class="header-icon">${icon}</span>
  Currently ${temp}&deg; in ${city[0].toUpperCase()}${city.slice(1)}
`;
};

const cityWeather = function () {
  const city = prompt("What city do you live in?");
  const temperature = prompt("What temperature is it?");
  if (temperature < 0) {
    headerH1Update("❄", temperature, city);
  } else {
    headerH1Update("🌡", temperature, city);
  }
};

btnChangeCity.addEventListener("click", cityWeather);
