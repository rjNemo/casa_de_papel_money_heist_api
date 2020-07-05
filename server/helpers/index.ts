import moment from "moment";

export const logDbSuccess = () =>
  console.log(`${moment().format()}: Connection to database success`);

export const logServerStart = (port: string) => () =>
  console.log(
    `${moment().format()}: Server running on http://localhost:${port}`
  );
