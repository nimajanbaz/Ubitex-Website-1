import { Formik, Field, Form } from "formik";
import { VscSearch } from "react-icons/vsc";
import { BiLeftArrowAlt } from "react-icons/bi";
import { QRCode } from "antd";
import { useState } from "react";



const QrCode = () => {
    const [data, setdata] = useState(null);
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
              setdata(values);
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
{data ? (<div>
<QRCode value={data.search} />
</div>) :null}
    </>
  );
}

export default QrCode;
