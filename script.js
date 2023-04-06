// activate airtable object
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyBbljDmTArcEUGQ" }).base(
  "appC8URqlbNTFMr44"
);

base("Table 1").select({
  maxRecords: 50,
  view: "Grid view",
})
  
  .eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      let airtableItem = document.createElement("div");
      airtableItem.classList.add("airtable-item");
      airtableItem.classList.add("push");
      airtableItem.classList.add("item1");


      airtableItem.setAttribute("data-genre", record.fields.genre);

      let airtableYear = document.createElement("div");
      airtableYear.classList.add("airtable-item-year");
      airtableYear.setAttribute("data-year", record.fields.year);

      let cover = document.createElement("img");
      cover.src = record.fields.cover[0].url;
      cover.classList.add("airtable-image");

      airtableItem.append(cover)

      document.body.append(airtableItem)
      
      ;

    });
  });

  

// set up a event listener for my empowering button
// listen for user clicker, once it is clicker, serach for divs with data-mood, empowering

// get our button using css ID
// assign a event listener to my button to listen for click
let adventureFilterBtn = document.getElementById("Adventure");
adventureFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)}
)
;

let bannedbookFilterBtn = document.getElementById("BannedBook"); 
bannedbookFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let childrensFilterBtn = document.getElementById("Childrens"); 
childrensFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let comingofageFilterBtn = document.getElementById("ComingOfAge"); 
comingofageFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let dystopianFilterBtn = document.getElementById("Dystopian"); 
dystopianFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let fantasyFilterBtn = document.getElementById("Fantasy"); 
fantasyFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let historicalFilterBtn = document.getElementById("Historical"); 
historicalFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let mysteryFilterBtn = document.getElementById("Mystery"); 
mysteryFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let readforschoolFilterBtn = document.getElementById("ReadForSchool"); 
readforschoolFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let romanceFilterBtn = document.getElementById("Romance");
romanceFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let scifiFilterBtn = document.getElementById("SciFi");
scifiFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let showAllBtn = document.getElementById("ShowAll");
showAllBtn.addEventListener("click", function(event){ShowAll(event)});

//year


function ShowHideFilter(e) {
  console.log("function is working");
  console.log(e.target.id)
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function SearchFilter(item) {
    item.classList.remove("filter-hide");
    item.classList.remove("airtable-item");

    // if div matches the id of the button, show div, otherwise, hide
    if (item.dataset.genre == e.target.id) {
      item.classList.add("filter-show");
    } else {
      item.classList.add("filter-hide");
    }
  });
  
}

function ShowHideFiltera(e) {
  console.log("function is working");
  console.log(e.target.id)
  let listofAirtableYears = document.querySelectorAll("div.airtable-item-year");
  listofAirtableYears.forEach(function SearchFilter(item) {
    item.classList.remove("filter-hide");
    // if div matches the id of the button, show div, otherwise, hide
    if (item.dataset.year == e.target.id) {
      item.classList.add("filter-show");
    } else {
      item.classList.add("filter-hide");
    }
  });
  
}

function ShowAll(e) {
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach( function ShowAllRecords(item){
    item.classList.remove("filter-hide");
    item.classList.add("filter-show");
  });
}


