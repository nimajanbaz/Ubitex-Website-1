import Header from "../../components/header";
import CreateCryptoCard from "./components/createCryptoCard";
import CryptoCardFAQ from "./components/cryptoCardFAQ";
import CryptoCardForOrg from "./components/cryptoCardForOrg";
import CryptoCardHeader from "./components/cryptoCardHeader";
import CryptoCardVideo from "./components/cryptoCardVideo";
import WhyCryptoCard from "./components/whyCryptoCard";

const CryptoCard = () => {
  return (
    <>
      <Header title={"کریپتوکارت | صرافی ارزدیجیتال یوبیتکس"} />
      <div className="px-10 sm:px-10 max-sm:p-0 text-right mx-auto my-20 sm:w-full md:w-full lg:w-4/5 xl:w-5/6 rtl-grid flex flex-col gap-16">
        <CryptoCardHeader />
        <CryptoCardVideo />
        <WhyCryptoCard />
        <CryptoCardForOrg />
        <CryptoCardFAQ />
        <CreateCryptoCard />
      </div>
    </>
  );
};

export default CryptoCard;
