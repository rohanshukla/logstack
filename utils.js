
exports.formatDate = function (date) {

    let year = date.getFullYear();
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();

    if (month.length < 2) {
        month = '0' + month
    }
    if (day.length < 2) {
        day = '0' + day
    }
    return year + "-" + month + "-" + day;
}

exports.formatTime = function (date) {
    let hour = "" + date.getHours();
    let minutes = "" + date.getMinutes();

    if (hour.length < 2) hour = '0' + hour;
    if (minutes.length < 2) minutes = '0' + minutes;

    return hour + ':' + minutes;
}