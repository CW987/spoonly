import "./navbar.css";
import { Separator } from "@radix-ui/themes";
import Link from "next/link";
import DropDown from "./dropdown";
import Image from "next/image";
import FillInLogo from "./FillInLogo.png";
import Spoonly from "./Spoonly.jpg";
import Links from "./links";
import SearchBar from "./searchbar";

export default function NavBar() {
  return (
    <div id="NavBarMain">
      <Link id="NavLogo" href={"/"}>
        <Image
          src={Spoonly}
          width={150}
          height={150}
          alt="Logo"
          id="NavLogoMain"
        />
      </Link>
      <Links />
      <SearchBar />
      <DropDown />
      <Separator my=".5" size="4" id="NavSep" />
    </div>
  );
}
