import React, { useEffect } from 'react';
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schemaValidation = yup.object({
    firstName: yup.string().required("Please enter your first name").max(10, "Must be at least 10 characters"),
    lastName: yup.string().required("Please enter your last name").max(10, "Must be at least 10 characters"),
    email: yup.string().required("Please enter your email").email("Must be a valid email")
})

const SignUpFormHook = () => {
    const { register, handleSubmit, watch, reset, setFocus, setValue, control, formState: { errors, isSubmitting, isValid } } = useForm({ resolver: yupResolver(schemaValidation) });

    console.log(isSubmitting);
    // console.log(errors);
    const watchAge = watch("showAge", false);       // Xem thay đổi checkbox
    const onSubmit = async (values) => {
        if (isValid) {
            console.log("Send data to server");
            // after submit successfully, then reset form
            reset({
                firstName: '',
                lastName: '',
                email: '',
                showAge: false,
            });
        }

        // const response = await axios.get('https://hn.algolia.com/api/v1/search?query=avanger');
        // return response.data;
        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve();
        //         console.log(values);
        //     }, 2000)
        // });
    }

    useEffect(() => {
        setFocus("firstName")
    }, [setFocus])

    const handleSetDemoData = () => {
        setValue("firstName", "Robert")
        setValue("lastName", "Pham")
        setValue("email", "wibu@gmail.com")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 w-full max-w-[400px] mx-auto">
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="firstName"> First name </label>
                {/* <input type="text" name="firstName" id="firstName" className="p-4 rounded-md border border-gray-200" placeholder="Enter your firstname"
                    {...register("firstName")}
                /> */}
                <MyInput name="firstName" id="firstName" placeholder="Enter your first name" control={control} />
                {errors?.firstName && <div className="text-red-500 text-sm font-semibold">{errors.firstName?.message}</div>}
                {/* { errors?.firstName?.type === 'max' && <div className="text-red-500 text-sm font-semibold">{errors.firstName.message} </div>} */}
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="lastName"> Last name </label>
                <MyInput name="lastName" id="lastName" placeholder="Enter your last name" control={control} />
                {errors?.lastName && <div className="text-red-500 text-sm font-semibold">{errors.lastName?.message}</div>}
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="email"> Email </label>
                <MyInput name="email" id="email" placeholder="Enter your email" control={control} />
                {errors?.email && <div className="text-red-500 text-sm font-semibold">{errors.email?.message}</div>}
            </div>

            <div className="flex flex-col gap-2 mb-5">
                <input type="checkbox" {...register("showAge")} />
                {watchAge && <input type="number" placeholder="Please enter your age" />}
            </div>

            <div>
                <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg">
                    {isSubmitting ? <div className=" mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div> : "Submit"}
                </button>
            </div>

            <div>
                <button className="p-2 w-full rounded-md bg-green-400 mt-3 " onClick={handleSetDemoData} >Demo data</button>
            </div>

        </form>
    );
};

// const MyInput = ({ control ,...props }) => {
//     return (
//         <Controller
//             name={props.name}
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//                 <input  className="p-4 rounded-md border border-gray-200"  {...field} {...props} />
//             )}
//         >
//         </Controller>
//     )
// };

const MyInput = ({ control, ...props }) => {
    const { field } = useController({ name: props.name, defaultValue: "", control })
    return (
        <input className="p-4 rounded-md border border-gray-200" {...field} {...props} />
    );
};

export default SignUpFormHook;