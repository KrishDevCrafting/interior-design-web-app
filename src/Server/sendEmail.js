// sendEmail.js
const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "krish77cooper@gmail.com",
    pass: "copper2004$",
  },
});

// Define the email options
const mailOptions = {
  from: "krish77cooper@gmail.com",
  to: "recipient-krish77cooper@gmail.com",
  subject: "Subject of the Email",
  text: "This is the content of the email.",
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
