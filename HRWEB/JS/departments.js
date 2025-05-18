const departments_URL = "https://fluffy-space-sniffle-7vg6j7wgwrxcrx6g-6006.app.github.dev/departments";
fetch(departments_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch jobs Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#departments_table tbody");
    data.forEach(departments=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${departments.department_id}</t>
        <td>${departments.department_name}</td>
        <td>${departments.manager_id}</td>
        <td>${departments.location_id}</td>
        


        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);
});