export interface ILoginRequestParams {
  email: string;
  password: string;
}

export interface IRegisterRequestParams {
  email: string;
  password: string;
  username: string;
  customer: {
    name: string;
    phoneNumber: string;
  };
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
