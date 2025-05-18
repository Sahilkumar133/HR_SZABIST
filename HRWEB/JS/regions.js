const regions_URL = "https://fluffy-space-sniffle-7vg6j7wgwrxcrx6g-6006.app.github.dev/regions";
fetch(regions_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch regions Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#regions_table tbody");
    data.forEach(regions=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${regions.region_id}</t>
        <td>${regions.region_name}</td>
       

        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);
});