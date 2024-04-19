import React, { useRef, useState } from 'react'
import attachmentIcon from "../../assets/icons/attachment.svg"
import crossIcon from "../../assets/icons/cross.svg"
import caretDownSvg from "../../assets/icons/caret-down.svg"
import caretUpSvg from "../../assets/icons/caret-up.svg"
import addCircleOrangeSvg from "../../assets/icons/add-circle-orange.svg"
import AppFormErrorLine from '../../components/reusable/errors/AppFormErrorLine'
import Swal from 'sweetalert2'
import AddCategory from './AddCategory'
import AddSubCategory from './AddSubCategory'

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
    errors: error,
    setSelectedImages: Function,
    selectedImages: File[]
}

const UploadProduct: React.FC<UploadProduct> = ({ register, errors, selectedImages, setSelectedImages }) => {


    const [isFileDropping, setIsFileDropping] = useState(false);
    const [categoryDropdown, setCategoryDropdown] = useState(false)
    const [subcategoryDropdown, setSubcategoryDropdown] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpenInput = () => {
        inputRef?.current?.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files && files.length > 0) {
            const fileList = files as FileList;
            const duplicateFiles = Array.from(fileList).filter(file =>
                selectedImages.some(selectedImage => selectedImage.name === file.name)
            )

            if (duplicateFiles.length > 0) {
                // Display error message
                Swal.fire({
                    title: "Duplicate Image",
                    text: "You have already selected this image. Please select a different one.",
                    icon: "error"
                });
                event.target.value = ''
            } else {
                setSelectedImages([...selectedImages, ...Array.from(fileList)]);
            }
        }
    };


    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsFileDropping(false);
        const files = event.dataTransfer.files;
        if (files.length === 0) return;
        if (files && files.length > 0) {
            const fileList = files as FileList;
            const duplicateFiles = Array.from(fileList).filter(file =>
                selectedImages.some(selectedImage => selectedImage.name === file.name)
            );

            if (duplicateFiles.length > 0) {
                // Display error message
                Swal.fire({
                    title: "Duplicate Image",
                    text: "You have already selected this image. Please select a different one.",
                    icon: "error"
                });
            } else {
                setSelectedImages([...selectedImages, ...Array.from(fileList)]);
            }
        }
    };


    const category = [
        "Fruit & Vegetables",
        "Frozen Food",
        "Chips & Namkin ",
        "Juice & Beverages",
    ]

    const subCategories = [
        "Fresh Fruits",
        "Fresh Vegetables",
        "Coriander & Others",
        "Seasonal",
        "Certified Organics",
    ]

    return (
        <div>

            <div className="w-full">
                <div className="bg-white min-h-[466px] rounded-[20px] border border-accent-100  p-6">
                    <h3 className="font-inter font-semibold text-xl ">Upload Product Images</h3>
                    <p className="font-inter text-sm text-accent-500 mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>

                    {/* file input 👇  */}
                    <div
                        onDrop={handleDrop}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setIsFileDropping(true);
                        }}
                        onDragLeave={() => {
                            setIsFileDropping(false);
                        }}
                        className={` h-[128px] mt-6 w-ull flex gap-3 flex-col justify-center items-center rounded-xl border-2 border-dashed border-accent-300 ${isFileDropping && "shadow-md border-primary-500 "}`}>
                        <div className="text-center">
                            <button
                                onClick={handleOpenInput}
                                type='button'
                                className={`h-10 w-40  rounded-md `}
                            >
                                <img className='w-full h-full' src={attachmentIcon} alt="" />
                            </button>
                            <input
                                multiple
                                onChange={handleImageChange}
                                ref={inputRef}
                                className='hidden'
                                accept='image/*'
                                type="file"
                            />
                        </div>
                        <div className="">
                            <h3 className="font-inter font-semibold text-xl ">Drag or Browse File</h3>
                        </div>
                    </div>
                    <AppFormErrorLine message={errors?.productImages?.message as String} />

                    {/* uploaded files */}
                    <div className="mt-3 text-accent-500 h-[193px] w-full">
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
                                                my-1 justify-between bg-accent-50  rounded-xl py-5 px-6">
                                                    <h6 className="font-inter text-wrap  font-medium text-sm">
                                                        <a
                                                            className='hover:underline font-medium text-sm'
                                                            target='_blank'
                                                            href={URL.createObjectURL(item)}>
                                                            {item.name}
                                                        </a>
                                                    </h6>
                                                    <button type='button' onClick={() => setSelectedImages(selectedImages.filter(f => f.name !== item.name))} className='h-6 w-6'>
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

                    {/* category */}
                    <div className="z-50 mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-accent-500" htmlFor="category">Select Category*</label>
                        <div className="min-w-[259px]  max-w-full relative">
                            <div onClick={() => setCategoryDropdown((prev) => !prev)} role="button" className={`h-[55px]
                              bg-accent-50 py-[18px] px-4  border border-accent-100
                               rounded-xl ${categoryDropdown && "rounded-b-none"}  w-full flex justify-between `}>
                                <span className='font-medium text-base text-accent-600'>Select Category</span>
                                <span><img src={categoryDropdown ? caretUpSvg : caretDownSvg} alt="" /></span>
                            </div>
                            {
                                categoryDropdown &&
                                <div role='button' className="w-full z-50 bg-accent-100 shadow-md  rounded-xl  rounded-t-none absolute">
                                    <div className="overflow-y-auto max-h-[242px] scrollbar-md">
                                        {
                                            category.map(item => <label htmlFor={item} role='button' className="flex justify-between items-center  w-full p-4  border-t border-accent-200">
                                                <div className='text-sm cursor-pointer flex-1 font-medium text-accent-600 font-inter'>{item}</div>
                                                <input value={item} className='radio radio-xs radio-error' type="radio" name={"category"} id={item} />
                                            </label>)
                                        }
                                    </div>
                                    <button onClick={() => {
                                        if (document) {
                                            (document.getElementById('addCategoryModal') as HTMLFormElement).showModal();
                                        }
                                    }} type='button' className="px-4  bg-primary-200 flex justify-center gap-2 items-center py-6 w-full border-t border-accent-200">
                                        <span className='text-base font-semibold text-primary-500'>Add new Category</span>
                                        <img src={addCircleOrangeSvg} alt="" />
                                    </button>
                                </div>
                            }
                        </div>

                        {
                            errors.category && <AppFormErrorLine message={errors.category.message as String} />
                        }
                    </div>

                    {/* sub category */}
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-accent-500" htmlFor="category">Select Category*</label>
                        <div className="min-w-[259px]  max-w-full relative">
                            <div onClick={() => setSubcategoryDropdown((prev) => !prev)} role="button" className={`h-[55px]
                              bg-accent-50 py-[18px] px-4  border border-accent-100 z-0
                               rounded-xl ${subcategoryDropdown && "rounded-b-none"}  w-full flex justify-between `}>
                                <span className='font-medium text-base text-accent-600'>Select Subcategory</span>
                                <span><img src={subcategoryDropdown ? caretUpSvg : caretDownSvg} alt="" /></span>
                            </div>
                            {
                                subcategoryDropdown &&
                                <div role='button' className="w-full bg-accent-100 shadow-md overflow-y-auto rounded-xl rounded-t-none absolute">
                                    <div className="overflow-y-auto max-h-[242px] scrollbar-md">
                                        {
                                            subCategories.map(item => <label htmlFor={item} role='button' className="flex justify-between items-center  w-full p-4  border-t border-accent-200">
                                                <div className='text-sm cursor-pointer flex-1 font-medium text-accent-600 font-inter'>{item}</div>
                                                <input value={item} className='checkbox checkbox-xs  checkbox-warning rounded-md' type="checkbox" name={"category"} id={item} />
                                            </label>)
                                        }
                                    </div>
                                    <div className="px-4  bg-primary-200 flex jsu py-6 w-full border-t border-accent-200">
                                        <button onClick={() => {
                                            if (document) {
                                                (document.getElementById('addSubCategoryModal') as HTMLFormElement).showModal();
                                            }
                                        }} type='button' className='flex justify-center items-center gap-2 w-full'>
                                            <span className='text-base font-semibold text-primary-500'>Add new Subcategory</span>
                                            <img src={addCircleOrangeSvg} alt="" />
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>


                        {
                            errors.category && <AppFormErrorLine message={errors.category.message as String} />
                        }
                    </div>


                </div>


            </div>

            <AddCategory />
            <AddSubCategory />

        </div>
    )
}


export default UploadProduct