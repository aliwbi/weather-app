// `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
// api.openweathermap.org/data/2.5/weather?q=tehran&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric

const form = document.querySelector(".top-banner form");
const list = document.querySelector(".top-banner .ajax-section");
const msg = document.querySelector(".top-banner .msg");
const input = document.querySelector(".top-banner input");
const apiKey = "edc228562ac0a8aa3116d41c0687cf56";

form.addEventListener("submit", e => {
    e.preventDefault();
    inputValue = input.value;
    msg.innerHTML = "";
    const url = `api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then((respond) => respond.json())
    .then((data) => {
        console.log(data);
        const [weather, main, sys, name] = json;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
        const li = document.createElement("li");
        li.classList.add("cities");
        const markUp = `
        <h2 class='city-name' attributes='${name},${sys.country}'>
       <span>${name}</span>,
       <span>${sys.country}</span>
        </h2>

        <div class='city-temp'>${Math.round(main.temp)}</div>

        <figure>
        <img class='city-image' src='${icon}'>
        <figurecaption>${weather[0]["description"]}</figurecaption>
        </figure>
        `;

        li.innerHTML = markUp;
        list.appendchild(li);
    })
    .catch(() => {
        msg.innerHTML = "enter a valid city";
    })

    input.value = "";
})