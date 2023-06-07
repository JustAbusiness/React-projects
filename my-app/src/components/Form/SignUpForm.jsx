import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// const validate = (values) => {          // Xử lý khi gặp lỗi ( values lúc này là initialValues của firstName, lastName)
//     const errors = {};
//     if (!values.firstName) {
//         errors.firstName = "Required";
//     } else if (values.firstName.length > 20) {
//         errors.firstName = "Must be 20 characters or less"
//     }

//     if (!values.lastName) {
//         errors.lastName = "Required";
//     } else if (values.lastName.length > 10) {
//         errors.lastName = "Must be 10 characters or less"
//     }

//     return errors;
// }

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
        },

        validationSchema: Yup.object({               // Xử lý khi gặp lỗi, làm việc với Yup
            firstName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
            lastName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
        }),
        onSubmit: values => {
            console.log(values);
        }
    });


    return (
        <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[400px] mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName"> First name </label>
                {/* <input type="text" name="firstName" id="firstName" className="p-4 rounded-md border border-gray-200" placeholder="Enter your firstname" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off" /> */}
                <input type="text" name="firstName" id="firstName" className="p-4 rounded-md border border-gray-200" placeholder="Enter your firstname" autoComplete="off" {...formik.getFieldProps("firstName")} />

                {formik.touched.firstName && formik.errors.firstName ? <div className="text-sm text-red-500"> {formik.errors.firstName}</div> : null}
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName"> Last name </label>
                <input type="text" name="lastName" id="lastName" className="p-4 rounded-md border border-gray-200" placeholder="Enter your lastname" autoComplete="off" {...formik.getFieldProps("lastName")} />

                {formik.touched.lastName && formik.errors.lastName ? <div className="text-sm text-red-500"> {formik.errors.lastName}</div> : null}
            </div>

            <div>
                <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg"> Submit </button>
            </div>

        </form>
    );
};

export default SignUpForm;