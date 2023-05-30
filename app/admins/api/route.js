import mysql from 'mysql2/promise' //mysql module  is imported fro mysql2 package and create promise based connection.
import { NextResponse} from 'next/server' // NextResponse is used to construct HTTP responses in Next.js apps

export async function GET (){ // GET is an asynchronous function indicating that it can perform asynchronus operations like connecting to a database and executing queries.
    const dbconnection = await mysql.createConnection({
        host:'localhost',
        database: 'ip telephony',
        user : 'root', 
    })
    const query = 'select * from telephoneadmin' // it is an sql query string which selects all rows from the "telephoneadmin" table.
    const values = [] // can be used to pass values to parameterised queries
    const[results] = await dbconnection.execute(query,values) // dbconnection function is used to execute the sql query with provided values. the destructing assignment is used to extract the first element of th returned arraey, which contains the results rows. 
    return NextResponse.json({results:results}) // Next response object is created using NextResponse .json and the result is passed as an object {results : results}
    console.log(results) //console.log statement is called  with the rselts variable although it is not executed because it is placed after return statement.
    dbconnection.end() //this function is called to end the database connection.