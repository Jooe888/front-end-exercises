require('./tools/conn_mongo');
const Student = require('./modles/student');

// console.log(Student)

Student.find({}, '-_id -__v', (err, docs) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(docs);
});
