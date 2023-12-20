import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-md-8 col-lg-6 mx-auto h-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default IdentityLayout;
