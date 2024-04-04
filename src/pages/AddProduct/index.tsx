import { useForm } from "react-hook-form"
import attachmentIcon from "../../assets/icons/attachment.svg"
import crossIcon from "../../assets/icons/cross.svg"
import AppFormErrorLine from "../../components/reusable/errors/AppFormErrorLine"


const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleFormSubmit = () => {
        console.log("called");

    }
    console.log(errors);

    return <form onSubmit={handleSubmit(handleFormSubmit)} className=" gap-5 flex  items-center ">

        {/* basic information */}
        <div className="w-[558px]  ">
            <div className="bg-white min-h-[657px] rounded-[20px] border border-[#F3F4F6]  p-6">

                <h3 className="font-inter font-semibold text-xl ">Basic Information</h3>
                <p className="font-inter text-sm text-[#6B7280] mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>

                {/* product Name */}
                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter font-medium text-[#6B7280] text-base" htmlFor="pname">Product Name*</label>
                    <input
                        {...register("productName",
                            {
                                required: { value: true, message: "The Product name is required" },
                                minLength: { value: 3, message: "The minimum length of the product is 3 characters" },
                                maxLength: { value: 100, message: "The maximun length of the product is 100 characters" },
                            })}
                        className="h-[58px] w-[510px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., Tomato" id="pname" />
                    {
                        errors.productName && <AppFormErrorLine message={errors.productName.message as String} />
                    }
                </div>

                {/* Product desc */}
                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter text-[#6B7280] font-medium text-base" htmlFor="productDesc">Product Description*</label>
                    <textarea
                        {...register("productDesc",
                            {
                                required: { value: true, message: "The Product Desc is required" },
                                minLength: { value: 5, message: "The minimum length of the product is 5 characters" }
                            })}
                        className="h-[112px] w-[510px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none resize-none" placeholder="Description goes here...." id="productDesc" />
                    {
                        errors.productDesc && <AppFormErrorLine message={errors.productDesc.message as String} />
                    }
                </div>


                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter font-medium text-[#6B7280] text-base" htmlFor="keyFeatures">Key Features*</label>
                    <textarea
                        {...register("keyFeatures",
                            {
                                required: { value: true, message: "The keyFeatures is required" },
                                minLength: { value: 5, message: "The minimum length of the keyFeatures is 5 characters" }
                            })}
                        className="h-[112px] w-[510px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none resize-none" placeholder="Key Features" id="keyFeatures" />
                    {
                        errors.keyFeatures && <AppFormErrorLine message={errors.keyFeatures.message as String} />
                    }
                </div>

                <div className="flex items-center justify-center gap-7">
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-[#6B7280] text-base" htmlFor="productWeight">Product Weight*</label>
                        <input
                            {...register("productWeight",
                                {
                                    required: { value: true, message: "The productWeight is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., 24kg" id="productWeight" />
                        {
                            errors.productWeight && <AppFormErrorLine message={errors.productWeight.message as String} />
                        }
                    </div>

                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base" htmlFor="productColor">Product Color*</label>
                        <input
                            {...register("productColor",
                                {
                                    required: { value: true, message: "The productColor is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., 24kg" id="productColor" />
                        {
                            errors.productColor && <AppFormErrorLine message={errors.productColor.message as String} />
                        }
                    </div>
                </div>
            </div>

            {/* Inventory Management */}

            <div className="mt-5  bg-white min-h-[202px]  rounded-[20px] border border-[#F3F4F6]  p-6">

                <h3 className="text-[20px] font-semibold font-inter text-[#374151]">Inventory Management</h3>
                <p className="font-inter font-normal text-sm mt-[2px] text-[#6B7280]">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <div className="flex items-center justify-center gap-7">
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-[#6B7280]" htmlFor="skuCode">SKU Code*</label>
                        <input
                            {...register("skuCode",
                                {
                                    required: { value: true, message: "The skuCode is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., KG-293-001" id="skuCode" />
                        {
                            errors.skuCode && <AppFormErrorLine message={errors.skuCode.message as String} />
                        }
                    </div>

                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-[#6B7280]" htmlFor="stock">Stock*</label>
                        <input
                            {...register("stock",
                                {
                                    required: { value: true, message: "The stock is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., 256" id="stock" />
                        {
                            errors.stock && <AppFormErrorLine message={errors.stock.message as String} />
                        }
                    </div>
                </div>

            </div>

        </div>

        {/* Upload Product Images */}
        <div className="w-[558px] ">
            <div className="bg-white min-h-[466px] rounded-[20px] border border-[#F3F4F6]  p-6">
                <h3 className="font-inter font-semibold text-xl ">Upload Product Images</h3>
                <p className="font-inter text-sm text-[#6B7280] mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>

                <div className="h-[128px] mt-6 max-w-[510px] flex gap-3 flex-col justify-center items-center rounded-xl border-2 border-dashed border-[#D1D5DB]">
                    <div className="text-center">
                        <img className="h-10 w-40" src={attachmentIcon} alt="" />
                    </div>
                    <div className="">
                        <h3 className="font-inter font-semibold text-xl ">Drag or Browse File</h3>
                    </div>
                </div>

                {/* uploaded files */}
                <div className="mt-3 text-[#6B7280] h-[193px]  max-w-[510px]">
                    <h6 className="text-[#6B7280] text-sm font-inter">Uploaded files</h6>
                    <div className=" container max-h-[164px] overflow-y-auto scrollbar-sm  mt-2 flex flex-col gap-2 justify-center ">
                        <div className="flex justify-between bg-[#F9FAFB] max-w-[492px] rounded-xl py-5 px-6">
                            <h6 className="font-inter font-medium text-sm">File_name_123.jpg</h6>
                            <button>
                                <img className="h-6 w-6" src={crossIcon} alt="" />
                            </button>
                        </div>
                        <div className="flex justify-between bg-[#F9FAFB] max-w-[492px] rounded-xl py-5 px-6">
                            <h6 className="font-inter font-medium text-sm">File_name_123.jpg</h6>
                            <button>
                                <img className="h-6 w-6" src={crossIcon} alt="" />
                            </button>
                        </div>


                    </div>
                </div>

            </div>

            <div className="bg-white mt-4 min-h-[311px]  rounded-[20px] border border-[#F3F4F6]  p-6">
                <h3 className="font-inter font-semibold text-xl ">Category</h3>
                <p className="font-inter text-sm text-[#6B7280] mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>
                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter font-medium text-base text-[#6B7280]" htmlFor="category">Select Category*</label>
                    <input
                        {...register("category",
                            {
                                required: { value: true, message: "The category is required" }
                            })}
                        className="h-[58px] max-w-[510px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., Category" id="category" />
                    {
                        errors.category && <AppFormErrorLine message={errors.category.message as String} />
                    }
                </div>
                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter font-medium text-base text-[#6B7280]" htmlFor="category">Select Subcategory*</label>
                    <input
                        {...register("subCategory",
                            {
                                required: { value: true, message: "The subCategory is required" }
                            })}
                        className="h-[58px] max-w-[510px] rounded-xl py-[18px] px-4 bg-[#F9FAFB] text-lg border-[#F3F4F6] border outline-none" type="text" placeholder="eg., sub-category-1, sub-category-2, sub-category-3 " id="category" />
                    {
                        errors.subCategory && <AppFormErrorLine message={errors.subCategory.message as String} />
                    }
                </div>

            </div>

            <div className="text-end mt-3">
                <button className="bg-[#F97316] text-white py-5 px-12 rounded-xl" >Add Product</button>
            </div>

        </div>


    </form>


}

export default AddProduct