// root request url (local + prod)
//const root = 'http://localhost:3000';
const root = 'https://inst490-455887a80ae4.herokuapp.com';

// submit all forms
document.querySelectorAll(".cardForm").forEach(form => {
    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        // start loading
        this.querySelector("button").classList.add("loading");

        // create formdata
        const formData = new FormData(this);

        // action attribute
        const action = this.getAttribute("action");

        // submit to method relative to root
        const response = await fetch(`${root}${action}`, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json());

        // stop loading
        this.querySelector("button").classList.remove("loading");

        // check for errors
        if (response.error) {
            await Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.error,
            });
            return;
        }

        // show success
        await Swal.fire({
            icon: 'success',
            title: 'Success!'
        });

        // reload
        location.reload();

    });
});