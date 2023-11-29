// setup stats page
(async function () {
    // get stats
    const stats = await fetch(`${root}/stats/get.php`)
        .then(response => response.json());

    // for every stat
    stats.forEach(stat => {
        // add to table
        document.querySelector("#statsTable tbody").insertAdjacentHTML('beforeend', `
            <tr>
                <td>${stat._id.$oid}</td>
                <td>${stat.beacon_id}</td>
                <td>${stat.user_id}</td>
                <td>${stat.interact}</td>
                <td>${stat.details}</td>
            </tr>
        `);
    });


})();