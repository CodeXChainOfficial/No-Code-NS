import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DAOwaitingforconfirmationb = React.lazy(
  () => import("pages/DAOwaitingforconfirmationb"),
);
const DAOresulta = React.lazy(() => import("pages/DAOresulta"));
const DAOdefinemultisigmembers = React.lazy(
  () => import("pages/DAOdefinemultisigmembers"),
);
const DAOdefinemultisigmembersOne = React.lazy(
  () => import("pages/DAOdefinemultisigmembersOne"),
);
const Frame371686 = React.lazy(() => import("pages/Frame371686"));
const Nameservicedefinefunctionality = React.lazy(
  () => import("pages/Nameservicedefinefunctionality"),
);
const NameService = React.lazy(() => import("pages/NameService"));
const DAOselecttesnet = React.lazy(() => import("pages/DAOselecttesnet"));
const DAOHOMEGENERATOR = React.lazy(() => import("pages/HOMEGENERATOR"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/daohomegenerator" element={<DAOHOMEGENERATOR />} />
          <Route path="/daoselecttesnet" element={<DAOselecttesnet />} />
          <Route path="/nameservice" element={<NameService />} />
          <Route
            path="/nameservicedefinefunctionality"
            element={<Nameservicedefinefunctionality />}
          />
          <Route path="/frame371686" element={<Frame371686 />} />
          <Route
            path="/daodefinemultisigmembersone"
            element={<DAOdefinemultisigmembersOne />}
          />
          <Route
            path="/daodefinemultisigmembers"
            element={<DAOdefinemultisigmembers />}
          />
          <Route path="/daoresulta" element={<DAOresulta />} />
          <Route
            path="/daowaitingforconfirmationb"
            element={<DAOwaitingforconfirmationb />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
