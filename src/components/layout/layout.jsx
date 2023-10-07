import NavBar from "../navigationBar/navBar.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {/* for the smaller screen, it will have a smaller top-padding */}
      <div className="pt-[55px] md:pt-[10px] ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
