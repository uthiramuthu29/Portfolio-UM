import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_r0c68oh",
        "template_kgj5jzu",
        formData,
        "AwHZM_Dy8uDZHJiCW"
      )
      .then(
        (result) => {
          setPopupMessage("Message sent successfully ✅");
          setShowPopup(true);
          setFormData({ email: "", name: "", subject: "", message: "" });
          setSending(false);
        },
        (error) => {
          setPopupMessage("Failed to send ❌ Please try again");
          setShowPopup(true);
          setSending(false);
        }
      );
  };

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showPopup]);

  return (
    <>
      <form
        onSubmit={sendEmail}
        className={`contact-form bg-[#F6F6F6] dark:bg-[#181818] border border-[#EBEBEB] dark:border-[#383737] rounded-[12px] mb-[61px] ${showPopup ? "filter blur" : ""} `}
      >
        <div className="form-header border-bottom-ten-white py-[8px] flex justify-center relative ">
          <ul className="flex gap-[8px] absolute left-[16px] top-[16px] ">
            <li className="w-[12px] h-[12px] bg-[#F63636] border border-[#D62929]  rounded-full "></li>
            <li className="w-[12px] h-[12px] bg-[#F6C136] border border-[#CEA435]  rounded-full "></li>
            <li className="w-[12px] h-[12px] bg-[#68F636] border border-[#53CC28]  rounded-full "></li>
          </ul>
          <h2 className="text-[16px] text-[#181818] dark:text-white font-medium ">
            New message
          </h2>
        </div>
        <div className="form-body px-[22px] py-[24px] lg:px-[32px] lg:py-[10px] ">
          <div className="flex items-center gap-[8px] border-b border-b-[#C5C5C5] dark:border-b-[rgba(255,255,255,0.1)] pb-[16px] mb-[16px]">
            <label
              className="text-[14px] lg:text-[16px] text-[#181818] dark:text-white font-medium  "
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="text-[14px] lg:text-[16px] text-[#808080] font-normal focus:outline-none  "
              required
            />
          </div>
          <div className="flex items-center gap-[8px] border-b border-b-[#C5C5C5] dark:border-b-[rgba(255,255,255,0.1)] pb-[16px] mb-[16px] ">
            <label
              className="text-[14px] lg:text-[16px] text-[#181818] dark:text-white font-medium  "
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="text-[14px] lg:text-[16px] text-[#808080] font-normal focus:outline-none "
              required
            />
          </div>
          <div className="flex items-center gap-[8px] border-b border-b-[#C5C5C5] dark:border-b-[rgba(255,255,255,0.1)] pb-[32px] mb-[32px]">
            <label
              className="text-[14px] lg:text-[16px] text-[#181818] dark:text-white font-medium  "
              htmlFor="subject"
            >
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              className="text-[14px] lg:text-[16px] text-[#808080] font-normal focus:outline-none "
            />
          </div>
          <textarea
            name="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[323px] bg-[#F3F3F3] dark:bg-[#0D0D0D] text-[#808080] text-[14px] lg:text-[16px] p-[24px] resize-none font-normal rounded-[12px] box-border focus:outline-none"
            required
          ></textarea>
        </div>
        <div className="form-footer text-right px-[22px] pb-[24px] lg:px-[50px] lg:py-[22px]">
          <button
            className={`text-white text-[18px] font-medium cursor-pointer w-full lg:w-[161px] py-[19px] rounded-[9px]  dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] ${sending ? "bg-gray-400 cursor-not-allowed" : "bg-[#171717]"} `}
            disabled={sending}
            type="submit"
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
      {showPopup && (
        <div className="popup-wrapper fixed w-auto left-[32px] top-[33%] right-[32px] lg:w-full lg:max-w-[1024px] lg:left-auto lg:right-auto ">
          <div className="popup lg:max-w-[768px] mx-auto bg-[#F6F6F6] dark:bg-[#181818] border border-[#EBEBEB] dark:border-[#383737] rounded-[12px]">
            <div className="popup-head">
              <h4 className="text-white text-[16px] leading-[100%] text-center py-[10px] border-b border-b-[#383737] ">
                Alert
              </h4>
            </div>
            <div className="popup-body">
              <p className="text-white text-[14px] text-center py-[50px]">
                {popupMessage}
              </p>
            </div>
            <div className="popup-footer text-center">
              <button
                onClick={() => setShowPopup(false)}
                className="text-white text-[14px] font-medium uppercase cursor-pointer px-[25px] py-[12px] rounded-[9px]  dark:shadow-[inset_0px_2px_4px_rgba(255,255,255,0.08)] bg-[#171717] mb-[15px] "
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
