import NavBar from "../navigationBar/navBar.jsx";

export default function Layout({ children }) {
  return (
    <div className="bg-[#C5C5C5]">
      <NavBar />
      {/* for the smaller screen, it will have a smaller top-padding */}
      <div className=" ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
