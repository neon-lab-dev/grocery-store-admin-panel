import backArrowIcon from "../../assets/icons/back-arrow.svg";
import checkIcon from "../../assets/icons/check.svg";
import { useForm } from "react-hook-form";
import FormErrorLine from "../../components/reusable/FormErrorLine";
import UploadProduct, { error } from "./UploadImage";
import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../../components/reusable/Button";
import { Link, useParams } from "react-router-dom";
import add from "../../assets/icons/add-circle-orange.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import eye from "../../assets/icons/eye.svg";
import AddVarietyModal from "./AddVarietyModal";
import editIcon from "../../assets/icons/fi-br-edit.svg";
import AddCategory from "./AddCategory";
import AddSubCategory from "./AddSubCategory";
import caretDownSvg from "../../assets/icons/caret-down.svg";
import caretUpSvg from "../../assets/icons/caret-up.svg";
import addCircleOrangeSvg from "../../assets/icons/add-circle-orange.svg";

const category = [
  "Fruit & Vegetables",
  "Frozen Food",
  "Chips & Namkin ",
  "Juice & Beverages",
];

const subCategories = [
  "Fresh Fruits",
  "Fresh Vegetables",
  "Coriander & Others",
  "Seasonal",
  "Certified Organics",
];

const AddProduct = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [subcategoryDropdown, setSubcategoryDropdown] = useState(false);

  const handleFormSubmit = () => {
    if (selectedImages.length === 0) {
      Swal.fire({
        title: "Please select image",
        text: "You have not selected an image",
        icon: "error",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className=" flex justify-between items-center mb-8">
          <Link to="/products" className="w-[116px]">
            <Button
              variant="accent/200"
              className="flex justify-center items-center gap-2 w-full"
            >
              <img src={backArrowIcon} alt="" />
              <span className="text-base font-medium text-accent-600">
                Back
              </span>
            </Button>
          </Link>
          <div className="flex justify-end items-center gap-4">
            {!id ? (
              <Button className="flex justify-center items-center gap-2 w-[196px]">
                Create Product
                <img className="h-4" src={checkIcon} alt="" />
              </Button>
            ) : (
              <>
                {isEditing ? (
                  <>
                    <Button
                      onClick={() => setIsEditing(false)}
                      variant="primary-outline"
                      className="flex justify-center items-center gap-2 w-[127px]"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setIsEditing(false)}
                      className="flex justify-center items-center gap-2 w-[127px]"
                    >
                      Done
                      <img className="h-4" src={editIcon} alt="" />
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="flex justify-center items-center gap-2 w-[176px]"
                  >
                    Edit Product
                    <img className="h-4" src={editIcon} alt="" />
                  </Button>
                )}
              </>
            )}
          </div>
        </div>

        <div className="max-w-[1500px] w-full  lg:flex-row  gap-5 grid  mb-44 grid-cols-5">
          {/* basic information */}
          <div className="w-full col-span-3 flex flex-col gap-6">
            <div className="bg-white w-full xl:w-full rounded-[20px] border border-accent-50  p-6">
              <h3 className="font-inter font-semibold text-xl ">
                Basic Information
              </h3>
              <p className="font-inter text-sm text-accent-500 mt-1">
                Lorem ipsum dolor sit abet consectetur. Tortor elit
              </p>

              {/* product Name */}
              <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                <label
                  className="font-inter font-medium text-accent-500 text-base"
                  htmlFor="pname"
                >
                  Product Name*
                </label>
                <input
                  {...register("productName", {
                    required: {
                      value: true,
                      message: "The Product name is required",
                    },
                  })}
                  className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
                  type="text"
                  placeholder="eg., Tomato"
                  id="pname"
                />
                {errors.productName && (
                  <FormErrorLine
                    message={errors.productName.message as String}
                  />
                )}
              </div>

              {/* Product desc */}
              <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                <label
                  className="font-inter text-accent-500 font-medium text-base"
                  htmlFor="productDesc"
                >
                  Product Description*
                </label>
                <textarea
                  {...register("productDesc", {
                    required: {
                      value: true,
                      message: "The Product desc is required",
                    },
                  })}
                  className="h-[112px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none resize-none"
                  placeholder="Description goes here...."
                  id="productDesc"
                />
                {errors.productDesc && (
                  <FormErrorLine
                    message={errors.productDesc.message as String}
                  />
                )}
              </div>
            </div>

            {/* Upload Product Images */}
            <div className="w-full col-span-2">
              <UploadProduct
                selectedImages={selectedImages}
                setSelectedImages={setSelectedImages}
                errors={errors as error}
                register={register}
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-2 w-full">
            {/* Product Varieties */}
            <div className="bg-white rounded-[20px] border border-accent-100  p-6">
              <h3 className="text-[20px] font-semibold font-inter text-accent-700">
                Product Varieties
              </h3>
              <p className="font-inter font-normal text-sm mt-[2px] text-accent-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>

              <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-7">
                <div className="mt-5 w-full flex flex-col justify-center gap-[6px] ">
                  <div className="font-inter font-medium text-base text-accent-500">
                    Variety*
                  </div>
                  <div className="relative w-full">
                    <input
                      {...register("Varieties", {
                        required: {
                          value: true,
                          message: "Tags are required",
                        },
                      })}
                      className="h-[58px] w-full rounded-xl py-[18px] px-4 bg-background text-lg border-accent-100 border outline-none"
                      type="text"
                      placeholder="eg., variety1"
                    />
                    <div className="flex items-center justify-center gap-2 absolute top-1/2 -translate-y-1/2 right-3">
                      <button
                        onClick={() => {
                          document
                            .getElementById("add_variety_modal")
                            // @ts-ignore
                            ?.showModal();
                        }}
                        type="button"
                      >
                        <img src={eye} alt="" className="text-red-500" />
                      </button>
                      <button type="button">
                        <img src={deleteIcon} alt="" className="text-red-500" />
                      </button>
                    </div>
                  </div>
                  {errors.varieties && (
                    <FormErrorLine
                      message={errors.varieties.message as String}
                    />
                  )}
                </div>
              </div>
              <Button
                onClick={() => {
                  // @ts-ignore
                  document.getElementById("add_variety_modal")?.showModal();
                }}
                type="button"
                variant="primary-outline"
                className="w-full mt-5 border-primary-300 text-primary-500 bg-primary-50 flex items-center justify-center border-dashed gap-4"
              >
                <span>Add More Varieties</span>
                <img src={add} alt="" className="h-5 w-5" />
              </Button>
            </div>
            <div className="bg-white mt-4 min-h-[311px]  rounded-[20px] border border-accent-100  p-6">
              <h3 className="font-inter font-semibold text-xl ">Category</h3>
              <p className="font-inter text-sm text-accent-500 mt-1">
                Lorem ipsum dolor sit abet consectetur. Tortor elit
              </p>

              {/* category */}
              <div className="z-50 mt-5 flex flex-col justify-center gap-[6px] ">
                <label
                  className="font-inter font-medium text-base text-accent-500"
                  htmlFor="category"
                >
                  Select Category*
                </label>
                <div className="min-w-[259px]  max-w-full relative">
                  <div
                    onClick={() => setCategoryDropdown((prev) => !prev)}
                    role="button"
                    className={`h-[55px]
                              bg-accent-50 py-[18px] px-4  border border-accent-100
                               rounded-xl ${
                                 categoryDropdown && "rounded-b-none"
                               }  w-full flex justify-between `}
                  >
                    <span className="font-medium text-base text-accent-600">
                      Select Category
                    </span>
                    <span>
                      <img
                        src={categoryDropdown ? caretUpSvg : caretDownSvg}
                        alt=""
                      />
                    </span>
                  </div>
                  {categoryDropdown && (
                    <div
                      role="button"
                      className="w-full z-50 bg-accent-100 shadow-md  rounded-xl  rounded-t-none absolute"
                    >
                      <div className="overflow-y-auto max-h-[242px] scrollbar-md">
                        {category.map((item) => (
                          <label
                            htmlFor={item}
                            role="button"
                            className="flex justify-between items-center  w-full p-4  border-t border-accent-200"
                          >
                            <div className="text-sm cursor-pointer flex-1 font-medium text-accent-600 font-inter">
                              {item}
                            </div>
                            <input
                              value={item}
                              className="radio radio-xs radio-error"
                              type="radio"
                              name={"category"}
                              id={item}
                            />
                          </label>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          if (document) {
                            (
                              document.getElementById(
                                "addCategoryModal"
                              ) as HTMLFormElement
                            ).showModal();
                          }
                        }}
                        type="button"
                        className="px-4 bg-primary-200 flex justify-center gap-2 items-center py-2.5 w-full border-t border-accent-200"
                      >
                        <span className="text-base font-medium text-primary-500">
                          Add new Category
                        </span>
                        <img src={addCircleOrangeSvg} alt="" />
                      </button>
                    </div>
                  )}
                </div>

                {errors.category && (
                  <FormErrorLine message={errors.category.message as String} />
                )}
              </div>

              {/* sub category */}
              <div className="mt-5 flex flex-col justify-center gap-[6px] ">
                <label
                  className="font-inter font-medium text-base text-accent-500"
                  htmlFor="category"
                >
                  Select Category*
                </label>
                <div className="min-w-[259px]  max-w-full relative">
                  <div
                    onClick={() => setSubcategoryDropdown((prev) => !prev)}
                    role="button"
                    className={`h-[55px]
                              bg-accent-50 py-[18px] px-4  border border-accent-100 z-0
                               rounded-xl ${
                                 subcategoryDropdown ? "rounded-b-none" : ""
                               }  w-full flex justify-between `}
                  >
                    <span className="font-medium text-base text-accent-600">
                      Select Subcategory
                    </span>
                    <span>
                      <img
                        src={subcategoryDropdown ? caretUpSvg : caretDownSvg}
                        alt=""
                      />
                    </span>
                  </div>
                  {subcategoryDropdown && (
                    <div
                      role="button"
                      className="w-full bg-accent-100 shadow-md overflow-y-auto rounded-xl rounded-t-none absolute"
                    >
                      <div className="overflow-y-auto max-h-[242px] scrollbar-md">
                        {subCategories.map((item) => (
                          <label
                            htmlFor={item}
                            role="button"
                            className="flex justify-between items-center  w-full p-4  border-t border-accent-200"
                          >
                            <div className="text-sm cursor-pointer flex-1 font-medium text-accent-600 font-inter">
                              {item}
                            </div>
                            <input
                              value={item}
                              className="checkbox checkbox-xs  checkbox-warning rounded-md"
                              type="checkbox"
                              name={"category"}
                              id={item}
                            />
                          </label>
                        ))}
                      </div>
                      <div className="px-4  bg-primary-200 flex py-2.5 w-full border-t border-accent-200">
                        <button
                          onClick={() => {
                            if (document) {
                              (
                                document.getElementById(
                                  "addSubCategoryModal"
                                ) as HTMLFormElement
                              ).showModal();
                            }
                          }}
                          type="button"
                          className="flex justify-center items-center gap-2 w-full"
                        >
                          <span className="text-base font-medium text-primary-500">
                            Add new Subcategory
                          </span>
                          <img src={addCircleOrangeSvg} alt="" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {errors.category && (
                  <FormErrorLine message={errors.category.message as String} />
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
      <AddVarietyModal />
      <AddCategory />
      <AddSubCategory />
    </>
  );
};

export default AddProduct;