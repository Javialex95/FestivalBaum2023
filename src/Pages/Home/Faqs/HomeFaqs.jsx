import { Accordion } from "../../../Common/Accordion";

export const HomeFaqs = ({faqs}) => {
  return (
    <section className="home_faqs max_width_container">
      <h1>FAQS</h1>

      <Accordion items={faqs} />
    </section>
  );
};
