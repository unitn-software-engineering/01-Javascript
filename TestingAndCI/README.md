# Testing and Continuous Integration

In today's class, we will see how to use Jest to test our APIs, how to set-up a continuous integration environment with Travis CI, and how to deploy our application on Heroku.




# Jest

https://jestjs.io/docs/en/getting-started.html

An example:

```javascript
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### Use Jest in our npm project:

Install Jest in develompment environment:

```shell
> npm install --save-dev jest
```

Configure `package.json` test command:

```javascript
"scripts": {
    "start": "node api.js",
    "test": "jest"
}
```

Also add this to activate coverage into your `package.json`:

```javascript
"jest": {
    "verbose": true,
    "collectCoverage": true
}
```

Launch:

```shell
> npm run test
```

### Additional reading on Jest:

- Mock Functions:

    https://jestjs.io/docs/en/mock-functions





# Travis CI

Register and connect your GitHub account on:

https://travis-ci.org/

Configure your repository to use Travis CI:

https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci-using-github

This includes the creation of file `.travis.yml`:

```javascript
language: node_js
```

Chech build status of your application on Travis CI.
Then include the "Build status image" into your repository, in the readme file.
Click on the "Build status image" on Travis CI Dashboard to get the image embedding link.
Example:

[![Build Status](https://travis-ci.org/marcorobol/is2-jest.svg?branch=master)](https://travis-ci.org/marcorobol/is2-jest)





# Heroku

https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true

1. Register on https://www.heroku.com/

1. Install Heroku CLI

    https://devcenter.heroku.com/articles/heroku-cli

1. CLI log in

    `heroku login`



### Prepare the application

https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment#

1. Create `Procfile`:

    https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment#3-add-a-procfile

    ```javascript
    web: node api.js
    ```

1. Set listening port of Node server:

    https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment#4-listen-on-the-correct-port

    ```javascript
    const PORT = process.env.PORT || 8080
    ```





### Create heroku app and connect with local repository.

https://devcenter.heroku.com/articles/git#creating-a-heroku-remote

1. Create app and add remote to local repository. In your repository call:

    `heroku create`

1. Alternatively, create a new app from the Heroku Dashboard and then manually add remote source to your local repository:

    With Heroku CLI: `heroku git:remote -a our-heroku-app`

1. Push repository on `heroku` remote
    
    `git push heroku main`

1. Start the Heroku app:

    `heroku ps:scale web=1`

1. Run the Heroku app locally through the Procfile:

    `heroku local web`

1. Open the deployed app:

    `heroku open`

1. View logs:

    `heroku logs --tail`





### Additional reading on Heroku:

- Deploy automatically on Heroku after a successful build by Travis CI:

    https://docs.travis-ci.com/user/deployment/heroku/

- Alternatively, auto-deployment from GitHub can be configured on Heroku Dashboard:

    https://devcenter.heroku.com/articles/github-integration