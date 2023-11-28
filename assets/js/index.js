// setup users page
(async function () {
    // get users
    const users = await fetch(`${root}/users/get.php`)
        .then(response => response.json());

    // for every user
    users.forEach(user => {
        // add to table
        document.querySelector("#usersTable tbody").insertAdjacentHTML('beforeend', `
            <tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td>${user.gender}</td>
                <td>${user.major}</td>
                <td>${user.role}</td>
            </tr>
        `);
    });


})();