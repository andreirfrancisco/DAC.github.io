var box_1_title = ["Database Management", "Data Cleaning", "Data Statistics", "Data Visualization","Machine Learning"];
const DM = "Learn how to grab data using MySQL!"; 
const DC = "Learn how to clean data with Excel or Python!";
const DS = "Learn how to get stats for your data with Excel or Python!"; 
const DV = "Learn how to make dashboard with Tableau, Python , etc.!";
const ML = "Coming Soon:Machine Learning with Python";
var box_1_summary = [DM,DC, DS, DV, ML];
var box_2_icon = [
    "<i class='fa-solid fa-database'></i>",
    "<i class='fa-solid fa-broom'></i>",
    "<i class='fa-solid fa-table-columns'></i>",
    "<i class='fa-solid fa-chart-simple'></i>",
    "COMING SOON"
];
var box_2_create = ["D", "O","W", "N" , "COMING SOON"];
// for index.html
function display_media() {
    var card_titles = document.querySelectorAll('.box_1_title');
    var card_summaries = document.querySelectorAll('.box_1_summary');
    var card_icons = document.querySelectorAll('.box_2_icon');
    var card_creates = document.querySelectorAll('.box_2_create');

    for (let i = 0; i < box_1_title.length; i++) {
        card_titles[i].textContent = box_1_title[i];
        card_summaries[i].textContent = box_1_summary[i];
        card_icons[i].textContent = box_2_icon[i];
        card_creates[i].textContent = box_2_create[i];
    }
}

document.addEventListener('DOMContentLoaded', display_media);

// for index.html

function mobile_version() {
    console.log(window.innerHeight, window.innerWidth);
    if (window.innerHeight < 600 || window.innerWidth < 600) {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.style.flexDirection = 'column';
        });
        console.log("MEDIA VERSION");
    } else {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.style.flexDirection = 'row';
        });
        console.log("COMP VERSION");
    }
}

window.addEventListener('resize', mobile_version);

window.addEventListener('DOMContentLoaded', sql_commands);


// all deals with database.html


const sql_c = ['select', 'inner join', 'outer join', 'left join', 'right join', 'cross join', 'data conversion', 'keys', 'create table'
,'order by', 'asc', 'desc', 'null values', 'update', 'delete', 'aggregate functions', 'case'];

function sql_commands() {
    var list = document.querySelector('.sql_commands');

    sql_c.forEach(command => {
        var div_e = document.createElement('div');
        div_e.className = 'item'; // Changed class name to 'sql_command' (singular) for clarity
        div_e.textContent = command;
        list.appendChild(div_e);
    });

// add drag to the sql_c 
    // add positioning
    
}

