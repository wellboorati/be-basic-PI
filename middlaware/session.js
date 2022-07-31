// const session = require('express-session')

// const oneDay = 1000 * 60 * 60 * 24;


// const startSession = req => user => {
//   req.session.usuario = {
//     name: user.name,
//     email: user.email
//   }

//   req.session.save()
// }

// const validateSession = (req, res, next) => {
//   res.locals.isLogged = req.session && !!req.session.usuario
//   res.locals.user = req.session && req.session.usuario

//   req.startSession = startSession(req)

//   next()
// }

// // const configureSession = app => {
// //   app.set('trust proxy', 1) // trust first proxy
// //   app.use(
// //     session({
// //       secret: 'secret-app',
// //       resave: false,
// //       name: 'api-session-key',
// //       saveUninitialized: false
// //     })
// //   )


// app.use(sessions({
//   secret: "secret",
//   saveUninitialized:true,
//   cookie: { maxAge: oneDay },
//   resave: false
// }));

//   app.use(validateSession)
// }

// module.exports = {
//   configureSession
// }