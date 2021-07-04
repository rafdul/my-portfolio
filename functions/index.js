const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")({origin: true});
const formData = require("express-form-data");
const emailValidator = require("email-validator");
const nodemailer = require("nodemailer");
// require("dotenv").config();

const app = express();
app.use(express.json());
app.use(formData.parse());
// app.use(express.urlencoded({extended: false}));
app.use(cors);

app.get("/", (req, res) => {
  res.send("<h1>Server for My-Portfolio</h1>");
});

app.get("/test", (req, res) => {
  res.send("<h1>Test of My-Portfolio: https://duluk-portfolio.web.app/test</h1>");
});

app.get("/fromform", (req, res) => {
  res.send("<h1>page from form</h1>");
});

app.post("/fromform", (req, res) => {
  // obiekt który zwracam
  const returnObj = {};
  console.log("dane z formularza:", req.body);
  // console.log('req.body.message.length:',req.body.message.length)
  // ustawiam nagłówek dla zwrotki
  res.setHeader("Content-Type", "application/json");

  // sprawdzam dane ktore przyszly z formularza
  if (!emailValidator.validate(req.body.email)) {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("email");
  }

  if (req.body.name === undefined || req.body.name === "") {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("name");
  }

  if (
    req.body.message === undefined ||
    req.body.message === "" ||
    req.body.message.length >= 500
  ) {
    if (!returnObj.errors) returnObj.errors = [];
    returnObj.errors.push("message");
  }

  if (returnObj.errors) {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(returnObj));
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

    const mail = {
      from: "'MyPortfolio' <duleq@op.pl>",
      to: "duleq@op.pl",
      subject: `Wiadomość ze strony portfolio od ${req.body.email}`,
      text: `
        Imię: ${req.body.name}
        Email: ${req.body.email}
        Tytuł: ${req.body.title}
        Wiadomość: ${req.body.message}
      `,
      html: `
        <html>
          <head>
              <meta charset="utf-8">
          </head>
          <body>
              <div> Imię: ${req.body.name} </div>
              <div>
              Email:
              <a href="mailto:${req.body.email}">
                ${req.body.email}
              </a>
              </div>
              <div> Tytuł: </div>
              <div> Wiadomość: ${req.body.title}</div>
              <div> ${req.body.message} </div>
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
      console.log("returnObj", returnObj);
      res.send(JSON.stringify(returnObj));
    });
  }
});

// app.use((req, res) => {
//   res.status(404).send("404 not found...");
// });

exports.api = functions.https.onRequest(app);
