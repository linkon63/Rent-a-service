export function dateConvert(date) {
    try {
        var todayDate = new Date(date).toISOString().slice(0, 10);
        console.log("Date converted :", todayDate)
        return todayDate
    } catch (error) {
        console.log('dateConvert', error)
    }
}