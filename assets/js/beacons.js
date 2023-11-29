// setup beacons page
(async function () {
    // get beacons
    const beacons = await fetch(`${root}/beacons/get.php`)
        .then(response => response.json());

    // for every beacon
    beacons.forEach(beacon => {
        // add to table
        document.querySelector("#beaconsTable tbody").insertAdjacentHTML('beforeend', `
            <tr>
                <td>${beacon._id.$oid}</td>
                <td>${beacon.title}</td>
                <td>${beacon.latitude}</td>
                <td>${beacon.longitude}</td>
                <td>${beacon.address}</td>
                <td>${beacon.description}</td>
                <td>${beacon.status}</td>
            </tr>
        `);
    });


})();