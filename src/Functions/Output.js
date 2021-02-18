import moment from 'moment';

export function setDate(full_date){
    return moment(full_date).format("DD/MM/YYYY");
};

export function setHour(full_date){
    return moment(full_date).format("HH:MM");
};
