import { SubmitHandler, useForm } from "react-hook-form";
import FormErrorLine from "../../components/reusable/FormErrorLine";
import Button from "../../components/reusable/Button";
import upload from "../../assets/icons/upload-file.svg";
import addCircle from "../../assets/icons/add-circle.svg";
import { Variety } from ".";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

interface Props {
  setVarieties: React.Dispatch<React.SetStateAction<Variety[]>>;
}

const TYPES = ["SIZE", "WEIGHT", "PACK OF", "PRICE"];
const UNITS = ["KG", "GRAM", "PCS", "S", "L", "XL", "M", "RS"];

const AddVarietyModal = ({ setVarieties }: Props) => {
  const [images, setImages] = useState<File[]>([]);
  const imagesRef = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm<Variety>();

  const onSubmit: SubmitHandler<Variety> = (data) => {
    if (images.length === 0) {
      toast.error("Please upload images");
      return;
    }
    setVarieties((prev) => [
      ...prev,
      {
        ...data,
        documents: images,
      },
    ]);
    (
      document.getElementById("add_variety_modal") as HTMLDialogElement
    )?.close();
    reset();
  };

  register("type", { required: "Variety Type is required" });
  register("units", { required: "Units is required" });

  return (
    <dialog id="add_variety_modal" className="modal !z-50">
      <div className="modal-box min-w-[632px] p-8 bg-white border border-accent-200 rounded-3xl hide-scrollbar">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-[20px] font-medium font-inter text-accent-700">
            Add New Variety
          </h3>
          <p className="font-inter font-normal text-sm mt-[2px] text-accent-500">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>

          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-7">
            <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
              <label
                className="font-inter font-medium text-base text-accent-500"
                htmlFor="type"
              >
                Variety Type*
              </label>
              <div className="dropdown w-full">
                <div
                  tabIndex={0}
                  role="button"
                  className="font-normal btn m-1 w-full text-accent-500 text-left bg-background flex items-center justify-start"
                >
                  {watch("type") ?? "Select Variety Type"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full px-4"
                >
                  {TYPES.map((type) => (
                    <li
                      key={type}
                      onClick={() => setValue("type", type)}
                      className="menu-item mt-2 cursor-pointer"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              {errors.type && <FormErrorLine message={errors.type.message} />}
            </div>
            <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
              <label
                className="font-inter font-medium text-base text-accent-500"
                htmlFor="value"
              >
                Variety Value*
              </label>
              <input
                {...register("value", {
                  required: {
                    value: true,
                    message: "Variety Value are required",
                  },
                })}
                className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
                type="text"
                placeholder="eg., Red"
              />
              {errors.value && <FormErrorLine message={errors.value.message} />}
            </div>
          </div>
          <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
            <label
              className="font-inter font-medium text-base text-accent-500"
              htmlFor="description"
            >
              Variety Description*
            </label>
            <input
              {...register("description", {
                required: {
                  value: true,
                  message: "Variety Description are required",
                },
              })}
              className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
              type="text"
              placeholder="Description goes here..."
            />
            {errors.description && (
              <FormErrorLine message={errors.description.message} />
            )}
          </div>
          <hr className="mt-5 opacity-60" />
          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-7">
            <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
              <label
                className="font-inter font-medium text-base text-accent-500"
                htmlFor="price"
              >
                Original Price*
              </label>
              <input
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price are required",
                  },
                  min: {
                    value: 0,
                    message: "Price should be greater than 0",
                  },
                })}
                className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
                type="number"
                placeholder="eg., 1000"
              />
              {errors.price && <FormErrorLine message={errors.price.message} />}
            </div>
            <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
              <label
                className="font-inter font-medium text-base text-accent-500"
                htmlFor="discounted_percent"
              >
                Discounted Percent*
              </label>
              <input
                {...register("discounted_percent", {
                  required: {
                    value: true,
                    message: "Discount Price are required",
                  },
                  min: {
                    value: 0,
                    message:
                      "Discount Price should be greater than or equal to 0",
                  },
                  max: {
                    value: 100,
                    message: "Discount Price should be less than 100",
                  },
                })}
                className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
                type="number"
                placeholder="eg., 5"
              />
              {errors.discounted_percent && (
                <FormErrorLine message={errors.discounted_percent.message} />
              )}
            </div>
          </div>
          <hr className="mt-5 opacity-60" />
          <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-7">
            <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
              <label
                className="font-inter font-medium text-base text-accent-500"
                htmlFor="units"
              >
                Units*
              </label>
              <div className="dropdown w-full">
                <div
                  tabIndex={0}
                  role="button"
                  className="font-normal btn m-1 w-full text-accent-500 text-left bg-background flex items-center justify-start"
                >
                  {watch("units") ?? "Select A Unit"}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full px-4 max-h-40 overflow-y-auto scrollbar-sm"
                >
                  {UNITS.map((type) => (
                    <li
                      key={type}
                      onClick={() => setValue("units", type)}
                      className="menu-item mt-2 cursor-pointer"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
              {errors.units && <FormErrorLine message={errors.units.message} />}
            </div>
            <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
              <label
                className="font-inter font-medium text-base text-accent-500"
                htmlFor="quantity"
              >
                Quantity*
              </label>
              <input
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required",
                  },
                  min: {
                    value: 0,
                    message: "Quantity should be greater than 0",
                  },
                })}
                className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
                type="number"
                placeholder="eg., 20"
              />
              {errors.quantity && (
                <FormErrorLine message={errors.quantity.message} />
              )}
            </div>
          </div>

          <hr className="mt-5 opacity-60" />

          <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
            <label
              className="font-inter font-medium text-base text-accent-500"
              htmlFor="description"
            >
              Variety Images*
            </label>
            <input
              ref={imagesRef as any}
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={(e) => {
                if (e.target.files) setImages(Array.from(e.target.files));
              }}
            />
            <Button
              type="button"
              onClick={() => (imagesRef.current as any).click()}
              variant="accent/200"
              className="flex items-center justify-between bg-accent-100"
            >
              <span>Upload Images </span>
              <img className="h-5 w-5" src={upload} alt="" />
            </Button>
            <div className="flex flex-col gap-1 ml-2">
              {images.map((image, index) => (
                <div key={index} className="w-full truncate">
                  <Link
                    to={URL.createObjectURL(image)}
                    target="_blank"
                    className="text-accent-500 underline"
                  >
                    {image.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <Button className="mt-5 flex gap-2 ml-auto">
            Add Variety
            <img className="h-5 w-5" src={addCircle} alt="" />
          </Button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop opacity-0">
        <button>close</button>
      </form>
    </dialog>
  );
};
export default AddVarietyModal;
