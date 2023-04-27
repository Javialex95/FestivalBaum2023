import { useLocation, useNavigate } from "react-router-dom";

export const HedaerInternal = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="header_2 ">
      <div className="max_width_container">
        <img
        onClick={() => navigate('/')}
        className="logo_baum" src="/assets/logo.png" alt="logo" />
      </div>
    </div>
  );
};
