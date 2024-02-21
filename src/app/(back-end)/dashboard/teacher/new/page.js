'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import TextareaInput from '@/components/FormInputs/TextareaInput';
import generateSlug from '@/lib/generateSlug';
import Imageinput from '@/components/FormInputs/Imageinput';
import { makePostRequest } from '@/lib/apiRequest';
import SelectInput from '@/components/FormInputs/SelectInput';
import FromHeader from '@/components/backend/FromHeader';


const Teacher = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const bloodGroup = [{ id: 1, title: "A+" }, { id: 2, title: "A-" }, { id: 3, title: "B+" }, { id: 4, title: "B-" }, { id: 5, title: "O+" }, { id: 6, title: "O-" }, { id: 7, title: "AB+" }, { id: 8, title: "AB-" }, { id: 9, title: "Unknown" }];
    const religion = [{ id: 1, title: "Islam" }, { id: 2, title: "Christian" }, { id: 3, title: "Sanaton" }, { id: 5, title: "Buddhist" }, { id: 12, title: "Other" }]; // corrected spelling
    const gender = [{ id: 1, title: "Male" }, { id: 2, title: "Female" }, { id: 3, title: "Other" }];

    const onSubmit = data => {
        const slug = generateSlug(data.englishName);
        data.slug = slug;
        data.imageUrl = imageUrl;
        console.log(data);
        makePostRequest(setLoading, 'api/teachers', data, "teacher", reset);
    };

    return (
        <div>
            <FromHeader title="Add New teacher" />

            <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div>
                    <div className='border-b border-gray-300 py-2 mb-3'> <h1 className='text-gray-200 text-lg'>Personal Details </h1> </div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
                        <TextInput
                            label="Name in English"
                            name="englishName"
                            placeholder="Name in English"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            label="Name in Bangla"
                            name="banglaName"
                            placeholder="Name in Bangla"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            label="Present Address"
                            name="presentAddress"
                            placeholder="[House, Village, Post-office(code),Upazila, District]"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            label="Permanent Address"
                            name="permanentAddress"
                            placeholder="[House, Village, Post-office(code),Upazila, District]"
                            register={register}
                            errors={errors}
                        />
                    </div>

                    {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-3'>
                        <TextInput
                            label="Date of Birth:"
                            name="dateOfBirth"
                            type="date"
                            placeholder="Date of Birth"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Joining Date"
                            name="joiningDate"
                            type='date'
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Mobile Number"
                            name="mobileNumber"
                            type="number"
                            placeholder="Mobile Number"
                            register={register}
                            errors={errors}
                        />

                    </div> */}



                    {/* <div className='grid grid-cols-2 md:grid-cols-3 gap-5 my-3'>
                        <SelectInput
                            label="Blood Group"
                            name="bloodGroup"
                            placeholder="Select Blood Group"
                            register={register}
                            options={bloodGroup}
                            hasMultipleSelect={false}
                            errors={errors}
                        />
                        <SelectInput
                            label="Religion"
                            name="religion"
                            placeholder="Select Religion"
                            register={register}
                            options={religion}
                            hasMultipleSelect={false}
                            errors={errors}
                        />
                         <SelectInput
                            label="Gender"
                            name="gender"
                            placeholder="Select Gender"
                            register={register}
                            errors={errors}
                            options={gender}
                            hasMultipleSelect={false}
                        />
                        <TextInput
                            label="NID Number"
                            name="nidNumber"
                            type='number'
                            placeholder="Nid Number"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            label="Email"
                            name="email"
                            type='email'
                            placeholder="Email"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Password"
                            name="password"
                            type='password'
                            placeholder="Password"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Designation"
                            name="designation"
                            placeholder="Designation"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Index No:"
                            name="indexNo"
                            placeholder="Index No"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="MPO Date:"
                            name="mpoDate"
                            placeholder="MPO Reg. Date"
                            register={register}
                            errors={errors}
                        />
                    </div> */}

                    <div className='border-b border-gray-300 py-3 mb-3'> <h1 className='text-gray-300 text-lg'>Education Details </h1> </div>

                    {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-5 my-3 py-2'>
                        <TextInput
                            label="University"
                            name="university"
                            placeholder="University"
                            register={register}
                            errors={errors}
                        />
                     
                        <TextInput
                            label="Degree"
                            name="degree"
                            placeholder="Degree"
                            register={register}
                            errors={errors}
                        />
                         <TextInput
                            label="Year"
                            name="year"
                            placeholder="Year Of Graduation"
                            register={register}
                            errors={errors}
                        />
                         <TextInput
                            label="City"
                            name="city"
                            placeholder="City"
                            register={register}
                            errors={errors}
                        />

                    </div> */}
                    <div className='my-3'>
                        <TextareaInput
                            label="Notes"
                            name="notes"
                            register={register}
                            errors={errors}
                        />
                        {/* <Imageinput
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                            endpoint="imageUploader"
                            label="Photo"
                            className='pt-5'
                        /> */}
                    </div>
                </div>
                <div className='flex justify-center'>
                    <SubmitButton
                        isLoading={loading}
                        buttonTitle="Add New teacher"
                        LoadingButtonTitle="Adding teacher, please wait..."
                    />
                </div>
            </form>
        </div>
    );
};

export default Teacher;
