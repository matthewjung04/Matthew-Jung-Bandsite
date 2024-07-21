// Script File for Shows Page

// Create object containing shows dates, venues, and locations
let shows = {
    dates: [
        'Mon Sept 09 2024',
        'Tue Sept 17 2024',
        'Sat Oct 12 2024',
        'Sat Nov 16 2024',
        'Fri Nov 29 2024',
        'Wed Dec 18 2024'
    ],
    venues: [
        'Ronald Lane',
        'Pier 3 East',
        'View Lounge',
        'Hyatt Agency',
        'Moscow Center',
        'Press Club'
    ],
    location: 'San Francisco, CA'
};

// Select the table html tag as parent container
let table = document.querySelector('.shows__table');

function addRow() {
    let newRow = document.createElement('tr');
    newRow.style = 'cursor: pointer';
    newRow.onclick = clickHandler;
    newRow.onmouseover = hoverHandler;
    newRow.onmouseout = hoverAwayHandler;
    table.appendChild(newRow);
    return newRow;
}

// For loop to add each corresponding date and venue to new row of the table
for (i=0; i<shows.dates.length; i++) {

    newRow = addRow();
    // newRow.setAttribute("id", "row-" + i+1);

    let headerDate = document.createElement('th');
    headerDate.classList.add('shows__table__header--first');
    headerDate.innerText = 'DATE'
    newRow.appendChild(headerDate);

    let dateColumn = document.createElement('td');
    dateColumn.classList.add('shows__table__data--first');
    dateColumn.innerText = shows.dates[i];
    newRow.appendChild(dateColumn);

    let headerVenue = document.createElement('th');
    headerVenue.classList.add('shows__table__header');
    headerVenue.innerText = 'VENUE'
    newRow.appendChild(headerVenue);

    let venueColumn = document.createElement('td');
    venueColumn.classList.add('shows__table__data');
    venueColumn.innerText = shows.venues[i];
    newRow.appendChild(venueColumn);
    
    let headerLocation = document.createElement('th');
    headerLocation.classList.add('shows__table__header');
    headerLocation.innerText = 'LOCATION'
    newRow.appendChild(headerLocation);

    let locationColumn = document.createElement('td');
    locationColumn.classList.add('shows__table__data');
    locationColumn.innerText = shows.location;
    newRow.appendChild(locationColumn);

    let newColumn = document.createElement('td');
    newColumn.classList.add('shows__table__data--last');
    newRow.appendChild(newColumn);

    let button = document.createElement('button');
    button.type = 'button';
    button.style = 'cursor: pointer';
    button.classList.add('shows__table__data__button');
    button.innerText = 'BUY TICKETS'
    newColumn.appendChild(button);
}

// Add hover and click events for shows table
const rows = document.querySelector('tr');

function hoverHandler (event) {
    event.currentTarget.style.backgroundColor = '#FAFAFA';
}

function hoverAwayHandler (event) {
    event.currentTarget.style.backgroundColor = '#FFFFFF';
}

function clickHandler (event) {
    event.currentTarget.style.backgroundColor = '#E1E1E1';
    console.log(event.target.parentElement);
    event.target.parentElement.style.backgroundColor = '#E1E1E1';
}

rows.addEventListener('mouseover', hoverHandler);
rows.addEventListener('mouseout', hoverAwayHandler);
rows.addEventListener('click', clickHandler);
