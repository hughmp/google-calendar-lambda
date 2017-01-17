const getEvents = require('./service');

module.exports.myHander = (event, context, callback) => (
  getEvents().then(res =>
    callback(res)
  )
);

getEvents().then(res => console.log(res));
