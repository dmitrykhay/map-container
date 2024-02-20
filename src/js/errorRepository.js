export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [0, 'Ошибка 1'],
      [1, 'Ошибка 2'],
      [2, 'Ошибка 3'],
      [3, 'Ошибка 4'],
      [4, 'Ошибка 5'],
      [5, 'Ошибка 6'],
      [6, 'Ошибка 7'],
      [7, 'Ошибка 8'],
      [8, 'Ошибка 9'],
      [9, 'Ошибка 10'],
    ]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
