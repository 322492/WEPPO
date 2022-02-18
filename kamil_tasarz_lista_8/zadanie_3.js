var mssql = require('mssql')

async function main() {
    var conn = new mssql.ConnectionPool(
        'server=localhost,1433;database=zad23;user id=kamtas;password=12345;Trusted_Connection=True;TrustServerCertificate=True;',
    )
    try {
        await conn.connect()
        var request = new mssql.Request(conn)

        await request.query( `insert into Parent (ParentName) values ('dodany z apki');`); //dodanie rekordu
        await request.query( `update Parent set ParentName = 'zaktualizowany' where ID=5;`); //aktualizacja rekordu
        await request.query( `delete from Parent where ID>7;`); //aktualizacja rekordu

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
