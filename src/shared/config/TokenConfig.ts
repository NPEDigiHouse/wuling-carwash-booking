import CookieLibs from "shared/utils/CookieLibs";

class TokenConfig {
  tokenName: string;

  constructor() {
    this.tokenName = "authToken";
  }

  setToken(token: string) {
    const tokenItem = CookieLibs.setCookie({
      name: this.tokenName,
      value: token,
    });

    return tokenItem;
  }

  getToken() {
    const tokenItem = CookieLibs.getCookie(this.tokenName);

    return tokenItem;
  }
}

export default new TokenConfig();
