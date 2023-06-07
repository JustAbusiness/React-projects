import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const SignUpForm2 = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
            }}
            validationSchema={Yup.object({               // Xử lý khi gặp lỗi, làm việc với Yup
                firstName: Yup.string().max(20, "Must be 20 characters or less").required("Required"),
                lastName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}>

            <Form className="p-10 w-full max-w-[400px] mx-auto">
                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="firstName"> First name </label>
                    <Field name="firstName" type="text" placeholder="Enter your firstname" className="p-4 rounded-md border border-gray-200"></Field>
                    <div className="text-sm text-red-500 font-semibold">
                        <ErrorMessage name="firstName"></ErrorMessage>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mb-5">
                    <label htmlFor="lastName"> Last name </label>
                    <Field name="lastName" type="text" placeholder="Enter your lastname" className="p-4 rounded-md border border-gray-200"></Field>
                    <div className="text-sm text-red-500 font-semibold">
                        <ErrorMessage name="lastName"></ErrorMessage>
                    </div>
                </div>

                <div>
                    <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg"> Submit </button>
                </div>
            </Form>

        </Formik>
    );
};

export default SignUpForm2;