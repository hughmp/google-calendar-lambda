### How to use  

1. Clone this repo  

`git clone https://github.com/hughmp/google-calendar-lambda.git`  
`cd google-calendar-lambda`  

2. Install the dependencies  

`yarn` or `npm i`  

3. Install apex and configure aws explained [here](http://apex.run/)  

4. Export your aws profile `export AWS_PROFILE=XXXXX` (in Windows use `set`)  

5. Add your google calendar IDs into `config.js` in `functions/getBookings/src/`  

5. Run `apex deploy -s GOOGLE_API_KEY=[INSERT YOUR GOOGLE API KEY HERE]`  

6. Test your function `apex invoke getBookings`  

7. You can now link an AWS `API Gateway` to invoke over HTTP  