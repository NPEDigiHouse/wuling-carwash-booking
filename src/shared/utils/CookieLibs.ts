import Cookies from "js-cookie";

type SetCookiesLibsDataType = {
  name: string;
  value: string;
  option?: { expires: number };
};

class CookiesLibs {
  //   name: string;
  //   value: string;
  //   option?: { expires: number };

  //   constructor(name: string, value: string, option?: { expires: number }) {
  //     this.name = name;
  //     this.value = value;
  //     this.option = option;
  //   }

  setCookie(params: SetCookiesLibsDataType) {
    return Cookies.set(params.name, params.value);
  }

  getCookie(name: string) {
    return Cookies.get(name);
  }

  deleteCookie(name: string) {
    return Cookies.remove(name);
  }
}

export default new CookiesLibs();
