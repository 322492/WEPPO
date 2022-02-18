var mssql = require('mssql')

class ParentRepository {
    constructor(conn) {
        this.conn = conn;
    }
    async retrieve_all() {
        try {
            var req = new mssql.Request(this.conn);
            var res = await req.query('SELECT OSOBA.Name, MIEJSCE_PRACY.Opis FROM AUX JOIN OSOBA ON OSOBA.ID = ID_1 JOIN MIEJSCE_PRACY ON MIEJSCE_PRACY.ID = ID_2');
            return res.recordset;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async retrieve_osoba(name) { //zwraca miejsca pracy osoby o imieniu name
        try {
            var req = new mssql.Request(this.conn);
            req.input('Name', name);
            var id = await req.query('SELECT OSOBA.ID FROM OSOBA WHERE OSOBA.Name = @Name');
            id = id.recordset[0]["ID"];
            var res = await req.query(`SELECT MIEJSCE_PRACY.Opis FROM AUX JOIN MIEJSCE_PRACY ON ID_1 = ${id} AND MIEJSCE_PRACY.ID = ID_2`);
            return res.recordset;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async retrieve_praca(work) { //zwraca osoby pracujace w miescu work
        try {
            var req = new mssql.Request(this.conn);
            req.input('Work', work);
            var id = await req.query('SELECT ID FROM MIEJSCE_PRACY WHERE Opis = @Work')
            id = id.recordset[0]["ID"];
            var res = await req.query(`SELECT OSOBA.Name FROM AUX JOIN OSOBA ON ID_2 = ${id} AND OSOBA.ID = ID_1`);
            return res.recordset;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
    async add_new_miejsce_pracy(opis) {
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
    async add_new_osoba(name) {
        if (!name) return;
        try {
            var req = new mssql.Request(this.conn);
            req.input("Name", name);
            var res = await req.query('insert into OSOBA (Name) values(@Name) select scope_identity() as id');
            return res.recordset[0].id;
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
    async assign_osoba_to_miejsc_pracy(osoba_id, work_id) {
        if (!osoba_id || !work_id) return;
        try {
            var req = new mssql.Request(this.conn);
            req.input("Osoba_id", osoba_id);
            req.input("Work_id", work_id);
            await req.query('insert into AUX (ID_1, ID_2) values(@Osoba_id, @Work_id)');
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}

async function main() {
    var conn = new mssql.ConnectionPool('server=localhost,1433;database=zad5;user id=kamtas;password=12345;Trusted_Connection=True;TrustServerCertificate=True;')
    try {
        await conn.connect();
        var repo = new ParentRepository(conn);

        var work1 = await repo.add_new_miejsce_pracy('miejsce1');
        var work2 = await repo.add_new_miejsce_pracy('miejsce2');
        var work3 = await repo.add_new_miejsce_pracy('miejsce3');
        var osoba1 = await repo.add_new_osoba('name1');
        var osoba2 = await repo.add_new_osoba('name2');
        var osoba3 = await repo.add_new_osoba('name3');

        await repo.assign_osoba_to_miejsc_pracy(osoba1, work1);
        await repo.assign_osoba_to_miejsc_pracy(osoba1, work2);
        await repo.assign_osoba_to_miejsc_pracy(osoba1, work3);
        await repo.assign_osoba_to_miejsc_pracy(osoba2, work2);
        await repo.assign_osoba_to_miejsc_pracy(osoba2, work3);
        await repo.assign_osoba_to_miejsc_pracy(osoba3, work3);

        var items = await repo.retrieve_all();
        items.forEach(e => {
            console.log(JSON.stringify(e));
        });
        console.log("\n");
        var items = await repo.retrieve_osoba('name1');
        items.forEach(e => {
            console.log(JSON.stringify(e));
        });
        console.log("\n");
        var items = await repo.retrieve_praca('miejsce2');
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