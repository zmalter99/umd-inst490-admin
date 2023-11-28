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
                <td>${beacon.user_id}</td>
                <td>${beacon.interact}</td>
                <td>${beacon.details}</td>
            </tr>
        `);
    });


})();