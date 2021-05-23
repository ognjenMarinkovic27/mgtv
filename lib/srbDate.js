function convertDate(dateString) {
    const date = new Date(dateString);

    const options = { month: 'short'};
    const month = new Intl.DateTimeFormat('en-US', options).format(date)

    return date.getDate()+". "+month+" "+date.getFullYear() + '. '  + date.toLocaleTimeString();
}

export default function srbenda(date) {
    
    date = convertDate(date);

    date = date.replace('Mon', 'Понедељак,')
    date = date.replace('Tue', 'Уторак,')
    date = date.replace('Wed', 'Среда,')
    date = date.replace('Thu', 'Четвртак,')
    date = date.replace('Fri', 'Петак,')
    date = date.replace('Sat', 'Субота,')
    date = date.replace('Sun', 'Недеља,')

    date = date.replace('Jan', 'Јануар')
    date = date.replace('Feb', 'Фебруар')
    date = date.replace('Mar', 'Март')
    date = date.replace('Apr', 'Април')
    date = date.replace('May', 'Мај')
    date = date.replace('Aug', 'Август')
    date = date.replace('Sep', 'Септембар')
    date = date.replace('Oct', 'Октобар')
    date = date.replace('Nov', 'Новембар')
    date = date.replace('Dec', 'Децембар')

    return date
}