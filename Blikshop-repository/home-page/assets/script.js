//filter toggle on small screens

const navSlide = () => {
  const button = document.querySelector(".filter-button");
  const filter = document.querySelector(".filter");
  const text = document.querySelector(".title");

  button.addEventListener("click", () => {
    filter.classList.toggle("toggle");
    button.classList.toggle("toggle");
    text.classList.toggle("toggle-text");
  });
};
navSlide();

//dropdown-1
function show1(anything) {
  document.querySelector(".textbox-1").value = anything;
  const dropdown1 = document.querySelector(".dropdown-1");
  dropdown1.classList.toggle("activated");
}
const openDropdown1 = () => {
  const button1 = document.querySelector(".dropdown-1");
  const dropdown1 = document.querySelector(".options-1");
  button1.addEventListener("click", () => {
    dropdown1.classList.toggle("activated");
  });
};
openDropdown1();

//dropdown-2
function show2(anything) {
  document.querySelector(".textbox-2").value = anything;
  const dropdown2 = document.querySelector(".dropdown-2");
  dropdown2.classList.toggle("activated");
}
const openDropdown2 = () => {
  const button2 = document.querySelector(".dropdown-2");
  const dropdown2 = document.querySelector(".options-2");
  button2.addEventListener("click", () => {
    dropdown2.classList.toggle("activated");
  });
};
openDropdown2();

//Eksempel på array af Objects tilsvarende vores JSON fil med data fra Blikshop.dk - ROLF
obj = [
  {
    varenummer: "284230060-BM",
    "Materiale <materiale> (admin)": "Kobber",
    Type: "halvhård",
    "Vægt pr plade (kg)": "10,7",
    "Farve <farve> (admin)": "",
    "Bredde [mm] <bredde> (admin)": 1000,
    "Godstykkelse [mm] <tykkelse> (admin)": "0,6",
    "Længde [mm] <laengde> (admin)": 2000,
    "kg pris": 87,
    "Max Length <max_lenght> (admin)": 3200,
    "Max Width <max_width> (admin)": 1000,
  },
  {
    varenummer: "284230070-BM",
    "Materiale <materiale> (admin)": "Kobber",
    Type: "halvhård",
    "Vægt pr plade (kg)": "12,5",
    "Farve <farve> (admin)": "",
    "Bredde [mm] <bredde> (admin)": 1000,
    "Godstykkelse [mm] <tykkelse> (admin)": "0,7",
    "Længde [mm] <laengde> (admin)": 2000,
    "kg pris": 83,
    "Max Length <max_lenght> (admin)": 3200,
    "Max Width <max_width> (admin)": 1000,
  },
  {
    varenummer: "284230075-BM",
    "Materiale <materiale> (admin)": "Kobber",
    Type: "halvhård",
    "Vægt pr plade (kg)": "13,5",
    "Farve <farve> (admin)": "",
    "Bredde [mm] <bredde> (admin)": 1000,
    "Godstykkelse [mm] <tykkelse> (admin)": "0,75",
    "Længde [mm] <laengde> (admin)": 2000,
    "kg pris": 95,
    "Max Length <max_lenght> (admin)": 3200,
    "Max Width <max_width> (admin)": 1000,
  },
  {
    varenummer: "286230070-BM",
    "Materiale <materiale> (admin)": "Aluminium",
    Type: "EN AW-1050A",
    "Vægt pr plade (kg)": "3,78",
    "Farve <farve> (admin)": "Sort",
    "Bredde [mm] <bredde> (admin)": 1000,
    "Godstykkelse [mm] <tykkelse> (admin)": "0,7",
    "Længde [mm] <laengde> (admin)": 2000,
    "kg pris": 31,
    "Max Length <max_lenght> (admin)": 3000,
    "Max Width <max_width> (admin)": 1500,
  },
  {
    varenummer: "288440113-BM",
    "Materiale <materiale> (admin)": "Zink",
    Type: "",
    "Vægt pr plade (kg)": "10",
    "Farve <farve> (admin)": "Blank",
    "Bredde [mm] <bredde> (admin)": 1000,
    "Godstykkelse [mm] <tykkelse> (admin)": "0,7",
    "Længde [mm] <laengde> (admin)": 2000,
    "kg pris": 35,
    "Max Length <max_lenght> (admin)": 3200,
    "Max Width <max_width> (admin)": 1000,
  },
  {
    varenummer: "3141389-BM",
    "Materiale <materiale> (admin)": "Messing",
    Type: "Blød",
    "Vægt pr plade (kg)": "11,83",
    "Farve <farve> (admin)": "",
    "Bredde [mm] <bredde> (admin)": 1000,
    "Godstykkelse [mm] <tykkelse> (admin)": "0,7",
    "Længde [mm] <laengde> (admin)": 2000,
    "kg pris": 140,
    "Max Length <max_lenght> (admin)": 2000,
    "Max Width <max_width> (admin)": 1000,
  },
];

//format data
obj.forEach((obj) => {
  //looper igennem array af objects - ROLF
  for (let key in obj) {
    Object.keys(obj).forEach((key) => {
      //Udskifter specielle tegn og whitespace - ROLF
      let replacedKey = key
        .trim()
        .toUpperCase()
        .replace(/\s/g, "_")
        .replace("<", "")
        .replace(">", "")
        .replace("(", "")
        .replace(")", "")
        .replace("[", "")
        .replace("]", "");
      if (key !== replacedKey) {
        obj[replacedKey] = obj[key];
        delete obj[key];
      }
    });
  }
});
//define filters
let materialeFilter = "";
let farveFilter = "";
let tykkelseFilter = "";
//display content on load
function onLoad() {
  const div = document.querySelector(".main-container");
  div.innerHTML = "";
  //function that uses createTitle and createElement to loop through newData(the filtered data) and makes HTML content.
  MakeElements(obj);
}
window.onload = onLoad();

//get selected filter value for colors.
const filter = () => {
  const filterButtons = document.querySelectorAll("#Farve");
  filterButtons.forEach((index) => {
    //listen for clickevent and run function that first clear the main-container and then runs makeElements()
    index.addEventListener("click", () => {
      farveFilter = document.querySelector('input[name="Farve"]:checked').value;
      newData = filterData();
      console.log(newData);
      //empty main-container
      const div = document.querySelector(".main-container");
      div.innerHTML = "";
      //function that uses createTitle and createElement to loop through newData(the filtered data) and makes HTML content.
      MakeElements(newData);
    });
  });
  //get selected filter value for materials.
  const filterButtons1 = document.querySelectorAll("#Materiale");
  filterButtons1.forEach((index) => {
    //listen for clickevent and run function that first clear the main-container and then runs makeElements()
    index.addEventListener("click", () => {
      materialeFilter = document.querySelector(
        'input[name="Materiale"]:checked'
      ).value;
      newData = filterData();
      console.log(newData);
      //empty main-container
      const div = document.querySelector(".main-container");
      div.innerHTML = "";
      //function that uses createTitle and createElement to loop through newData(the filtered data) and makes HTML content.
      MakeElements(newData);
    });
  });
};
filter();

//Function that filters the data
const reduceData = (data, keys, fn) =>
  data.filter(fn).map((el) =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
/*Function that don't tahe parameters and uses the reduceData() function and the
variables: materialeFilter, farveFilter and tykkelseFilter to make a new list of
objects that returns only KG_PRIS", "VARENUMMER" and "MATERIALE_MATERIALE_ADMIN.*/
function filterData() {
  filteredData = obj;
  if (farveFilter != "") {
    filteredData = reduceData(
      filteredData,
      [
        "KG_PRIS",
        "VARENUMMER",
        "MATERIALE_MATERIALE_ADMIN",
        "GODSTYKKELSE_MM_TYKKELSE_ADMIN",
        "FARVE_FARVE_ADMIN",
      ],
      (item) => item.FARVE_FARVE_ADMIN == farveFilter
    );
  }
  if (materialeFilter != "") {
    filteredData = reduceData(
      filteredData,
      [
        "KG_PRIS",
        "VARENUMMER",
        "MATERIALE_MATERIALE_ADMIN",
        "GODSTYKKELSE_MM_TYKKELSE_ADMIN",
        "FARVE_FARVE_ADMIN",
      ],
      (item) => item.MATERIALE_MATERIALE_ADMIN == materialeFilter
    );
  }
  return filteredData;
}
/*function that takes an object and use KG_PRIS, VARENUMMER 
and GODSTYKKELSE_MM_TYKKELSE_ADMIN to generate a title.*/
function createTitle(object) {
  if (object.FARVE_FARVE_ADMIN == "") {
    object.FARVE_FARVE_ADMIN = "ingen farve";
  }
  let title =
    object.VARENUMMER +
    " · " +
    object.MATERIALE_MATERIALE_ADMIN +
    " · " +
    object.FARVE_FARVE_ADMIN +
    " · " +
    object.GODSTYKKELSE_MM_TYKKELSE_ADMIN +
    " mm.";
  return title;
}
//function that create an html element and sent cast it to the HTML
function createHTMLElement(title, price, img) {
  let element = document.createElement("div");
  element.classList.add("container-element");
  let text = "<a href=''>" + title + "</a>";
  let cost = "<p>" + price + " kr. /kg." + "</p>";
  let picture = "<img src=" + img + " />";

  element.insertAdjacentHTML("beforeend", picture);
  element.insertAdjacentHTML("beforeend", text);
  element.insertAdjacentHTML("beforeend", cost);

  let main_container = document.querySelector(".main-container");
  main_container.appendChild(element);
}
function MakeElements(newData) {
  newData.forEach(forEachObject);
}
function forEachObject(item, index, array) {
  let title = createTitle(item);
  createHTMLElement(
    title,
    item.KG_PRIS,
    "https://kmstaal.dk/wp-content/uploads/2021/09/Nye-Produktbilleder-Slebet-rustfristaal.png"
  );
}
