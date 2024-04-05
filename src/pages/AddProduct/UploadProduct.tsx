import React, { DragEvent, useRef, useState } from 'react'
import attachmentIcon from "../../assets/icons/attachment.svg"
import crossIcon from "../../assets/icons/cross.svg"
import checkIcon from "../../assets/icons/check.svg"
import AppFormErrorLine from '../../components/reusable/errors/AppFormErrorLine'

export type error = {
    category?: {
        message: String
    },
    subCategory?: {
        message: String
    },
    productImages?: {
        message: String
    },
}

interface UploadProduct {
    register: Function,
    errors: error
}

const UploadProduct: React.FC<UploadProduct> = ({ register, errors }) => {


    const [selectedImages, setSelectedImages] = useState<File[]>([])
    const [isFileDropping, setIsFileDropping] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOpenInput = () => {
        inputRef?.current?.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target
        if (files && files.length > 0) {
            setSelectedImages([...selectedImages, ...files])
        }
    }
    const handleDrop = (e: DragEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsFileDropping(false);
        const files = e.dataTransfer.files;
        if (files.length === 0) return;
        setSelectedImages([...selectedImages, ...files])
    };

    return (
        <div>

            <div className="max-w-[558px] min-w-[450px] ">
                <div className="bg-white min-h-[466px] rounded-[20px] border border-accent-100  p-6">
                    <h3 className="font-inter font-semibold text-xl ">Upload Product Images</h3>
                    <p className="font-inter text-sm text-accent-500 mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>

                    {/* file input 👇  */}
                    <div className={` h-[128px] mt-6 max-w-[510px] flex gap-3 flex-col justify-center items-center rounded-xl border-2 border-dashed border-accent-300 ${isFileDropping && "shadow-md"}`}>
                        <div className="text-center">
                            <button
                                onDrop={handleDrop}
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setIsFileDropping(true);
                                }}
                                onDragLeave={() => {
                                    setIsFileDropping(false);
                                }}
                                onClick={handleOpenInput}
                                type='button'
                                className={`h-10 w-40  rounded-md ${isFileDropping ? 'bg-gray-200 shadow-xl' : ''}`}
                            >
                                <img className='w-full h-full' src={attachmentIcon} alt="" />
                            </button>
                            <input
                                multiple
                                onChange={handleImageChange}
                                ref={inputRef}
                                className='hidden'
                                type="file"
                            />
                        </div>
                        <div className="">
                            <h3 className="font-inter font-semibold text-xl ">Drag or Browse File</h3>
                        </div>
                    </div>
                    <AppFormErrorLine message={errors?.productImages?.message as String} />

                    {/* uploaded files */}
                    <div className="mt-3 text-accent-500 h-[193px]  max-w-[510px]">
                        {
                            selectedImages.length === 0 ? <>
                                <div className="h-full w-full flex justify-center items-center ">
                                    <h1>You have No Selected images !</h1>
                                </div>
                            </>
                                : <>
                                    <h6 className="text-accent-500 text-sm font-inter">
                                        Uploaded files
                                    </h6>
                                    <div className="  overflow-y-auto scrollbar-sm  mt-2 flex flex-col gap-2 justify-center ">
                                        <div className="h-[164px]">

                                            {
                                                selectedImages.map(item => <div className="flex  
                                                my-1 justify-between bg-accent-50 max-w-[492px] rounded-xl py-5 px-6">
                                                    <h6 className="font-inter text-wrap  font-medium text-sm">
                                                        <a
                                                            className='hover:underline font-medium text-sm'
                                                            target='_blank'
                                                            href={URL.createObjectURL(item)}>
                                                            {item.name}
                                                        </a>
                                                    </h6>
                                                    <button type='button' onClick={e => setSelectedImages(selectedImages.filter(f => f.name !== item.name))} className='h-6 w-6'>
                                                        <img className="h-full w-full" src={crossIcon} alt="" />
                                                    </button>
                                                </div>)
                                            }

                                        </div>

                                    </div>
                                </>
                        }
                    </div>

                </div>

                <div className="bg-white mt-4 min-h-[311px]  rounded-[20px] border border-accent-100  p-6">
                    <h3 className="font-inter font-semibold text-xl ">Category</h3>
                    <p className="font-inter text-sm text-accent-500 mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-accent-500" htmlFor="category">Select Category*</label>
                        <input
                            {...register("category",
                                {
                                    required: { value: true, message: "The category is required" }
                                })}
                            className="h-[58px] max-w-[510px] rounded-xl py-[18px] px-4 bg-accent-50 text-lg border-accent-100 border outline-none" type="text" placeholder="eg., Category" id="category" />
                        {
                            errors.category && <AppFormErrorLine message={errors.category.message as String} />
                        }
                    </div>
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-accent-500" htmlFor="category">Select Subcategory*</label>
                        <input
                            {...register("subCategory",
                                {
                                    required: { value: true, message: "The subCategory is required" }
                                })}
                            className="h-[58px] max-w-[510px] rounded-xl py-[18px] px-4 bg-accent-50 text-lg border-accent-100 border outline-none" type="text" placeholder="eg., sub-category-1, sub-category-2, sub-category-3 " id="category" />
                        {
                            errors.subCategory && <AppFormErrorLine message={errors.subCategory.message as String} />
                        }
                    </div>

                </div>

                <div className="flex justify-end items-center mt-6">
                    <button className="bg-primary-500 text-white py-4 px-10 rounded-xl flex justify-center items-center gap-1" >Add Product
                        <img className='h-4' src={checkIcon} alt="" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default UploadProduct