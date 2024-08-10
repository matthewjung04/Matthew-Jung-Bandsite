// Script File for Shows Page

// Import data from WebAPI
import {shows} from './band-site-api.js';

// Create object containing shows dates, venues, and locations
// let shows = {
//     dates: [
//         'Mon Sept 09 2024',
//         'Tue Sept 17 2024',
//         'Sat Oct 12 2024',
//         'Sat Nov 16 2024',
//         'Fri Nov 29 2024',
//         'Wed Dec 18 2024'
//     ],
//     venues: [
//         'Ronald Lane',
//         'Pier 3 East',
//         'View Lounge',
//         'Hyatt Agency',
//         'Moscow Center',
//         'Press Club'
//     ],
//     location: 'San Francisco, CA'
// };

// Use DOM methods to add html element containing all data from shows object

// Select the table html tag as parent container
let table = document.querySelector('.shows__table');

// Function that creates a row with corresponding styling and mouse events
function addRow() {
    let newRow = document.createElement('tr');
    newRow.style = 'cursor: pointer';
    newRow.onclick = clickHandler;
    table.appendChild(newRow);
    return newRow;
}

// For loop to add each corresponding date and venue to new row of the table
for (let i=0; i<shows.length; i++) {

    // Add a new row to the table
    let newRow = addRow();
    // newRow.setAttribute("id", "row-1-" + i+1);

    // Create a row heading for date
    let headerDate = document.createElement('th');
    headerDate.classList.add('shows__table__header--first');
    headerDate.innerText = 'DATE'
    newRow.appendChild(headerDate);

    // Add corresponding date from shows object to 'DATE' row
    let dateColumn = document.createElement('td');
    dateColumn.classList.add('shows__table__data--first');
    let dates = new Date(shows[i].date);
    dateColumn.innerText = dates.toDateString();
    newRow.appendChild(dateColumn);

    // Create a row heading for venue
    let headerVenue = document.createElement('th');
    headerVenue.classList.add('shows__table__header');
    headerVenue.innerText = 'VENUE'
    newRow.appendChild(headerVenue);

    // Add corresponding venue from shows object to 'VENUE' row
    let venueColumn = document.createElement('td');
    venueColumn.classList.add('shows__table__data');
    venueColumn.innerText = shows[i].place;
    newRow.appendChild(venueColumn);
    
    // Create a row heading for location
    let headerLocation = document.createElement('th');
    headerLocation.classList.add('shows__table__header');
    headerLocation.innerText = 'LOCATION'
    newRow.appendChild(headerLocation);

    // Add location 'San Francisco' from shows object to 'LOCATION' row
    let locationColumn = document.createElement('td');
    locationColumn.classList.add('shows__table__data');
    locationColumn.innerText = shows[i].location;
    newRow.appendChild(locationColumn);

    // Create a blank bottom data row for the 'Buy Tickets' button
    let newColumn = document.createElement('td');
    newColumn.classList.add('shows__table__data--last');
    newRow.appendChild(newColumn);

    // Create a button within the new bottom data row with corresponding stylings
    let button = document.createElement('button');
    button.type = 'button';
    button.style = 'cursor: pointer';
    button.classList.add('shows__table__data__button');
    button.innerText = 'BUY TICKETS'
    newColumn.appendChild(button);
}

// Add hover and click events for shows table based on mouse events

// Select all 'tr' elements in html
let rows = document.querySelector('tr');

function clickHandler (event) {
    // console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = '#E1E1E1';
    rows.removeEventListener('click', clickHandler);
}

// Add event litsener to the 'tr' elements for click event
rows.addEventListener('click', clickHandler);
