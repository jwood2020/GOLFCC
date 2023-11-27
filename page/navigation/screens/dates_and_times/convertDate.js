/* page/navigation/screens/dates_and_times/convertDate.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file inputs database dates and outputs dates readable
   for the user.
*/

function convertDate(day_obj) {

    const month_obj = ['January','February','March','April','May',
                       'June','July','August','September','October',
                       'November','December'];

    let display_day_obj = [];

    /* Loop through all the days inside of day_obj and convert them from 
       YYYY-MM-DD into Month DD, YYYY. For example, 2023-12-05 is converted
       into December 05, 2023. */
       for (let i in day_obj) {

        /* The first four characters make up the year (indices 0,1,2 and 3).
           Indices 5 and 6 make up the month and indices 8 and 9 make up the
           day. Then we use the month_obj array to map that month number to
           the month in words. */
        let year = day_obj[i].substring(0,4);
        let month = month_obj[Number(day_obj[i].substring(5,7)) - 1];
        let day = day_obj[i].substring(8,10);
        let date_str = month + " " + day + ", " + year;

        display_day_obj.push(date_str);
    };

    return display_day_obj;

}

export default convertDate;