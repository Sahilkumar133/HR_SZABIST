const job_history_URL = "https://fluffy-space-sniffle-7vg6j7wgwrxcrx6g-6006.app.github.dev/jhistory";
fetch(job_history_URL).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch job_history Data");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#job_history_table tbody");
    data.forEach(job_history=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${job_history.employee_id}</td>
        <td>${job_history.start_date}</t>
        <td>${job_history.end_date}</td>
        <td>${job_history.job_id}</td>
        <td>${job_history.department_id}</td>
     



        `;

        tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);
});