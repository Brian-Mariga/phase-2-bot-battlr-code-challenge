import { Link } from "@chakra-ui/react";

// import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div
      className="navbar
    "
    >
      <Link to="/">Bot Collection</Link>
      <Link to="/bot-army">Your Bot Army</Link>
    </div>
  );
}

export default NavBar;
