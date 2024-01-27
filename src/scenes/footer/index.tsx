import Logo from "@/assets/Logo.png";
function Footer() {
  return (
    <section className="bg-primary-100">
      <div className="mx-auto md:flex gap-10 justify-between items-start min-h-full w-5/6 py-36">
        <div className="md:basis-3/5">
          <img src={Logo} alt="Logo" />
          <div className="my-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              maiores officia ipsam pariatur, recusandae sed consequatur aperiam
              similique repellat aliquam veritatis nemo esse temporibus
              exercitationem enim libero in id ducimus!
            </p>
            <p className="mt-6">&copy; Evogym All Rights Reserved</p>
          </div>
        </div>
        <div>
          <p className=" mt-[3.5rem] md:mt-0 font-bold">Links</p>
          <p className="my-6">Lorem ipsum dolor, sit amet adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor.</p>
        </div>
        <div>
          <p className="mt-[3.5rem] md:mt-0 font-bold">Contact Us</p>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p>(444)444-4444</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
