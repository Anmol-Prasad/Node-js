const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(
    `${__dirname}/starter/dev-data/data/tours-simple.json`,
    'utf-8'
  )
);

app.get('/api/v1/tours/:id', (req, res) => {
  // console.log(req.params);
  const id = req.paramas.id * 1;
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
});

// app.post('/api/v1/tours', (req, res) => {
//   const newid = tours[tours.length - 1].id + 1;
//   // console.log(newid);
//   const newtour = Object.assign({ id: newid }, req.body);

//   tours.push(newtour);

//   fs.writeFile(
//     `${__dirname}/starter/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tours: newtour,
//         },
//       });
//     }
//   );
// });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
