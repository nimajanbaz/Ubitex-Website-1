import Acardeon from "../../components/acardeon";
import { faq_data } from "../../data/faq";

const Faq = () => {
  return (
    <>
      <Acardeon data={faq_data}/>
    </>
  );
};

export default Faq;
