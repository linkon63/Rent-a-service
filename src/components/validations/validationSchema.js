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
            .required(`Booking Start Date is require *`),

    });