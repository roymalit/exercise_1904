import {format} from '../src/dateFormatter';

it('formats today as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('formats not today as entered dateTime 15/12/2018', () => {
  const December = 11;
  const April = 3;
  const systemDateTime = new Date(2019, April, 15, 12, 50).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('15/12/2018');
});

it('formats not today as entered dateTime 01/04/2019', () => {
  const December = 11;
  const April = 3;
  const systemDateTime = new Date(2019, April, 15, 12, 50).getTime();
  const dateTimeToFormat = new Date(2019, April, 1, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('01/04/2019');
});

it('formats not today as entered dateTime 16/12/2018', () => {
  const December = 11;
  const systemDateTime = new Date(2018, December, 15, 23, 59, 59).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 23, 59, 60).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('16/12/2018');
});