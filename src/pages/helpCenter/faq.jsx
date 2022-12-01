import Acardeon from "../../components/acardeon";
import { faq_data } from "../../data/faq";
import ContactHomePage from "./components/contactHomePage";
const Faq = () => {
  return (
    <div className="px-4 sm:px-6 text-right max-w-[1300px] mx-auto">
      <Acardeon data={faq_data}/>
      <ContactHomePage />
    </div>
  );
};

export default Faq;
