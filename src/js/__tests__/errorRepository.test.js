import ErrorRepository from '../errorRepository';

test.each([
  ['0', 0, 'Ошибка 1'],
  ['1', 1, 'Ошибка 2'],
  ['2', 2, 'Ошибка 3'],
  ['3', 3, 'Ошибка 4'],
  ['4', 4, 'Ошибка 5'],
  ['5', 5, 'Ошибка 6'],
  ['6', 6, 'Ошибка 7'],
  ['7', 7, 'Ошибка 8'],
  ['8', 8, 'Ошибка 9'],
  ['9', 9, 'Ошибка 10'],
  ['not present in repository', 10, 'Unknown error'],
])(
  'testing working status of class ErrorRepository with error code %s',
  (_, imported, expected) => {
    const errorRepository = new ErrorRepository();
    expect(errorRepository.translate(imported)).toBe(expected);
  },
);
