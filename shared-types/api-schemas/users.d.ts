/* eslint-disable @typescript-eslint/no-unused-vars */
// for some reason when using the dot notaion, the types are not being recognized as used
declare namespace SharedTypes.ApiSchemas.Users {
  type CreateNewUserBody = {
    email: string;
    name: string;
    uid: string;
    captcha: string;
  };
}
