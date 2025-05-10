const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


app.get('/', async (req, res) => {
    try{
        res.json('Welcome to HR API')
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 40*/

app.get('/employees', async (req, res) => {
    try{
        const result = await pool.query('select  e.employee_id,e.first_name, e.last_name,d.department_id,d.department_name,l.location_id,c.country_id,r.region_id from employees e inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id inner join countries c on l.country_id = c.country_id  inner join regions r on c.region_id = r.region_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 41*/

app.get('/jh&emp', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date from job_history jh inner join employees e on jh.employee_id = e.employee_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})



/*q 42 */
app.get('/emp&jh', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date from employees e inner join job_history jh on e.employee_id = jh.employee_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 43*/
app.get('/emp&jh&dep', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from employees e inner join job_history jh on e.employee_id = jh.employee_id  inner join  departments d on e.department_id = d.department_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


/*q 44*/
app.get('/emp&jh&dep&loc', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from employees e inner join job_history jh on e.employee_id = jh.employee_id  inner join  departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 45*/
app.get('/emp&jh&cou', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from employees e inner join job_history jh on e.employee_id = jh.employee_id  inner join  departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id  inner join countries c on l.country_id = c.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 46*/
app.get('/jh&emp&dep', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outerjoin  departments d on jh.department_id = ddepartment_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 47*/
app.get('/jh&emp&job', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 48*/
app.get('/jh&emp&job&dep', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 49*/
app.get('/jh&emp&job&loc', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name,l.location_id,city,postal_code from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 50*/
app.get('/jh&emp&job&cou', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name,l.location_id,city,postal_code,c.country_id,c.country_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id inner join locations l on d.location_id = l.location_id  inner join countries c on l.country_id = c.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


/*q 51*/
app.get('/reg&cou&loc', async (req, res) => {
    try{
        const result = await pool.query('select r.region_id,r.region_name, c.country_id,c.country_name,l.location_id,l.postal_code,l.city from regions r inner join countries c on r.region_id = c.region_id inner join locations l on c.country_id =l.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 52*/
app.get('/cou&reh&loc', async (req, res) => {
    try{
        const result = await pool.query('select r.region_id,r.region_name, c.country_id,c.country_name,l.location_id,l.city from countries c inner join regions r on c.region_id = r.region_id inner join locations l on c.country_id =l.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


/*q 53*/
app.get('/emp-count', async (req, res) => {
    try{
        const result = await pool.query('select r.region_id,r.region_name, c.country_id,c.country_name,l.location_id,l.postal_code,l.city from regions r inner join countries c on r.region_id = c.region_id inner join locations l on c.country_id =l.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 54*/
app.get('/dep&emp&loc', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,d.department_id, d.department_name,l.state_province, l.location_id,l.city  from employees e inner join    departments d on  e.department_id = d.department_id inner join   locations l on d.location_id =l.location_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 55*/

app.get('/emp&dep&loc&cou', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,d.department_id, d.department_name,l.state_province, l.location_id,l.city ,c.country_id,c.country_name from employees e inner join departments d on  e.department_id = d.department_id inner join locations l on d.location_id = l.location_id inner join countrieson  l.country_id = c.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 56*/
app.get('/emp&man&dep&loc', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name, e.last_name, m.first_name as manager_first, m.last_name as manager_last, d.department_name, l.city from employees e left join employees m on e.manager_id = m.employee_id join departments d on e.department_id =d.department_id join locations l on d.location_id = l.location_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
   
/*q 57*/
app.get('/emp&job&dep&loc', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name, e.last_name, j.job_title, d.department_name, l.city from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 58*/
app.get('/emp&job&dep&man', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name, e.last_name, j.job_title, d.department_name, l.city from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 59*/
app.get('/emp&job&dep&man&loc', async (req, res) => {
    try{
        const result = await pool.query('select e.first_name, e.last_name, j.job_title, d.department_name,m.first_name as manager_first, m.last_name as manager_last,l.city from employees e join jobs j on e.job_id = j.job_id join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id left join employees m on e.manager_id = m.employee_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 60*/

app.get('/cou_rid1', async (req, res) => {
    try{
        const result = await pool.query('select country_name,country_id,region_id from countries where region_id = 1')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})


/*ending code*/

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Connection Successfully on port = ${port}`)
})