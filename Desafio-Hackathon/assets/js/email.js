const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const porta = 443;

//Destino
app.get('/', (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5d011cd8a6b7c9",
      pass: "cf827e8d6799d0"
    }
  });


  // Rota para processar o envio do formulário
  app.post('/sendEmail', (req, res) => {
    // Extrair os dados do formulário
    const { name, email, phone, message } = req.body;

    // Configurar as opções de e-mail
    let mailOptions = {
      from: 'seu_email@seudominio.com',
      to: 'doecomamor@gmail.com', // E-mail institucional da sua plataforma
      subject: 'Nova mensagem de contato',
      text: Nome: ${ name }\nEmail: ${ email }\nTelefone: ${ phone }\n\n Mensagem: ${ message }
  };

  // Enviar o e-mail
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar o e-mail');
    } else {
      console.log('Email enviado: ' + info.response);
      res.status(200).send('E-mail enviado com sucesso');
    }
  });
});