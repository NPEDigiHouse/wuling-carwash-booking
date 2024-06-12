export interface ILoginRequestParams {
  email: string;
  password: string;
}

export interface ICredentialUserResponsePrams {
  id: string;
  email: string;
  username: string;
  role: string;
  customer: {
    name: string;
  };
}
