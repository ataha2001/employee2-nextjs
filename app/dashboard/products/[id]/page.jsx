import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = async ({params}) => {
  const {id} = params
  const product = await fetchProduct(id)
  return (
    <div className="flex gap-12 mt-5">
      <div className="flex basis-1/4 flex-col gap-5 max-h-[400px] bg-bgSoft p-5 rounded-md font-bold text-textSoft">
        <div className="relative w-full h-[300px] rounded-md overflow-hidden">
          <Image src={"/noproduct.jpg"} fill className="object-fill" />
        </div>
        {product.title}
      </div>
      <div className="flex basis-3/4 flex-col gap-5 bg-bgSoft p-5 rounded-md">
        <form action={updateProduct} method="" className=" flex flex-col">
        <input type="hidden" name="id" value={product.id} />
          <label className="font-light">Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Price</label>
              <input
                type="number"
                name="price"
                placeholder={product.price}
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Stock</label>
              <input
                type="number"
                name="stock"
                placeholder={product.stock}
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Color</label>
              <input
                type="text"
                name="color"
                placeholder={product.color}
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Size</label>
              <input
                type="text"
                name="size"
                placeholder={product.size}
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Category</label>
              <select
                name="cat"
                id="cat"
                // className="p-7  bg-bgPrimary mb-7 border-2 border-gray-700"
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              >
                <option value="general" className="bg-bgPrimary">
                  Chosee a Category
                </option>
                <option value="kitchen" className="bg-bgPrimary">
                  Kitchen
                </option>
                <option value="phone" className="bg-bgPrimary">
                  Phone
                </option>
                <option value="computer" className="bg-bgPrimary">
                  Computer
                </option>
              </select>
            </div>

            <div className="flex flex-col w-1/2">
              <label className="font-light mt-2.5">Is Active</label>
              <select
                name="isActive"
                id="isActive"
                className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
              >
                <option value={true} selected={product.isActive} className="">
                  Yes
                </option>
                <option value={false} selected={!product.isActive} className="">
                  No
                </option>
              </select>
            </div>
          </div>
          <label className="font-light mt-2.5">Description</label>
          <textarea
            name="desc"
            placeholder={product.desc}
            className="p-5 mt-2.5 border-2 border-gray-500 rounded-md bg-bgPrimary text-textPrimary"
          />
          <button className="mt-5 p-5 w-full bg-teal-500 text-textPrimary border-nonr rounded-md hover:bg-teal-300 hover:text-bgPrimary ">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
