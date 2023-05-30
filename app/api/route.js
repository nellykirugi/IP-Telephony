import mysql from 'mysql2/promise'
import { NextResponse} from 'next/server'

export async function GET (){
    const dbconnection = await mysql.createConnection({
        host:'localhost',
        database: 'ip telephony',
        user : 'root', 
    })
    const query = 'select * from trialexcel'
    const values = []
    const[results] = await dbconnection.execute(query,values)
    return NextResponse.json({results:results})
    console.log(results)
    dbconnection.end()
}