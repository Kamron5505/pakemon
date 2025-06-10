import { pokemons } from "./pokemons.js";
console.log(pokemons);

let lang = document.querySelector("#lang");
let row = document.querySelector("#row");
let search = document.querySelector("#search");
let btn = document.querySelector("#btn");

function renderData(filterData = pokemons) {
  row.innerHTML = "";
  filterData.map((item) => {
    let card = document.createElement("div");
    card.classList.add(
      "bg-[#FFFFF0]",
      "w-[250px]",
      "rounded-[10px]",
      "text-center",
      "relative",
      "pt-[30px]",
      "mb-[30px]"
    );

    card.innerHTML = `
      <div class="bg-red-600 w-[36px] text-white absolute top-0 right-0 rounded-tr-[10px]">
        ${item.num}
      </div>
      <p class="text-[#212529] font-extrabold">${item.name}</p>
      <img class="mx-auto my-[22px]" src="${item.img}" alt="${item.name}">
      <div class="bg-[#C4E4FF] w-[129px] rounded-[20px] text-center text-[20px] flex-col mx-auto">
        ${item.type.join(" ")}
      </div>
      <div class="mb-[46px] mt-[16px]">
        <p class="text-[#212529] font-bold text-[16px]">Candy count: ${item.candy_count || "???"
      }</p>
        <p class="text-[#212529] font-bold text-[16px]">${item.weight}</p>
        <p class="text-[#80007c] font-extrabold">${item.weaknesses.join(
        " "
      )}</p>
      </div>
      <div class="bg-[#00FFFF] w-[50px] rounded-bl-[10px] font-extrabold">20:00</div>
    `;

    row.append(card);
  });
}

function searchData() {
  let inputVal = search.value.toLowerCase();
  let filterData = pokemons.filter((item) =>
    item.name.toLowerCase().includes(inputVal)
  );
  renderData(filterData);
  search.value = "";
}


lang.addEventListener("change", sortPakemons);
btn.addEventListener("click", searchData);

renderData();



function sortPakemons() {
  let sortPok = [...pokemons];
  if (lang.value == "az") {
    sortPok.sort((a, z) => a.name.localeCompare(z.name));
  } else if (lang.value == "za") {
    sortPok.sort((a, z) => z.name.localeCompare(a.name));
  }
  renderData(sortPok);
}