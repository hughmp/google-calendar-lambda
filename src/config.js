const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/'
 , calendarIds = [
   {
     id: 'mfisog8jekeanmjkcrpv8lrmjo@group.calendar.google.com',
     description: 'matungou1'
   },
   {
     id: 'mfisog8jekeanmjkcrpv8lrmjo@group.calendar.google.com',
     description: 'matungou2'
   }
 ]
 , resource = '/events'
 , apiKey = process.env.GOOGLE_API_KEY;

// baseUrl: 'http://httpbin.org/get'

module.exports = { baseUrl, calendarIds, resource, apiKey };
