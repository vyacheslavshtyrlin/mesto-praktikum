export default class UserInfo {
  constructor(selectorName, selectorAbout) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorAbout)
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      info: this._info.textContent
    };
    return data;
  };

  setUserInfo(name, info) {
    this._name.textContent = name.value;
    this._info.textContent = info.value;
  }



}
