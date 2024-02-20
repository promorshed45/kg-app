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


const NewStudent = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const bloodGroup = [{ id: 1, title: "A+" }, { id: 2, title: "A-" }, { id: 3, title: "B+" }, { id: 4, title: "B-" }, { id: 5, title: "O+" }, { id: 6, title: "O-" }, { id: 7, title: "AB+" }, { id: 8, title: "AB-" }, { id: 9, title: "Unknown" }];
    const religion = [{ id: 1, title: "Islam" }, { id: 2, title: "Christian" }, { id: 3, title: "Sanaton" }, { id: 5, title: "Buddhist" }, { id: 12, title: "Other" }]; // corrected spelling
    const gender = [{ id: 1, title: "Male" }, { id: 2, title: "Female" }, { id: 3, title: "Other" }]; 
    const documents = [{ id: 1, title: "Nid" }, { id: 2, title: "Birth Certificate" }, { id: 3, title: "Passport" }];

    const onSubmit = data => {
        const slug = generateSlug(data.studentNameEnglish); 
        data.slug = slug;
        data.imageUrl = imageUrl;
        console.log(data);
        makePostRequest(setLoading, 'api/students', data, "Student", reset);
    };

    return (
        <div>
            <FromHeader title="Add New Student" />
            <form onSubmit={handleSubmit(onSubmit)} className='w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
                <div>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
                        <TextInput
                            label="Student's Name in English"
                            name="studentNameEnglish"
                            placeholder="Student Name in English"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            label="Student's Name in Bangla"
                            name="studentNameBangla"
                            placeholder="Student Name in Bangla"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Father's Name"
                            name="fatherName"
                            placeholder="Father Name"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            label="Mother's Name"
                            name="motherName"
                            placeholder="Mother Name"
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

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-3'>
                        <TextInput
                            label="Date of Birth:"
                            name="dateOfBirth"
                            type="date"
                            placeholder="Date of Birth"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Student Mobile Number"
                            name="studentMobile"
                            type="number"
                            placeholder="Student Mobile Number"
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Guardian Mobile Number" 
                            name="guardianMobile"
                            type="number"
                            placeholder="Guardian Number" 
                            register={register}
                            errors={errors}
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-3'>
                        <TextInput
                            label="Admission Date"
                            name="admissionDate"
                            type='date'
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Roll No."
                            name="rollNo"
                            placeholder="Roll No."
                            register={register}
                            errors={errors}
                        />
                        <TextInput
                            label="Class"
                            name="nameOfClass"
                            placeholder="Class"
                            register={register}
                            errors={errors}
                        />
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-3'>
                        <TextInput
                            label="Nationality"
                            name="nationality"
                            placeholder="Enter Nationality"
                            register={register}
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
                        <SelectInput
                            label="Blood Group"
                            name="bloodGroup"
                            placeholder="Select Blood Group"
                            register={register}
                            errors={errors}
                            options={bloodGroup}
                            hasMultipleSelect={false}
                        />
                        <SelectInput
                            label="Religion"
                            name="religion"
                            placeholder="Select Religion"
                            register={register}
                            errors={errors}
                            options={religion}
                            hasMultipleSelect={false}
                        />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 my-3'>
                        <SelectInput
                            label="Document Type"
                            name="documentType"
                            placeholder="Select Document"
                            register={register}
                            errors={errors}
                            options={documents}
                            hasMultipleSelect={false}
                        />
                        <TextInput
                            label="Document Number"
                            name="documentNumber"
                            type='number'
                            placeholder="Document Number"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div className='my-3'>
                        <TextareaInput
                            label="Notes"
                            name="notes"
                            register={register}
                            errors={errors}
                        />
                        <Imageinput
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                            endpoint="imageUploader"
                            label="Student Photo"
                        />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <SubmitButton
                        isLoading={loading}
                        buttonTitle="Add New Student"
                        LoadingButtonTitle="Adding student, please wait..."
                    />
                </div>
            </form>
        </div>
    );
};

export default NewStudent;
