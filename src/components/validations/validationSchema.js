import * as Yup from 'yup';

export const checkoutForm = () =>
    Yup.object({
        name: Yup.string()
            .strict(false)
            .trim()
            .required(`Name is require *`),
        phone: Yup.string()
            .strict(false)
            .trim()
            .required(`Phone is require *`),
        hours: Yup.string()
            .strict(false)
            .trim()
            .required(`Hours is require *`),
        address: Yup.string()
            .strict(false)
            .trim()
            .required(`Address is require *`),
        startDate: Yup.string()
            .strict(false)
            .trim()
            .required(`Booking Start Date is require *`),
        endDate: Yup.string()
            .strict(false)
            .trim()
            .required(`Booking End Date is require *`),
    });