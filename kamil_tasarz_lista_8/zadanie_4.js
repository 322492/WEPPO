var mssql = require('mssql')

class ParentRepository {
    constructor(conn) {
        this.conn = conn;
    }
    async retrieve(work_id = null) {
        try {
            var req = new mssql.Request(this.conn);
            if (work_id) req.input('work_id', work_id);
            var res = await req.query('select * from OSOBA' + (work_id ? 'where ID_MIEJSCE_PRACY =@work_id' : '') );
            return work_id ? res.recordset[0] : res.recordset;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async add_miejsce_pracy(opis) {
        if (!opis) return;
        try {
            var req = new mssql.Request(this.conn);
            req.input("Opis", opis);
            var res = await req.query('insert into MIEJSCE_PRACY (Opis) values(@Opis) select scope_identity() as id');
            return res.recordset[0].id;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    async add_osoba(name, work_id) {
        if (!name || !work_id) return;
        try {
            var req = new mssql.Request(this.conn);
            req.input("Name", name);
            req.input("Work_id", work_id);
            var res = await req.query('insert into OSOBA (Name, ID_MIEJSCE_PRACY) values(@Name, @Work_id) select scope_identity() as id');
            return res.recordset[0].id;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function main() {
    var conn = new mssql.ConnectionPool('server=localhost,1433;database=zad4;user id=kamtas;password=12345;Trusted_Connection=True;TrustServerCertificate=True;')
    try {
        await conn.connect();
        var repo = new ParentRepository(conn);

        var work_id = await repo.add_miejsce_pracy('miejsce1');
        console.log('identyfikator nowo wstawionego rekordu', JSON.stringify(work_id));

        var osoba = await repo.add_osoba('name1', work_id);
        console.log("dodano osobę o id nr:", osoba);
        osoba = await repo.add_osoba('name2', work_id);
        console.log("dodano osobę o id nr:", osoba);
        osoba = await repo.add_osoba('name3', work_id);
        console.log("dodano osobę o id nr:", osoba);

        var work_id = await repo.add_miejsce_pracy('miejsce2');
        console.log('identyfikator nowo wstawionego rekordu', JSON.stringify(work_id));

        var osoba = await repo.add_osoba('druga1', work_id);
        console.log("dodano osobę o id nr:", osoba);
        osoba = await repo.add_osoba('druga2', work_id);
        console.log("dodano osobę o id nr:", osoba);

        var items = await repo.retrieve();
        items.forEach(e => {
            console.log(JSON.stringify(e));
        });

    }
    catch (err) {
        if (conn.connected)
            conn.close();
        console.log(err);
    }
}
main();