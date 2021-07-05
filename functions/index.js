const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors")({origin: true});
const formData = require("express-form-data");
const emailValidator = require("email-validator");
const nodemailer = require("nodemailer");
// require("dotenv").config();
const bodyParser = require("body-parser");

admin.initializeApp();

const app = express();
app.use(express.json());
app.use(formData.parse());
app.use(express.urlencoded({extended: true}));
app.use(cors);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Server for My-Portfolio</h1>");
});

app.get("/test", (req, res) => {
  console.log("test endpoint /test");
  res.send("<h1>Test of My-Portfolio</h1>");
});

app.get("/fromform", (req, res) => {
  console.log("test endpoint /fromform");
  res.send("<h1>page from form</h1>");
});

app.post("/fromform", (req, res) => {
  // obiekt który zwracam
  const returnObj = {};
  const fromJSON = JSON.parse(req.body);

  console.log("dane z formularza w JSON:", req.body);
  console.log("dane parsowane z JSON", fromJSON);
  console.log("fromJSON 0:", fromJSON[0]);
  console.log("fromJSON 1:", fromJSON[1]);
  console.log("fromJSON 2:", fromJSON[2]);
  console.log("fromJSON 3:", fromJSON[3]);
  // ustawiam nagłówek dla zwrotki
  // res.setHeader("Content-Type", "application/json");

  // sprawdzam dane ktore przyszly z formularza
  if (!emailValidator.validate(fromJSON[1])) {
    if (!returnObj.errors) returnObj.errors = [];
    console.log("walidacja email");
    returnObj.errors.push("email");
  }

  if (fromJSON[0] === undefined || fromJSON[0] === "") {
    if (!returnObj.errors) returnObj.errors = [];
    console.log("walidacja name");
    returnObj.errors.push("name");
  }

  if (
    fromJSON[3] === undefined ||
    fromJSON[3] === "" ||
    fromJSON[3] >= 500
  ) {
    if (!returnObj.errors) returnObj.errors = [];
    console.log("walidacja message");
    returnObj.errors.push("message");
  }

  if (returnObj.errors) {
    // res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(returnObj));
    console.log("returnObj66:", returnObj);
  } else {
    const transporter = nodemailer.createTransport({
      host: "smtp.poczta.onet.pl",
      port: 465,
      secure: true,
      auth: {
        user: "duleq@op.pl",
        pass: "LE.gia.1916",
      },
    });
    // console.log("transporter", transporter);

    const mail = {
      from: "'MyPortfolio' <duleq@op.pl>",
      to: "duleq@op.pl",
      subject: "Wiadomość ze strony portfolio",
      text: `
        test: testariusz
        Imię: ${fromJSON[0]}
        Email: ${fromJSON[1]}
        Tytuł: ${fromJSON[2]}
        Wiadomość: ${fromJSON[3]}
      `,
      html: `
        <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <div> Imię: ${fromJSON[0]} </div>
              <div>
              Email:
              <a href="mailto:${fromJSON[1]}">
                ${fromJSON[1]}
              </a>
              </div>
              <div> Tytuł: ${fromJSON[2]}</div>
              <div> Wiadomość:</div>
              <div> ${fromJSON[3]} </div>
          </body>
        </html>
      `,
    };

    transporter.sendMail(mail, (error, info) => {
      if (error) {
        console.log("Email sent ERROR: " + error);
        returnObj.status = "error";
        res.status(404);
      } else {
        console.log("Email sent SUCCESS: " + info.response);
        returnObj.status = "ok";
        res.status(200);
        // console.log('res', res)
      }
      console.log("returnObj121:", returnObj);
      res.send(JSON.stringify(returnObj));
    });
  }
});

app.use((req, res) => {
  res.status(404).send("404 not found...");
});

exports.api = functions.https.onRequest(app);
