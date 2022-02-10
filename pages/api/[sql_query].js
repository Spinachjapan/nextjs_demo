
export default async function sql_query({query: {sql_query}}, res){

    const db = require('./db')
    const result = await db.query(sql_query)

    res.statusCode = 200

    res.json(result)


    




}

