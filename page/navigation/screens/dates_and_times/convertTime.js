/* page/navigation/screens/dates_and_times/convertTime.js
   Taylor Johnson and Jacob Woodmancy
   CS 391 - Senior Project
   GOLFCC
   12-14-2023

   Description: This file inputs database times and outputs times readable
   for the user.
*/

function convertTime(times) {

    let times_formatted = [];

    for (let i in times) {

        let new_str = '';

        /* 10 and 11 will need an AM and won't need to trim off a 
           leading 0. */
        if (times[i].substring(0,2) === "10" || 
            times[i].substring(0,2) === "11") {
            new_str = times[i] + " AM";
        }

        /* Every number greater than 11 is PM. */
        if (Number(times[i].substring(0,2)) > 11) {

            new_str = times[i];

            /* If the number is greater than 12 then we need to subtract 
               12 from that number (for example, 13:20 becomes 1:20 PM) */
            if (Number(times[i].substring(0,2)) > 12) {
                new_str = (Number(times[i].substring(0,2)) - 12).toString()
                           + times[i].substring(2);
            }

            new_str = new_str + " PM";
        }

        if (times[i][0] === '0') {
            new_str = times[i].substring(1) + " AM";
        }

        times_formatted.push(new_str);

    }

    return times_formatted;

}

export default convertTime;