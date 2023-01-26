import { Formik, Field, Form } from "formik";
import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { BiLeftArrowAlt } from "react-icons/bi";
import PostCard from "../components/postCard";

const Search = () => {
  const [data, setDate] = useState(null);

  const sendSearchRequest = async (FormData) => {
    await fetch(`https://bapi.ubitex.io/v1.0/search/${FormData.search}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.code === 404) {
          setDate("NULL_RES");
        } else {
          setDate(res);
        }
      });
  };

  return (
    <>
      <div className="flex flex-col items-center rounded-xl relative w-4/5 sm:h-[200px] md:h-[600px] mx-auto ">
        <img
          className="loading-animation object-cover rounded-3xl mt-10"
          src="https://bapi.ubitex.io/ipfs/167343027"
          alt=""
        />
      </div>
      <div className="relative container -mt-20 lg:-mt-40 bg-white dark:bg-[#051A36] mx-auto py-20 space-y-14 border border-gray-100 dark:border-[#092c59] rounded-3xl w-1/2 shadow-2xl my-10 flex flex-col justify-center items-center">
        <div className="text-2xl">جستجو در یوبیتکس بلاگ</div>
        <div className="flex mx-auto border border-gray-200 dark:border-[#124485] rounded-xl p-3 w-3/4">
          <Formik
            initialValues={{
              search: "",
            }}
            onSubmit={(values) => {
              sendSearchRequest(values);
            }}>
            <div className="w-full rtl-grid">
              <Form className="flex mx-auto space-x-2 space-x-reverse">
                <div className="flex my-auto mx-4">
                  <VscSearch />
                </div>
                <Field
                  id="search"
                  name="search"
                  placeholder="کلمه مورد نظر را جستجو کنید"
                  className="flex flex-auto bg-inherit border-none outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#f39200] p-2 text-white my-auto text-2xl rounded-xl ">
                  <BiLeftArrowAlt />
                </button>
              </Form>
            </div>
          </Formik>
        </div>
      </div>

      <div className="rtl-grid grid 2xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 font-display my-20 w-5/6">
        {data && data !== "NULL_RES"
          ? data.map((item) => {
              return (
                <PostCard item={item} showCategory />
              );
            })
          : data === "NULL_RES"
          ? "پستی پیدا نشد"
          : null}
      </div>
    </>
  );
}

export default Search;
