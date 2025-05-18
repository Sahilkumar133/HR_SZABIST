const Location_URL = "https://fluffy-space-sniffle-7vg6j7wgwrxcrx6g-6006.app.github.dev/locations";
fetch(Location_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch Locations Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#locations_table tbody");
    data.forEach(location=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${location.location_id}</td>
        <td>${location.street_address}</t>
        <td>${location.postal_code}</td>
        <td>${location.city}</td>
        <td>${location.state_province}</td>
        <td>${location.country_id}</td>
        



        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);
});