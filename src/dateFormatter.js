export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {

	// Create new date objects that don't take time into account
  	var d1 = new Date(dateToFormatTimeMillis).setHours(0,0,0,0);
	var d2 = new Date (systemDateTimeMillis).setHours(0,0,0,0);

	if (d1 == d2) {
		return 'TODAY';
	} else {
		return 'NOT TODAY';
	}
};
