// activate airtable object
var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyBbljDmTArcEUGQ" }).base(
    "appC8URqlbNTFMr44"
  );
  
  base("Table 1")
    .select({
      // maxRecords: 50,
      // view: "Grid view",
    })
    .eachPage(function page(records, fetchNextPage) {
      records.forEach(function (record) {
        let airtableItem = document.createElement("div");
        airtableItem.classList.add("airtable-item");
        airtableItem.setAttribute("data-genre", record.fields.genre);
  
        let cover = document.createElement("img");
        cover.src = record.fields.cover[0].url;
        cover.classList.add("airtable-image");
  
        let title = document.createElement("span");
        title.innerHTML = record.fields.title;
  
        airtableItem.append(cover)
        airtableItem.append(title)
  
        document.body.append(airtableItem);
      });
    });

// get our button using css ID
// assign a event listener to my button to listen for click
let historicalFilterBtn = document.getElementById("Historical");
historicalFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let mysteryFilterBtn = document.getElementById("Mystery");
mysteryFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let romanceFilterBtn = document.getElementById("Romance"); 
romanceFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

let showAllBtn = document.getElementById("ShowAll");
showAllBtn.addEventListener("click", function(event){ShowAll(event)});

function ShowHideFilter(e) {
  console.log("function is working");
  console.log(e.target.id)
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function SearchFilter(item) {
    item.classList.remove("filter-hide");
    // if div matches the id of the button, show div, otherwise, hide
    if (item.dataset.genre == e.target.id) {
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
  })
}


