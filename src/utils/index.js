import moment from "moment";
import "moment/locale/vi.js";
moment.locale('vi');

export const showTime = (dateISO) => {
console.log("🚀 ~ file: index.js ~ line 7 ~ showTime ~ dateISO", dateISO)

    const dateFormat = new Date(dateISO);
    const year = dateFormat.getFullYear();
    const month = dateFormat.getMonth();
    const date = dateFormat.getDate();
    const hour = dateFormat.getHours();
    const minnute = dateFormat.getMinutes();
    const second = dateFormat.getSeconds();

    const compareHours = moment([year, month, date, hour, minnute, second]).locale("vi")
        .startOf("hours")
        .fromNow();
        console.log(compareHours);
    return `${date} Thg${month + 1} (${compareHours})`;
}