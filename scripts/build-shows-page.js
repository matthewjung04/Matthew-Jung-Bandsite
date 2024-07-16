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
let table = document.querySelector('.shows-table');

// For loop to add each corresponding date and venue to new row of the table
for (i=0; i<shows.dates.length; i++) {
    // Adds an empty row to bottom of the table
    let newRow = document.createElement('tr');
    table.appendChild(newRow);

    // Create a new column within the new row and add the matching date
    let dateColumn = document.createElement('td');
    dateColumn.innerText = shows.dates[i];

    // Create a new column within the new row and add the matching venue
    let venueColumn = document.createElement('td');
    venueColumn.innerText = shows.venues[i];

    // Create a new column within the new row and add the location
    let locationColumn = document.createElement('td');
    locationColumn.innerText = shows.location;

    // Add the new columns to the new row
    newRow.appendChild(dateColumn);
    newRow.appendChild(venueColumn);
    newRow.appendChild(locationColumn);
}