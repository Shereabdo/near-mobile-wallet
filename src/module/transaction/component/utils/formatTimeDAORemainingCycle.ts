import { translate } from "locale";

function formatTimeDAORemainingCycle(numOfHours: number): string {
    let res = "";
    const totalHours = numOfHours / 60;
    const days = Math.floor(totalHours / 24);
    let hours: number | string = Math.floor(totalHours - days * 24);
    let minutes: number | string = Math.floor(numOfHours - days * 60 * 24 - hours * 60);
    if (days > 0) {
        res += `${days} ${days > 1 ? translate("days") : translate("day")}, `;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    res += `${hours} ${hours !== 1 ? translate("hours") : translate("hour")}${days > 0 ? "" : ", "}`;
    if (days > 0) return res;
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    res += `${minutes} ${minutes !== 1 ? translate("minutes") : translate("minute")}.`;
    return res;
}

export default formatTimeDAORemainingCycle;
