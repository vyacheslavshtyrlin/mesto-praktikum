export default class UserInfo {
  constructor(selectorName, selectorAbout, selectorAvatar) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorAbout)
    this._avatar = document.querySelector(selectorAvatar)
  }

  getUserInfo() {
    const data = {
      name: this._name.textContent,
      info: this._info.textContent
    };
    return data;
  };

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.about;
    this.setAvatar(data);
  }

  setAvatar(data) {
    this._avatar.src = data.avatar;
  }

}
