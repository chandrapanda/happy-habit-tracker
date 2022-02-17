const moment = require('moment');

function timeCalculate(time1, time2) {
    var startTime = moment(time1, 'DD-MM-YYYY hh:mm:ss');
    var endTime = moment(time2, 'DD-MM-YYYY hh:mm:ss');
    var gap =  endTime.diff(startTime, 'seconds');

    var duration = moment.utc(gap*1000).format('HH:mm:ss')

    return duration;
}

console.log(timeCalculate('02-02-2022 01:01:01', '02-02-2022 12:02:02'))
//console.log(moment.unix(timeCalculate('2000-10-31', '2000-11-2')).format('MM/DD/YYYY'))