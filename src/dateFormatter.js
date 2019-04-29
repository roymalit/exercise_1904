export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
	const dateToFormat = new Date(dateToFormatTimeMillis);
	const systemDate = new Date(systemDateTimeMillis);

	// Create new date objects that don't take time into account
  	const dMT = dateToFormat.setHours(0,0,0,0);
	const sMT = systemDate.setHours(0,0,0,0);

	// Retrieve date, month & year from dateTime
	const dYear = dateToFormat.getFullYear();
	const dMonth = 	addZ(dateToFormat.getMonth() + 1);
	const dDate = addZ(dateToFormat.getDate());

	// Compare dateTime with system time
	// Return 'Today' or formatted date DD/MM/YYYY
	if (dMT == sMT) {
		return 'TODAY';
	} else {
		return dDate + '/' + dMonth + '/' + dYear;
	}

	// Add leading 0 infront of single digit results
	function addZ(n) {
      return n < 10 ? '0' + n : '' + n;
    }
};
