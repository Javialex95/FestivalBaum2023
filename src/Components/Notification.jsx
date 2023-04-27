export const Notification = () => {
  const hideNotification = () => {
    document.querySelector(".notification").classList.add("hideNotification");
  };
  return (
    <div className="notification">
      <img
        onClick={hideNotification}
        src="/assets/iconos/equis/x_negra_hover.png"
        alt=""
      />
      <h2>Embajadores</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, veniam
        in, consectetur quae omnis nam saepe corrupti soluta ipsum quisquam
        temporibus dolores odit totam dolor cupiditate? Deleniti mollitia ipsam
        perspiciatis.
      </p>

      <a className="button_a principal_button" href="">
        Lorem Ipsum
      </a>
    </div>
  );
};
