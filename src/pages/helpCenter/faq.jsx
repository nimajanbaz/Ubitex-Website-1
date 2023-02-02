import Acardeon from "../../components/acardeon";
import { faq_data } from "../../data/faq";
import ContactHomePage from "./components/contactHomePage";
import Header from "../../components/header";

const Faq = () => {
  return (
    <>
      <Header title={"سوالات متداول | صرافی ارزدیجیتال یوبیتکس"} />

      <div className="px-10 sm:px-10 max-sm:p-0 text-right mx-auto mb-20 mt-10 sm:w-full md:w-full lg:w-4/5 xl:w-5/6 space-y-10">
        <Acardeon data={faq_data} />
        <ContactHomePage />
      </div>
    </>
  );
};

export default Faq;
