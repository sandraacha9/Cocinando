const CustomRegExp = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,}$/,
  texsSpacesPointsAccents: /^([A-ZÁÉÍÓÚa-zñáéíóú][\s]*){2,}$/,
  ticket: /^[0-9]{1,5}[a-zA-Z]{1}$/g,
};

export class CustomValidator {

  static checkPassword(val: string): Boolean {
    const rx = new RegExp(CustomRegExp.password);

    return rx.test(val);
  }

  static checkTexsSpacesPointsAccents(val: string): Boolean {
    const rx = new RegExp(CustomRegExp.texsSpacesPointsAccents);

    return rx.test(val);
  }

  static checkTicket(val: string): Boolean {
    const rx = new RegExp(CustomRegExp.ticket);

    return rx.test(val);
  }
}
