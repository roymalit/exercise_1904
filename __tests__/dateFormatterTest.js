import {format} from '../src/dateFormatter';

it('formats today as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const todayDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
  expect(format(dateTimeToFormat, todayDateTime)).toBe('TODAY');
});