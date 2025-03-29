import Navbar from "~/Navbar";
import Footer from "~/Footer";
import Registration from "~/Registration";

export default function RegistrationPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Registration />
      </div>
      <Footer />
    </>
  );
}
