import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import InputHook from '../input/InputHook';
import RadioHook from '../RadioHook';
import CheckboxHook from '../checkbox/CheckboxHook';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const validation = yup.object({
    Username: yup.string().required("Please enter your username").max(15, "Must be at least 15 characters"),
    Password: yup.string().required("Password is required").min(8, "Your password is too short ").matches(
        "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$",
        "Minimum eight characters, at least one letter and one number"
    ),
    Email: yup.string().required("Please enter your email address").email("Must be a valid email"),
    gender: yup.string().required().oneOf(['Male', 'Female', "You must select an option"]),
    checkbox: yup.boolean().required().oneOf([true], " You must accept the terms and conditions")
});

const RegisterHook = () => {
    const { handleSubmit,  reset, control, setFocus, formState: { errors, isValid, isSubmitting } } = useForm({
        resolver: yupResolver(validation),
        mode: "onChange",
    });

    const onSubmitHandler = (values) => {
        if (!isValid) return;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                console.log(values);
                // after submkited successfully will reset all field
                reset({
                    Username: '',
                    Email: '',
                    Password: '',
                    gender: '',
                    checkbox: false
                });
            }, 3000)
        }
        );

    }



    useEffect(() => {
        setFocus("Username");
    }, [setFocus])

    return (
        <div className="max-w-[350px] mx-auto my-10">
            <h1 className="text-4xl text-black font-bold text-center mb-9 hover:text-indigo-600"> Register Form </h1>
            <form onSubmit={handleSubmit(onSubmitHandler)} autoComplete="off">
                <div className="flex flex-col gap-3">
                    <label htmlFor="Username" className="font-semibold"> Username</label>
                    <InputHook type="text" name="Username" placeholder="Enter your username" id="Username" control={control} />
                    {errors.Username && <span className="text-red-600 font-medium text-sm">{errors.Username.message}</span>}
                </div>

                <div className="flex flex-col gap-3 mt-5">
                    <label htmlFor="Password" className="font-semibold"> Password</label>
                    <InputHook type="password" name="Password" placeholder="Enter your password" id="Password" control={control} />
                    {errors.Password && <span className="text-red-600 font-medium text-sm">{errors.Password.message}</span>}
                </div>

                <div className="flex flex-col gap-3 mt-6">
                    <label htmlFor="Email" className="font-semibold"> Email</label>
                    <InputHook type="email" name="Email" placeholder="Enter your email" id="Email" control={control} />
                    {errors.Email && <span className="text-red-600 font-medium text-sm">{errors.Email.message}</span>}
                </div>

                <div className="flex flex-col gap-3 mt-6">
                    <label htmlFor="gender" className="font-semibold cursor-pointer"> Gender</label>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-x-3">
                            <RadioHook name="gender" control={control} value="Male" defaultChecked={true}></RadioHook>
                            <span> Male</span>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <RadioHook name="gender" control={control} value="Female"></RadioHook>
                            <span>Female</span>
                        </div>
                    </div>

                    {errors.gender && <span className="text-red-600 font-medium text-sm"> {errors.gender.message}</span>}
                </div>


                <div className="mt-10">
                    <CheckboxHook name="checkbox" id="checkbox" control={control} text="I accept the terms and condition" />
                    {errors.checkbox && <span className="text-red-600 font-medium text-sm"> {errors.checkbox.message}</span>}
                </div>

                <button className={`p-4 w-full bg-green-500 rounded-md mt-10 font-semibold text-white hover:bg-green-700   ${isSubmitting ? "opacity-50" : ''} `} disabled={isSubmitting}>
                    {isSubmitting ? <div className=" mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div> : "Submit"}
                </button>

            </form>
        </div>
    );
};

export default RegisterHook;