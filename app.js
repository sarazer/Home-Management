var express = require('express');
var mysql = require('mysql');

var app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'HomeDB'
});

con.connect((err) => {
    if (err) {
        console.log("Can not connect to DB");
        console.log(err);

        return;
    }
    console.log('Connected');
});

app.use(express.static('dist/HomeDB'));

app.get('/member', (req, res) => {
    con.query(`select * from members`, (err, rows) => {
        if (err)
            console.log(err);
        else
            console.log(rows);
        res.send(rows);
    });
});


app.get('/task', (req, res) => {
    con.query(`SELECT task.taskDesc, task.taskDate, members.memberNickname 
    FROM task 
    INNER JOIN members ON task.memberId = members.memberId`,(err, data) => {
            if (err) {
                console.log(err);
                res.send(400, err);
            }
            else {
                console.log(data);
                res.send(data);
            }
        });
});

app.post('/addtask', (req, res) => {
    con.query(`INSERT INTO task(taskDesc, taskDate, memberId) VALUES ('${req.body.task}', DATE(NOW()),'${req.body.member}')`,
        (err, data) => {
            if (err) {
                console.log(err);
                res.send(400, err);
            }
            else {
                console.log(data);
                res.send(data);
            }
        });
});

app.listen(8080, () => {
    console.log('8080 is ready');
});

