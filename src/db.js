import pg from 'pg';

export const dbClient = new pg.Pool({
    host: "angel-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com",
    user: "postgres",
    password: "Password.123",
    database: "todo",
    port: 5432,
    //Solo para AWS
    ssl: {
        rejectUnauthorized: false
    }
});

/*
const client = await dbClient.connect();
const {rows} = await client.query("SELECT NOW() as Fecha, 1 as DummyColumn");
console.log(rows[0]);
client.release();*/

//export default dbClient ;