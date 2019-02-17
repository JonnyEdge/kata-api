# Kata API Challenge

Practising the basics of [Express](https://expressjs.com/) by configuring an Express server to provide HTTP endpoints to sit in front of my [JavaScript Basics](https://github.com/JonnyEdge/javascript-basics) kata solutions.

MCR Codes provided an end-to-end test suite for this using [Mocha](https://mochajs.org) and [Chai](https://www.chaijs.com/). The challenge here was to configure their provided Express service and integrate my JavaScript Basics code to make the provided tests pass.

### Install
- Fork this repository
- `git clone git@github.com:<your-github-username>/kata-api.git`
- `npm install`

### Move over your JavaScript Basics code
Copy the `src` code from [my JavaScript Basics repository](https://github.com/JonnyEdge/javascript-basics) into a `lib` directory in this repositories `src` directory. You should end up with the following file structure in this project:
```
src
├── app.js
└── lib
    ├── arrays.js
    ├── booleans.js
    ├── numbers.js
    ├── objects.js
    └── strings.js
```

### Running the API
- `npm start` uses [Nodemon](https://github.com/remy/nodemon#nodemon) to run the development server with file-watch enabled.

### Running the Tests
- `npm test` uses [Mocha](https://mochajs.org) to run e2e tests defined in `tests` directory.
