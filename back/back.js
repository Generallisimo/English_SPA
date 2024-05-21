const fastify = require('fastify')({logger: true});

const mysqlConnection = require('./components/db/mysql.js').getConnection()
const buttonForm = require('./components/core/getDataUsers.js')

fastify.post('/api/form', async (request, reply)=>{
    let result = await buttonForm.FromData(mysqlConnection, request.body)
    reply.code(result ? 200 : 400).send({message: result})
})


fastify.listen({ port: 2000}, async function (err) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
});