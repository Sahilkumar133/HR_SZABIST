const country_URL = "https://fluffy-space-sniffle-7vg6j7wgwrxcrx6g-6006.app.github.dev/country";
fetch(country_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch Country Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");
    data.forEach(country=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${country.country_id}</td>
        <td>${country.country_name}</t>
        <td>${country.region_id}</td>
        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);
});