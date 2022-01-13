import jwt_decode from "jwt-decode";
// import moment from "moment";
// import "moment/locale/vi.js";
// moment.locale('vi');
import moment from 'moment/min/moment-with-locales';

export const timeDetails = (dateISO) => {
    const dateFormat = new Date(dateISO);
    const year = dateFormat.getFullYear();
    const month = dateFormat.getMonth();
    const day = dateFormat.getDate();
    const hour = dateFormat.getHours();
    const minnute = dateFormat.getMinutes();
    const second = dateFormat.getSeconds();

    return {
        year,
        month,
        day,
        hour,
        minnute,
        second
    }
}
export const showTime = (dateISO) => {
    moment.locale('vi');
    const { year, month, day, hour, minnute, second } = timeDetails(dateISO);
    const compareHours = moment([year, month, day, hour, minnute, second])
        .startOf("hours")
        .fromNow();
    return `${day} Thg ${month + 1} (${compareHours})`;
}


export const slug = (str) => {
    //Đổi chữ hoa thành chữ thường
    str = str.toLowerCase();

    //Đổi ký tự có dấu thành không dấu
    str = str.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    str = str.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    str = str.replace(/đ/gi, 'd');
    str = str.replace(/[^a-zA-Z ]/g, "")
    //Xóa các ký tự đặt biệt
    str = str.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    //Đổi khoảng trắng thành ký tự gạch ngang
    str = str.replace(/ /gi, "-");
    //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
    //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
    str = str.replace(/\-\-\-\-\-/gi, '-');
    str = str.replace(/\-\-\-\-/gi, '-');
    str = str.replace(/\-\-\-/gi, '-');
    str = str.replace(/\-\-/gi, '-');
    //Xóa các ký tự gạch ngang ở đầu và cuối
    str = '@' + str + '@';
    str = str.replace(/\@\-|\-\@|\@/gi, '');

    return str;
}

export const decodeJWT = (token) => {
    try {
        const expired = jwt_decode(token);
        return expired
    } catch (error) {
        return false
    }
}