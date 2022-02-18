var mssql = require('mssql')

async function main() {
    var conn = new mssql.ConnectionPool(
        'server=localhost,1433;database=zad23;user id=kamtas;password=12345;Trusted_Connection=True;TrustServerCertificate=True;',
    )
    try {
        await conn.connect()
        var request = new mssql.Request(conn)
        var id = await request.query( `insert into Parent (ParentName) values ('dodany z apki'); SELECT SCOPE_IDENTITY(); `);
        //console.log(id: ", JSON.stringify(id))
        console.log("Nowo nadany id to numer: ", id.recordset[0][""])
        var result = await request.query('select * from Parent')
        result.recordset.forEach((r) => {
            console.log(`${r.ID} ${r.ParentName}`)
        })
        await conn.close()
    } catch (err) {
        if (conn.connected) conn.close()
        console.log(err)
    }
}
main()
