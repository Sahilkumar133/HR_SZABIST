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
        const result = await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  departments d on jh.department_id = d.department_id limit 5')
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
app.get('/loc&cou&reg', async (req, res) => {
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
        const result = await pool.query('select e.first_name, e.last_name, d.department_name, l.city, c.country_name from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 5')
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


/*q 61*/

app.get('/dep&cityN', async (req, res) => {
    try{
        const result = await pool.query("Select d.department_id, d.department_name, l.city from departments d join locations l on d.location_id = l.location_id where lower(l.city) like 'n%' limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
/*q 62*/
app.get('/emp&ct', async (req, res) => {
    try{
        const result = await pool.query('select e.employee_id, e.first_name, e.last_name,d.department_id,e.manager_id,e.commission_pct from employees e inner join departments d on  e.department_id = d.department_id inner join employees m on d.manager_id = m.employee_id  where m.commission_pct >  0.15 limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 63*/
app.get('/job&man', async (req, res) => {
    try{
        const result = await pool.query('select DISTINCT m.employee_id, m.first_name, m.last_name, m.email, m.job_id,m.manager_id  frOM employees e JOIN employees m ON e.manager_id = m.employee_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 64*/
app.get('/loc&couaAsia', async (req, res) => {
    try{
        const result = await pool.query("Select l.postal_code, c.country_name, r.region_name from locations l join countries c on l.country_id = c.country_id join regions r on c.region_id = r.region_id where r.region_name = 'Asia' limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 65*/
app.get('/dep&emp&cp', async (req, res) => {
    try{
        const result = await pool.query('select  d.department_name ,d.department_id FROM employees e JOIN departments d ON e.department_id = d.department_id WHERE e.commission_pct < (SELECT AVG(commission_pct) FROM employees) limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 66*/
app.get('/job&emp&sala', async (req, res) => {
    try{
        const result = await pool.query('SELECT DISTINCT j.job_title FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.salary > (SELECT AVG(e2.salary)FROM employees e2 WHERE e2.department_id = e.department_id)')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 67*/

app.get('/emp&depnull', async (req, res) => {
    try{
        const result = await pool.query('select employee_id from employees where department_id is null')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 68*/
app.get('/emp&jobposi', async (req, res) => {
    try{
        const result = await pool.query('SELECT e.first_name, e.last_name FROM employees e WHERE EXISTS ( SELECT 1 FROM job_history jh WHERE jh.employee_id = e.employee_id GROUP BY jh.employee_id HAVING COUNT(*) > 1) limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 69*/
app.get('/emp-count', async (req, res) => {
    try{
        const result = await pool.query('Select department_id, count(department_id) as dept_count from employees group by department_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})
 /*q 70*/
 app.get('/totalsalary', async (req, res) => {
    try{
        const result = await pool.query('select job_id, sum(salary) as total_salary from employees group by job_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 71*/
app.get('/avg_cm', async (req, res) => {
    try{
        const result = await pool.query('select department_id, avg(commission_pct) as avg_commission from employees group by department_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 72 a*/
app.get('/max_sal', async (req, res) => {
    try{
        const result = await pool.query('select c.country_id, max(e.salary) as max_salary from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id group by c.country_id limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 72 b*/
app.get('/emp_z', async (req, res) => {
    try{
        const result = await pool.query("select e.first_name, e.last_name, d.department_name, l.city, l.state_province from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id where lower(e.first_name) like '%z%' limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 73*/
app.get('/job&emp&date', async (req, res) => {
    try{
        const result = await pool.query("select j.job_title, d.department_name, concat(e.first_name , ' ' , e.last_name)as full_name, jh.start_date from job_history jh join employees e on jh.employee_id = e.employee_id join jobs j on jh.job_id = j.job_id join departments d on jh.department_id= d.department_id where jh.start_date >= '1993-01-01' and jh.end_date <= '1997-08-31'Limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 74*/
app.get('/cou&city&dep', async (req, res) => {
    try{
        const result = await pool.query('select c.country_name, l.city, count(d.department_id) as department_count from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id group by c.country_name, l.city having count(e.employee_id) >= 2 limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 75*/
app.get('/without_com', async (req, res) => {
    try{
        const result = await pool.query("select concat(e.first_name, ' ' ,e.last_name )as full_name, j.job_title,jh.start_date, jh.end_date from employees e join job_history jh on e.employee_id = jh.employee_id join jobs j on jh.job_id = j.job_id where e.commission_pct is null and jh.end_date = (select max(jh2.end_date) from job_history jh2 where jh2.employee_id = e.employee_id) limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 76*/
app.get('/emp_work', async (req, res) => {
    try{
        const result = await pool.query("select concat(e.first_name, ' ' ,e.last_name ) as full_name, e.employee_id,c.country_name from employees e join departments d on e.department_id = d.department_id join locations l on d.location_id = l.location_id join countries c on l.country_id = c.country_id limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 77*/
app.get('/earn_salary', async (req, res) => {
    try{
        const result = await pool.query('select first_name, last_name, salary, department_id from employees where salary in (select min(salary) from employees group by department_id) limit 5')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 78*/
app.get('/third_high', async (req, res) => {
    try{
        const result = await pool.query('select * from employees where salary = ( select distinct salary from employees order by salary desc offset 2 rows fetch next 1 row only )')
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 79*/
app.get('/empj', async (req, res) => {
    try{
        const result = await pool.query("select e.employee_id, concat(e.first_name,' ' ,e.last_name) as full_name, e.salary from employees e where salary > (select avg(salary) from employees) and department_id in ( select department_id from employees where first_name like '%j%' or last_name like '%j%') limit 5")
        res.json(result.rows);
    } catch(error) {
        res.status(500).json({Error: error.message})
    }
})

/*q 80*/
app.get('/toronto', async (req, res) => {
    try{
        const result = await pool.query("SELECT CONCAT(e.first_name, ' ', e.last_name) AS full_name, e.employee_id, j.job_title FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN jobs j ON e.job_id = j.job_id WHERE l.city = 'Toronto' ")
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