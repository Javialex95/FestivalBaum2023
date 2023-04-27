import { Accordion } from "../../../Common/Accordion";

export const Cashless = ({Cashless}) => {
  return (
    <section className="home_cashless max_width_container">
      <h1>Cashless</h1>

      <Accordion type="cashless" items={Cashless} />
    </section>
  );
};
