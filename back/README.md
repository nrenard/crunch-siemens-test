# This is a technical test for Crunch Siemens

## Architecture

- Express
- Jest
- Typescript
- Node
- Joi
- Husky
- Lint Staged

<br/>

## Environment installation

Requirements to run the nodeJS project >= 14. Clone repository, enter the folder and install its dependencies with the command `yarn` or `npm install` and copy the file `.env.example` to `.env` configuring the variables of according to the environment.

<br/>

## Scripts

<details>
  <summary>
    <strong style="font-size: 15px;">Tests</strong>
  </summary>

  <br/>

  <b>Run all tests</b>

  > `npm test`

  <b>Run test coverage</b>

  > `npm run test:ci`

  <b>Run verbose tests</b>

  > `npm run test:verbose`

  <b>Run unit tests</b>

  > `npm run test:unit`

  <b>Run integration tests</b>

  > `npm run test:integration`
</details>

<br/>

<details>
  <summary>
    <strong style="font-size: 15px;">Run server</strong>
  </summary>

  <br/>

  <b>Development server</b>

  > `npm run dev`

  <b>Production server</b>

  <p>*** Before run Build script ***</p>

  > `npm run start`

  <b>Build script</b>

  > `npm run build`
</details>