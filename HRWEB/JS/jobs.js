const jobs_URL = "https://fluffy-space-sniffle-7vg6j7wgwrxcrx6g-6006.app.github.dev/jobs";
fetch(jobs_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch jobs Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#jobs_table tbody");
    data.forEach(jobs=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${jobs.job_id}</t>
        <td>${jobs.job_title}</td>
        <td>${jobs.min_salary}</td>
        <td>${jobs.max_salary}</td>
        


        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);
});