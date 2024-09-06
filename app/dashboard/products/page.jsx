import Pagination from "@/app/components/dashboard/pagination/Pagination";
import Search from "@/app/components/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";
// import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);
  return (
    <div className="bg-bgSoft p-5 rounded-md mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a User..."} />
        <Link href={"/dashboard/products/add"}>
          <button className="p-2.5 bg-[#5d57c9] text-textPrimary rounded-md border-none">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead className="">
          <tr className="">
            <td className="py-5">Title</td>
            <td className="py-5">Description</td>
            <td className="py-5">Price</td>
            <td className="py-5">Created At</td>
            <td className="py-5">Stock</td>
            <td className="py-5">Action</td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr className="hover:bg-[#2e374a] rounded-md">
                <td className="py-5 px-2">
                  <div className="flex gap-2.5 items-center">
                    <Image
                      //   src={"/user.png"}
                      src={`/${product.image || "noproduct.jpg"}`}
                      width={40}
                      height={40}
                      alt="product image"
                      className="object-cover rounded-full"
                    />
                    {product.title}
                  </div>
                </td>
                <td className="py-5 px-2">{product.desc}</td>
                <td className="py-5 px-2">{product.price}</td>
                <td className="py-5 px-2">
                  {product.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="py-5 px-2">{product.stock}</td>
                <td className="py-5 px-2 flex gap-5">
                  <div className=""></div>
                  <div className="flex gap-5">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className="py-1.5 px-2.5 rounded-md bg-teal-500 text-textPrimary border-none ">
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct} className="">
                      <input type="hidden" name="id" value={product.id} />
                      <button className="py-1.5 px-2.5 rounded-md bg-red-700 text-textPrimary border-none ">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
