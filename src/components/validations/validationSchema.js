import * as Yup from 'yup';
import { dateConvert } from '../functions/dateConvertFunction';

export const checkoutForm = (controlService) =>
    Yup.object({
        name: Yup.string()
            .strict(false)
            .trim()
            .required(`Name is require *`),
        phone: Yup.string()
            .strict(false)
            .trim()
            .required(`Phone is require *`),
        hours: Yup.number()
            .strict(false)
            .required(`Hours is require *`)
            .min(2, `Should more then 2 hours`)
            .max(24, `not more then 1 day`)
            .typeError("Should be integer number"),
        address: Yup.string()
            .strict(false)
            .trim()
            .required(`Address is require *`),
        startDate: Yup.string()
            .strict(false)
            .trim()
            .required(`Booking Start Date is require *`)
            .test('min_end_time', "You can't book this service for Selected Date", function (value) {
                const { startDate } = this.parent
                // console.log(" ✅ Start Date", startDate)
                console.log(" ✅ controlService", controlService)
                if (controlService.allBookedDate) {
                    console.log(" ✅ controlService inside if", controlService)
                    const allBookedDates = [...controlService?.allBookedDate] || []
                    // console.log(" ✅ allBookedDates", allBookedDates)
                    const dateFound = allBookedDates.find(abd => dateConvert(abd) === startDate)
                    // if (dateConvert(abd) === startDate) 
                    //         console.log("found", abd)
                    //         // return true
                    //     } else {
                    //         console.log("Not found", dateConvert(abd))
                    //         console.log("Not startDate", startDate)
                    //         // return false
                    //     }
                    // })

                    console.log(" ✅ dateFound", dateFound)

                    if (dateFound == undefined) {
                        return true
                    }
                    // if (dateFound == undefined) {
                    //     return false
                    // } else {
                    //     return true
                    // }

                    if (dateFound != undefined && dateConvert(dateFound) != startDate) {
                        return true
                    } return false
                } else {
                    return true
                }
                // if (state.start_date === moment(end_date).format('ddd MMM DD YYYY')) {
                //     return moment(value, 'HH:mm').isSameOrAfter(moment(state.start_time, 'HH:mm').add(1, 'hours'))
                // } else {
                //     return true
                // }
            })
        // .min(new Date(), "You cant select lower date than todays date"),

    });