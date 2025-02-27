import "./navbar.css";
import { Separator } from "@radix-ui/themes";
import Link from "next/link";
import DropDown from "./dropdown";
import Image from "next/image";
import FillInLogo from "./FillInLogo.png";
import Links from "./links";
import SearchBar from "./searchbar";
import SignInUp from "./Header";

export default function NavBar() {
  return (
    <div id="NavBarMain">
      <Link id="NavLogo" href={"/"}>
        <Image src={FillInLogo} width={150} height={150} alt="Logo"></Image>
      </Link>
      <Links />
      <SearchBar />
      <DropDown />
      <SignInUp />
      <Separator my=".5" size="4" id="NavSep" />
    </div>
  );
}
