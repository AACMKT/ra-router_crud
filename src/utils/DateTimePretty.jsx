import moment from 'moment';

export function DateTimePretty(date) {

    if (moment(date).isValid()) {
        return moment(moment(date)).fromNow()
    }
    return 'some time ago'
}
