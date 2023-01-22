import { Formik, Field, Form } from "formik";
import { BiLeftArrowAlt } from "react-icons/bi";
import { MdAddComment } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import TitleBox from "./titleBox";
import { createRef } from "react";
import { useState } from "react";
import Notification from "../../../components/notification";

const AddComment = ({ postId }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState(null);
  const [dialogText, setDialogText] = useState(null);

  const recaptchaRef = createRef();
  const UBITEX_GOOGLE_CAPTCHA_KEY = "6Lcex7QhAAAAAEkpJYlRTWJ9aPOexgMtebNbSCWu";

  const [verifyCaptcha, setVerifyCaptcha] = useState(false);

  const comment = async (FormData) => {
    await fetch(`https://bapi.ubitex.io/v1.0/comments/addComment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        userName: FormData.userName,
        userPhoneNumber: FormData.userPhoneNumber,
        comment: FormData.comment,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.code === 201) {
          setDialogTitle("موفق");
          setDialogText('نظر شما با موفقیت ثبت شد و بعد از تایید نمایش داده خواهد شد');
          setOpenDialog(true);
        }
      });
  };

  return (
    <>
      <div>
        <Notification
          isOpen={openDialog}
          title={dialogTitle}
          text={dialogText}
          onClose={() => setOpenDialog(false)}
        />

        <Formik
          initialValues={{
            userName: "",
            userPhoneNumber: "",
            comment: "",
          }}
          onSubmit={(values) => {
            if (verifyCaptcha) {
              comment(values);
            } else {
              setDialogTitle("خطا");
              setDialogText("موارد مورد نیاز را تکمیل نمایید");
              setOpenDialog(true);
            }
          }}>
          <div className="w-full rtl-grid">
            <div className="mb-5">
              <TitleBox
                title="نظر خود را با ما در میان بگذارید"
                icon={<MdAddComment />}
              />
            </div>
            <Form className="flex flex-col mx-auto space-y-6">
              <div className="flex justify-between items-center space-x-3 space-x-reverse">
                <Field
                  id="userName"
                  name="userName"
                  placeholder="نام و نام خانوادگی"
                  className="flex flex-auto bg-inherit border-gray-100 dark:!bg-[#051A36] !bg-gray-50 dark:border-[#092c59] p-5 outline-none text-sm rounded-md"
                />
                <Field
                  id="userPhoneNumber"
                  name="userPhoneNumber"
                  placeholder="شماره موبایل (نمایش داده نخواهد شد)"
                  className="flex flex-auto bg-inherit border-gray-100 dark:!bg-[#051A36] !bg-gray-50 dark:border-[#092c59] p-5 outline-none text-sm rounded-md"
                />
              </div>
              <Field
                id="comment"
                name="comment"
                as="textarea"
                placeholder="نظر خودتون رو بنویسید"
                className="flex flex-auto h-36 bg-inherit bborder-gray-100 dark:!bg-[#051A36] !bg-gray-50 dark:border-[#092c59] p-5 outline-none text-sm rounded-md"
              />
              <div className="flex justify-between items-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={UBITEX_GOOGLE_CAPTCHA_KEY}
                  onChange={() => {
                    setVerifyCaptcha(true);
                  }}
                  size="normal"
                />
                <button
                  type="submit"
                  className="bg-[#f39200] w-1/5 bg-opacity-10 hover:bg-opacity-20 transition-all text-[#f39200] py-3 my-auto rounded-md flex space-x-1 space-x-reverse justify-center items-center">
                  <span>ارسال نظر</span>
                  <span className="text-2xl">
                    <BiLeftArrowAlt />
                  </span>
                </button>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
};
export default AddComment;
