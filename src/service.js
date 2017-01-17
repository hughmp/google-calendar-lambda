const request = require('superagent');

const { baseUrl, calendarIds, resource, apiKey } = require('./config.js');

module.exports = () => (
  Promise.all(
    calendarIds.map(cal => (
      request
        .get(`${baseUrl + cal.id + resource}`)
        .query({ key: apiKey })
        .then(res => {
          const dates = res.body.items
            .filter(item => item.status === 'confirmed')
            .map(item => item.start.date);
          const obj = {};
          obj[cal.description] = dates;
          return obj;
        })
    ))
  )
  .then(res => (
    res.reduce((prev, next) =>
      Object.assign({}, prev, next)
    ))
  )
);
