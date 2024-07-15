import { Link } from "react-router-dom";

const routeList = [
    { route: "/home", title: "Home" },
    { route: "/sessions", title: "Sessions" },
    { route: "/Search", title: "Search" },
    { route: "/Message", title: "Message" },
    { route: "/Account", title: "Account" },
  ];
const BottomNav = () => {
  return (
    <section className="bg-[#ffffff] sm:hidden bottomnav px-3 py-2 fixed  bottom-0 w-full shadow-custom flex items-center gap-3 justify-between overflow-x-scrol rounded-tr-3xl rounded-tl-3xl] ">
    {routeList.map((item, index) => {
      const activeItem = location.pathname.includes(item?.route);
      const iconArr = [
        <img src="home.svg" alt="" />,
        <img src="session.svg" alt="" />,
        <img src="nav-search.svg" alt="" />,
        <img src="message.svg" alt="" />,
        <img src="person.svg" alt="" />,
      ];
      return (
        <Link
          to={item.route}
          key={index}
          className={`${!activeItem && "text-[#B8B8D2] rounded-2xl bg-[#ffffff] w-max whitespace-nowrap relative"
            } ${index == 2 && 'py-0'} flex justify-evenly flex-col flex-1 gap-x-1 items-center rounded-full px-3 py-2  cursor-pointer my-o text-xs space-x-0 gap-2`}
        >
        <div className={`${index == 2 ? 'bottom-3 absolute bg-[#ffffff] p-0 w-[52px] h-[52px]' : ''}`}> {iconArr[index]}</div>

          <span className={`${!activeItem && "scale(0)"} ${index == 2 && 'absolute top-4'}  origin-left duration-200 whitespace-nowrap text-text-xs leading-[14px] font-normal text-[#B8B8D2]`}>{item.title}</span>
        </Link>
      );
    })}
  </section>
  )
}

export default BottomNav