import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContactUs() {
  return (
    <section className="max-w-[1280px] m-auto">
      <Header
        activeMenuItem="contact"
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/c54ea12a1dd71538b8d7eb0bcf4c1326c90bc15b7296df6787380ae5698836bd?placeholderIfAbsent=true&apiKey=9bca9c6557e04269a5028755255fb6a9"
      />
      <div className="flex-col items-center justify-center text-center">
        <h1 className="text-4xl">Get in touch with us</h1>
        <h1 className="mt-8">
          ✉️{" "}
          <a href="mailto:manoj.cat2iim@gmail.com">manoj.cat2iim@gmail.com</a>
        </h1>
        <h1 className="mt-2">
          📞 <a href="tel:+91 98915 65351">+91 98915 65351</a>
        </h1>
      </div>
      <Footer />
    </section>
  );
}
