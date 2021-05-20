// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side !!', appName: 'Natours' });
// });
// app.post('/', (req, res) => {
//   res.send('This is a post..');
// });

// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length,
//     data: {
//       tours: tours,
//     },
//   });
// });

// co
const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/starter/dev-data/data/tours-simple.json`)
);

app.post('/api/v1/tours', (req, res) => {
  const newid = tours[tours.length - 1].id + 1;
  console.log(newid);
  // const newtour = Object.assign({ id: newid }, req.body);

  // tours.push(newtour);

  // fs.writeFile(
  //   `${__dirname}/starter/dev-data/data/tours-simple.json`,
  //   JSON.stringify(tourist),
  //   (err) => {
  //     res.status(201).json({
  //       status: 'success',
  //       data: {
  //         tours: newtour,
  //       },
  //     });
  //   }
  // );
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
