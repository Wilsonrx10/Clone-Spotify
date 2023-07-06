import ArrowsNavigation from "./ArrowsNavigation";
import UserDropdown from "./UserDropdown";

const Header  = () => {
  return (
    <>
      <div className="p-2 flex justify-between">
          <ArrowsNavigation />
          <UserDropdown />
      </div>
    </>
  )
}

export default Header;