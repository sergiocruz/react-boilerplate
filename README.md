# ReactJS server-side boilerplate
I love how React allows you render apps on the server and have the client take on from where the server left it.
My goal for this project is to have a lean boilerplate so I can use it to start my next ReactJS apps.

## Tech stack

This project relies on the following technologies:
- [ReactJS](https://github.com/facebook/react)
- [react-route](https://github.com/rackt/react-router)
- [node-jsx](https://github.com/petehunt/node-jsx)
- [express](https://github.com/strongloop/express)  
- [ejs](https://github.com/tj/ejs)


## How to get started
1. You will need `bower` install globally before starting: `npm install bower -g`

2. Clone this repo, `cd` into the repo directory and run: `npm install && bower install`

3. Run `npm start` and navigate to `http://localhost:8080` on your browser

_Attention: this project will use your default `process.env.PORT` and will fall back to port `8080` in case it is not set._

## TODOS:
- [x] Handle `NotFound` cases with react-route
- [x] Make sure server-side will return a `404 http status` with invalid requests
- [ ] Establish a clear way to rehydrate app state after client kicks in
- [ ] Implement ~~[react-async](https://github.com/andreypopp/react-async)~~ [webpack](https://www.npmjs.com/package/webpack) so client doesn't have to downlaod the js all at once - Issue #4
- [x] Find good isomorphic/browserified `request` library for API requests: [superagent](https://github.com/visionmedia/superagent) is our guy!

### Suggestions?
Do you have any suggestions on how this project could be better?
[Feel free to open an issue](https://github.com/sergiocruz/react-boilerplate/issues/new) and let's discuss it :)
