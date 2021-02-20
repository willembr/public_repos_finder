import moment from 'moment';

export function setDate(full_date){
    return moment(full_date).format("DD/MM/YYYY");
};

export function setHour(full_date){
    return moment(full_date).format("HH:MM");
};

export function setCapitalLetter(text){
    if(!text) return;
    return text.substring(0,1).toUpperCase() + text.substring(1);
}

export function getPartOfString(text,start,end){
    if(!text) return;
    return text.substring(start,end);
}   