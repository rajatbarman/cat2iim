import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactUs() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header activeMenuItem="contact" logo="./cat2iim.png" />
      <div className="flex-col items-center justify-center text-center">
        <h1 className="text-2xl max-w-[720px] mx-auto mt-4 text-center mb-6 border-y-2 border-solid border-rose-500 py-2 ">
          Contact Us
        </h1>
        <h1 className="mt-8">
          ✉️{" "}
          <a href="mailto:manoj.cat2iim@gmail.com">manoj.cat2iim@gmail.com</a>
        </h1>
        <h1 className="mt-2">
          📞 <a href="tel:+91 98915 65351">+91 98915 65351</a>
        </h1>
        <h1 className="mt-2">
          <a target="_blank" href="https://forms.gle/wcGMo1nHRn1FpDGe8">
            Enquiry Form
          </a>
        </h1>
      </div>
      <Footer />
    </section>
  );
}
