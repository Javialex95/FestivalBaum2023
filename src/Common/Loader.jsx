export const Loader = ({ loading }) => {
  return (
    <section
      className={loading ? "loader_container" : "loader_container hide_loader"}
    >
      <div className="loading loading01">
        <span>C </span>
        <span>A </span>
        <span>R </span>
        <span>G </span>
        <span>A </span>
        <span>N </span>
        <span>D </span>
        <span>O </span>
      </div>
    </section>
  );
};
