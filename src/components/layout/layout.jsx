import NavBar from "../navigationBar/navBar.jsx";

export default function Layout({ children }) {
  return (
    <div className="bg-[#edebeb] w-auto">
      <NavBar />
      {/* for the smaller screen, it will have a smaller top-padding */}
      <div className="w-full">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
