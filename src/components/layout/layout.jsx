import NavBar from "../navigationBar/navBar.jsx";

export default function Layout({ children }) {
  return (
    <div className="">
      <NavBar />
      {/* for the smaller screen, it will have a smaller top-padding */}
      <div className=" ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
