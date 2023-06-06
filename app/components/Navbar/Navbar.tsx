import { Box } from "@mui/material";
import Container from "../Container";
import Logo from "./Logo";
import Right from "./Right";

const Navbar = () => {
  return (
    <div
      style={{
        background: "hsla(0,0%,100%,.8)",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "2000",
      }}
      className="fixed w-full bg-white z-10 shadow-sm    sm:static lg:fixed "
    >
      <div className="py-2 border-b-[1px]">
        <Container>
          <div
            className="
                flex
                flex-row
                items-center
                justify-between
                gap-3
                md:gap-0
                "
          >
            {/* <Logo />
             */}
            <div>{}</div>
            <Right />
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
