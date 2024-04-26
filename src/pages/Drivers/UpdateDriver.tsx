import React, { useEffect, useRef } from "react"
import crossSvg from "../../assets/icons/cross-black.svg"
import uploadIcon from "../../assets/icons/upload-black.svg"
import Button from "../../components/reusable/Button";
import checkIcon from "../../assets/icons/checked.svg"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AppFormErrorLine from "../../components/reusable/AppFormErrorLine";
import { drivers } from "../../assets/mockData/driverData";



interface driverIdInterFace {
    driverId?: String
}

const AddDriver: React.FC<driverIdInterFace> = ({ driverId }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()



    const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);
    };

    const filteredDriver = drivers.find(item => item.id === driverId)
    useEffect(() => {
        if (filteredDriver) {
            for (const item of Object.keys(filteredDriver)) {
                if (typeof filteredDriver[item as keyof typeof filteredDriver] === 'string') {
                    setValue(item, filteredDriver[item])
                }
            }
        }
    }, [driverId, filteredDriver])


    return (
        <div>
            <dialog id="updateDriverModal" className="modal">

                <div className="modal-box p-8 min-w-[752px] scrollbar-md">
                    <form method="dialog" className="flex flex-col gap-6 justify-center w-full">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <h1 className="font-medium text-[28px] text-accent-700">Update Driver</h1>
                                <p className="text-sm font-normal text-accent-500 ">Lorem ipsum dolor sit amet consectetur. Tortor elit </p>
                            </div>
                            <button type="submit">
                                <img className="h-8 w-8" src={crossSvg} alt="" />
                            </button>
                        </div>
                    </form>

                    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex pt-6 flex-col gap-6 justify-center w-full">
                        <div className="flex  items-center  gap-[26px]">
                            <div className="flex flex-col justify-center gap-[6px]">
                                <label className="text-accent-500 text-base font-medium" htmlFor="fullName">Full Name*</label>
                                <div className="py-[18px] px-4 bg-accent-50 border-accent-100 border rounded-xl w-[331px]">
                                    <input
                                        {...register("fullName", {
                                            required: { value: true, message: "This field is required" }
                                        })}
                                        type="text" className="outline-none text-[18px]  font-medium  w-full bg-accent-50" placeholder="eg., John Doe" id="fullName" />
                                </div>
                                <AppFormErrorLine message={errors.fullName?.message as String} />
                            </div>
                            <div className="flex flex-col justify-center gap-[6px]">
                                <label className="text-accent-500 text-base font-medium" htmlFor="mobile">Mobile No*</label>
                                <div className="py-[18px] px-4 bg-accent-50 border-accent-100 border rounded-xl w-[331px]">
                                    <input
                                        {...register("mobile", {
                                            required: { value: true, message: "This field is required" }
                                        })}
                                        type="text" className="outline-none text-[18px]  font-medium  w-full bg-accent-50" name="mobile" placeholder="eg., +91 9284729802" id="mobile" />
                                </div>
                                <AppFormErrorLine message={errors.mobile?.message as String} />
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-[6px]">
                            <label className="text-accent-500 text-base font-medium" htmlFor="address">Address*</label>
                            <div className="py-[18px] px-4 bg-accent-50 border-accent-100 border rounded-xl w-full h-[114px] ">
                                <textarea
                                    {...register("address", {
                                        required: { value: true, message: "This field is required" }
                                    })}
                                    className="outline-none text-[18px]  font-medium  w-full bg-accent-50 resize-none scrollbar-md" name="address" placeholder="eg., address" id="address" />
                            </div>
                            <AppFormErrorLine message={errors.address?.message as String} />
                        </div>

                        <div className="flex  items-center  gap-[26px]">
                            <div className="flex flex-col justify-center gap-[6px]">
                                <label className="text-accent-500 text-base font-medium" htmlFor="vehicleModel">Vehicle Model*</label>
                                <div className="py-[18px] px-4 bg-accent-50 border-accent-100 border rounded-xl w-[331px]">
                                    <input
                                        {...register("vehicleModel", {
                                            required: { value: true, message: "This field is required" }
                                        })}
                                        type="text" className="outline-none text-[18px]  font-medium  w-full bg-accent-50" name="vehicleModel" placeholder="eg., Jawa 42 Bobber " id="vehicleModel" />
                                </div>
                                <AppFormErrorLine message={errors.vehicleModel?.message as String} />
                            </div>
                            <div className="flex flex-col justify-center gap-[6px]">
                                <label className="text-accent-500 text-base font-medium" htmlFor="vehicleNo">Vehicle No*</label>
                                <div className="py-[18px] px-4 bg-accent-50 border-accent-100 border rounded-xl w-[331px]">
                                    <input
                                        {...register("vehicleNo", {
                                            required: { value: true, message: "This field is required" }
                                        })}
                                        type="text" className="outline-none text-[18px]  font-medium  w-full bg-accent-50" name="vehicleNo" placeholder="eg., TN 23 HF 9283" id="vehicleNo" />
                                </div>
                                <AppFormErrorLine message={errors.vehicleNo?.message as String} />
                            </div>
                        </div>

                        <div role="button" onClick={() => {
                            if (inputRef?.current) {
                                inputRef?.current?.click()
                            }
                        }} className="flex flex-col justify-center gap-[6px]">
                            <label className="text-accent-500 text-base font-medium" htmlFor="proofId">Proof ID*</label>
                            <div className="flex  items-center justify-between w-full rounded-xl border border-accent-100 bg-accent-50 py-[18px] px-4  ">
                                <span className="text-base font-medium text-accent-500 ">Upload Proof</span>
                                <img className="h-6 w-6" src={uploadIcon} alt="" />
                                <input ref={inputRef} type="file" className="hidden" />
                            </div>

                        </div>

                        <div className="flex justify-end ">
                            <Button type="submit" className="flex justify-center items-center gap-2 px-6 py-4">
                                <span>Update</span>
                                <img src={checkIcon} alt="" />
                            </Button>
                        </div>
                    </form>

                </div>
            </dialog >

        </div >
    )
}

export default AddDriver