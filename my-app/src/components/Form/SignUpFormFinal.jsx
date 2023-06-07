import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';


const SignUpForm2 = () => {
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                intro: "",
                job: "",
                term: false,
            }}
            validationSchema={Yup.object({               // Xử lý khi gặp lỗi, làm việc với Yup
                firstName: Yup.string().max(10).required("Required"),
                lastName: Yup.string().max(10).required("Required"),
                email: Yup.string().email().required("Required"),
                intro: Yup.string().required("Required"),
                job: Yup.string().required("Required"),
                terms: Yup.boolean().oneOf([true], "Please check the terms"),
            })}

            onSubmit={(values, actions) => {
                // console.log(actions);
                console.log(values);
               actions.resetForm({              // Sau khi bấm submit xong thì load lại như ban đầu là giá trị rỗng
                firstName: "",
                lastName: "",
                email: "",
                intro: "",
                job: "",
                term: false,
            });
                setTimeout(() => {              // Xét thời gian sau khi bấm nút submit sẽ chờ mấy giấy mới đc bấm tiếp
                    actions.setSubmitting(false);
                }, 4000)
            }}>

            {(formik) => {
                return (
                    <Form className="p-10 w-full max-w-[400px] mx-auto border-2 rounded-lg mt-3 bg-gradient-to-br from-blue-900 to-indigo-300">
                        <h1 className="p-2 text-3xl font-semibold text-[#f8f4f4] mb-6 text-center italic hover:not-italic border border-gray-600 rounded-md"> Application Form </h1>

                        <MyInput label="First name" name="firstName" placeholder="Enter your first name..."></MyInput>

                        <MyInput label="Last name" name="lastName" placeholder="Enter your last name..."></MyInput>

                        <MyInput label="Email" type="email" name="email" placeholder="Enter your email..."></MyInput>

                        <MyTextarea label="Introduce yourself" name="intro" id="intro" placeholder="Enter your introduce here..."></MyTextarea>

                        <MySelectBox label="Your Job" name="job">
                            <option className="font-mono" value="" selected >--- Select ---</option>
                            <option className="font-mono" value="frontend"> Frontend Developer</option>
                            <option className="font-mono" value="backend"> Backend Developer</option>
                            <option className="font-mono" value="fullstack"> FullStack Developer</option>
                        </MySelectBox>

                        <MyCheckbox name="terms">
                            <p className="font-semibold text-white"> I agree with the condition & terms</p>
                        </MyCheckbox>

                        <div>
                            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg" disabled={formik.isSubmitting}> Submit </button>
                        </div>
                    </Form>
            )}}
            
        </Formik>
    );
};


const MyInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);                  // field => field[1];  meta => field[1]

    return (
        <div className="flex flex-col gap-2 mb-5">
            <label className="font-semibold text-white" htmlFor={props.id || props.name}>{label}</label>
            <input type="text" className="p-4 rounded-lg border-2 italic" {...field} {...props} />
            {meta.touched && meta.error ? (             // Set error message
                <div className="text-sm font-semibold text-red-600"> {meta.error}</div>
            ) : null}

        </div>
    );
}

const MyTextarea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <label className="font-semibold text-white" htmlFor={props.id || props.name}>{label}</label>
            <textarea className="p-4 rounded-md border border-gray-200 h-[180px] resize-none italic" {...field} {...props} />
            {meta.touched && meta.error ? (             // Set error message
                <div className="text-sm font-semibold text-red-600"> {meta.error}</div>
            ) : null}

        </div>
    );
}

const MySelectBox = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <div className="flex flex-row gap-1 h-8 justify-around">
                <label className="font-semibold w-[85px] text-white" htmlFor={props.id || props.name}>{label}</label>
                <svg fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="6" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
            </div>
            <select className="p-4 rounded-md border border-gray-200" {...field} {...props} />
            {meta.touched && meta.error ? (             // Set error message
                <div className="text-sm font-semibold text-red-600"> {meta.error}</div>
            ) : null}

        </div>
    );
}

const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="flex flex-col gap-2 mb-5">
            <div className="flex items-center gap-2 w-full">
                <input className="p-4 rounded-md border border-gray-200 mr-2" type="checkbox" {...field} {...props} />
                {children}                 {/* children ở đây chính là thẻ p  */}
            </div>
            {meta.touched && meta.error ? (
                <div className="font-semibold text-red-600"> {meta.error}</div>
            ) : null}
        </div>
    );
}

export default SignUpForm2;