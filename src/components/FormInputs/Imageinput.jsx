"use client";

import { UploadDropzone } from "@uploadthing/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

const Imageinput = ({ label, imageUrl = "", setImageUrl, className = "col-span-full", endpoint = "imageUploader" }) => {
    return (
        <div className={className}>
            <div className="flex justify-between items-center">
                <label
                    htmlFor="passport-image"
                    className="block text-sm font-medium leading-6 text-gray-200 dark:text-slate-50"
                >
                    {label}
                </label>

                {
                    imageUrl && (
                        <button
                            onClick={() => setImageUrl("")}
                            type="button"
                            className="flex space-x-2 bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4 mt-3"
                        >
                            <Pencil className="w-5 h-5 text-rose-600" />
                            <span> Change Image</span>
                        </button>
                    )}
            </div>

            {
                imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt="students photo"
                        width={450}
                        height={400}
                        className="w-full h-40 object-contain"
                    />
                ) : (
                    <UploadDropzone
                        endpoint={endpoint}
                        onClientUploadComplete={(res) => {
                            setImageUrl(res[0].url);
                            // Do something with the response
                            toast.success("Image Upload complete");
                            console.log("File:", res);
                            console.log("Uploaded Completed");
                        }}
                        onUploadError={(error) => {
                            toast.error("Image Upload Failed, Try again");
                            // Do something with the response
                            console.log(`ERROR! ${error.message}`, error);
                        }}
                    >
                    </UploadDropzone>
                )
            }
        </div>
    );
};

export default Imageinput;
