import { useForm } from "react-hook-form"
import AppFormErrorLine from "../../components/reusable/errors/AppFormErrorLine"
import attachmentIcon from "../../assets/icons/attachment.svg"
import crossIcon from "../../assets/icons/cross.svg"
import UploadProduct, { error } from "./UploadProduct"

const AddProduct = () => {

    const { register, formState: { errors }, handleSubmit, watch } = useForm()

    console.log(watch());



    const handleFormSubmit = () => {
        console.log("called");

    }
    console.log(errors);

    return <form onSubmit={handleSubmit(handleFormSubmit)} className="flex-col lg:flex-row  gap-5 flex  items-center ">

        {/* basic information */}
        <div className="w-[558px]  ">
            <div className="bg-white min-h-[657px] rounded-[20px] border border-accent-50  p-6">

                <h3 className="font-inter font-semibold text-xl ">Basic Information</h3>
                <p className="font-inter text-sm text-accent-500 mt-1">Lorem ipsum dolor sit abet consectetur. Tortor elit</p>

                {/* product Name */}
                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter font-medium text-accent-500 text-base" htmlFor="pname">Product Name*</label>
                    <input
                        {...register("productName",
                            {
                                required: { value: true, message: "The Product name is required" },
                                minLength: { value: 3, message: "The minimum length of the product is 3 characters" },
                                maxLength: { value: 100, message: "The maximum length of the product is 100 characters" },
                            })}
                        className="h-[58px] w-[510px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none" type="text" placeholder="eg., Tomato" id="pname" />
                    {
                        errors.productName && <AppFormErrorLine message={errors.productName.message as String} />
                    }
                </div>

                {/* Product desc */}
                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter text-accent-500 font-medium text-base" htmlFor="productDesc">Product Description*</label>
                    <textarea
                        {...register("productDesc",
                            {
                                required: { value: true, message: "The Product Desc is required" },
                                minLength: { value: 5, message: "The minimum length of the product is 5 characters" }
                            })}
                        className="h-[112px] w-[510px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none resize-none" placeholder="Description goes here...." id="productDesc" />
                    {
                        errors.productDesc && <AppFormErrorLine message={errors.productDesc.message as String} />
                    }
                </div>


                <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                    <label className="font-inter font-medium text-accent-500 text-base" htmlFor="keyFeatures">Key Features*</label>
                    <textarea
                        {...register("keyFeatures",
                            {
                                required: { value: true, message: "The keyFeatures is required" },
                                minLength: { value: 5, message: "The minimum length of the keyFeatures is 5 characters" }
                            })}
                        className="h-[112px] w-[510px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none resize-none" placeholder="Key Features" id="keyFeatures" />
                    {
                        errors.keyFeatures && <AppFormErrorLine message={errors.keyFeatures.message as String} />
                    }
                </div>

                <div className="flex items-center justify-center gap-7">
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-accent-500 text-base" htmlFor="productWeight">Product Weight*</label>
                        <input
                            {...register("productWeight",
                                {
                                    required: { value: true, message: "The productWeight is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none" type="text" placeholder="eg., 24kg" id="productWeight" />
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
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none" type="text" placeholder="eg., 24kg" id="productColor" />
                        {
                            errors.productColor && <AppFormErrorLine message={errors.productColor.message as String} />
                        }
                    </div>
                </div>
            </div>

            {/* Inventory Management */}

            <div className="mt-5  bg-white min-h-[202px]  rounded-[20px] border border-accent-100  p-6">

                <h3 className="text-[20px] font-semibold font-inter text-accent-700">Inventory Management</h3>
                <p className="font-inter font-normal text-sm mt-[2px] text-accent-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                <div className="flex items-center justify-center gap-7">
                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-accent-500" htmlFor="skuCode">SKU Code*</label>
                        <input
                            {...register("skuCode",
                                {
                                    required: { value: true, message: "The skuCode is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none" type="text" placeholder="eg., KG-293-001" id="skuCode" />
                        {
                            errors.skuCode && <AppFormErrorLine message={errors.skuCode.message as String} />
                        }
                    </div>

                    <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                        <label className="font-inter font-medium text-base text-accent-500" htmlFor="stock">Stock*</label>
                        <input
                            {...register("stock",
                                {
                                    required: { value: true, message: "The stock is required" }
                                })}
                            className="h-[58px] w-[242px] rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none" type="text" placeholder="eg., 256" id="stock" />
                        {
                            errors.stock && <AppFormErrorLine message={errors.stock.message as String} />
                        }
                    </div>
                </div>

            </div>

        </div>

        {/* Upload Product Images */}
        <UploadProduct errors={errors as error} register={register} />


    </form>


}

export default AddProduct