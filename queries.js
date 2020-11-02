const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'ec2-176-34-114-78.eu-west-1.compute.amazonaws.com',
  database: 'dboj67gvb3ceru',
  user:'voctcgiivzllur',
  password: '36710cd46953b6c3f81779fe425b5b88164bce9b0c0278e7b71d7c1624093f26',
  port: 5432,
  ssl:{ rejectUnauthorized: false },
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM public.table', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public.table WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
  getUserById  
}