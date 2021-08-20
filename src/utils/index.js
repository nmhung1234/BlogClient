import moment from "moment";
import "moment/locale/vi.js";
moment.locale('vi');

export const showTime = (dateISO) => {
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
    return `${date} Thg ${month + 1} (${compareHours})`;
}