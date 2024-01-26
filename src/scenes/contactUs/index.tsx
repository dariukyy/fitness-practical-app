import { useAppContext } from "@/context/AppContext";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";

function ContactUs() {
  const {
    register,
    reset,
    formState: { errors },
    trigger,
  } = useForm();
  console.log(errors.email);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    if (isValid) {
      reset();
    }
  }

  const { setSelectedPage } = useAppContext();
  return (
    <section className="mx-auto min-h-full w-5/6 py-20" id="contactus">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="mb-16"
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
            aspernatur voluptates, repellendus reprehenderit consequatur aliquam
            iure est qui ut facere nesciunt doloribus dolor, ab quisquam.
            Voluptatibus tempora minus obcaecati quisquam!
          </p>
        </motion.div>
        <div className="md:flex gap-8 justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            className="md:basis-3/5"
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/d596cb61d794311bc3951e490a11935d"
              className="flex flex-col gap-8"
            >
              <input
                className="input"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-primary-500">
                  {errors.name?.type === "required" &&
                    "This field is required!"}
                  {errors.name?.type === "maxLength" &&
                    "Max length is 100 characters!"}
                </p>
              )}
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                })}
                className="input"
                type="email"
                placeholder="EMAIL"
              />
              {errors.name && (
                <p className="text-primary-500">
                  {errors.email?.type === "required" &&
                    "This field is required!"}
                  {errors.email?.type === "pattern" &&
                    "Please write correct email!"}
                </p>
              )}
              <textarea
                rows={7}
                cols={40}
                className="input"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-primary-500">
                  {errors.message?.type === "required" &&
                    "This field is required!"}
                  {errors.message?.type === "maxLength" &&
                    "Max length is 100 characters!"}
                </p>
              )}
              <button
                type="submit"
                className="rounded-md w-1/3 bg-secondary-500 px-20 py-3 hover:bg-primary-500 mt-4 hover:text-white duration-300 uppercase flex items-center justify-center focus:outline-none focus:ring focus:ring-primary-300 ring-offset-2"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div>
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.8 }}
              className="basis-2/5 mt-16 md:mt-0"
            >
              <div className="relative">
                <div className="before:absolute before:bottom-[-5.5rem] before:left-[-17.3rem] before:overflow-x-hidden md:before:content-evolvedtext before:z-[-10]">
                  <img
                    src={ContactUsPageGraphic}
                    className="w-full"
                    alt="Contact us photo"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
