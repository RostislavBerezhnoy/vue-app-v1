import moment from 'moment'

export function dateFormatter (date){
    return date ? moment(date).format("LL") : "";
}
