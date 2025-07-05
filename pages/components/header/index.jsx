import Item from "./Item"

export default function Header() {

  const HeadOptions = [
    { name: "order", link: "/order/Order" },
    { name: "menu", link: "/menu/main/MainMenu" },
    { name: "Web guide", link: "/web-guide/WebGuide" },
    { name: "about us", link: "/about/About" },
    { name: "contact us", link: "/contact/Contact" }
  ];
  
  return (

    <header className="grid grid-cols-5 text-center h-20 mx-auto w-11/12" dir="ltr">

      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
        stroke="currentColor"
        className="text-white size-6 mt-5 md:hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      {HeadOptions.map((item) => (
        <Item key={item.link} innerHTML={item.name} link={item.link} />
      ))}
    </header>

  );
}
