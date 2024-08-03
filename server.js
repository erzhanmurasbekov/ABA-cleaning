const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Handle form submission
app.post("/send-email", (req, res) => {
  const {
    userName,
    userSurname,
    userTel,
    userEmail,
    userDate,
    userTime,
    userLocation,
    userComment,
  } = req.body;

  const mailOptions = {
    from: "murasbekov.e@gmail.com",
    to: "erzhanmurasbekov@gmail.com",
    subject: "New Cleaning Service Request",
    text: `
            Name: ${userName} ${userSurname}
            Phone: ${userTel}
            Email: ${userEmail}
            Date: ${userDate}
            Time: ${userTime}
            Location: ${userLocation}
            Comment: ${userComment}
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending email");
    }
    res.status(200).send("Email sent successfully");
  });
});

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
