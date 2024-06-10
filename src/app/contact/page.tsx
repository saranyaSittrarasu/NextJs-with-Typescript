"use client";
import { AdminLayout } from "@/layout";
import SimpleReactValidator from "simple-react-validator";
import {
  NormalInput,
  NormalButton,
  NormalInputArea,
} from "@/components/common";
import { useRef, useState } from "react";

export default function ContactPage() {
  const [contactFormObj, setContactFormObj] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const[successMessage,setSuccessMessage]=useState(Boolean);
  const [, forceUpdate] = useState<Number>();
  const validator = useRef(new SimpleReactValidator());

  const handleChangeInput = (event: any) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    console.log(target);

    setContactFormObj({
      ...contactFormObj,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const isValid = validator.current.allValid();

    if (isValid) {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(contactFormObj),
          headers: { "content-type": "application/json" },
        });
        setSuccessMessage(true)
      } catch (err: any) {
        console.log("Err", err);
      }
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };
  return (
    <AdminLayout>
      <div className="row justify-content-lg-center">
        <div className="col-lg-9 bg-white border rounded shadow-sm overflow-hidden">
          <div className="p-xl-2">
            <h3>Contact Form</h3>
          </div>
          <div className="row p-4 p-xl-2">
            <div className="col-12">
              <NormalInput
                label="Name"
                value={contactFormObj.name}
                name="name"
                onChange={handleChangeInput}
                placeholder="Enter Name"
                errorMessage={validator.current.message(
                  "Name",
                  contactFormObj.name,
                  "required"
                )}
              />
            </div>
            <div className="col-12">
              <NormalInput
                label="Email"
                value={contactFormObj.email}
                name="email"
                onChange={handleChangeInput}
                placeholder="Enter Email"
                errorMessage={validator.current.message(
                  "Email",
                  contactFormObj.email,
                  "required|email"
                )}
              />
            </div>
            <div className="col-md-12">
              <NormalInput
                label="Mobile Number"
                value={contactFormObj.mobile}
                name="mobile"
                type="number"
                onChange={handleChangeInput}
                errorMessage={validator.current.message(
                  "Mobile",
                  contactFormObj.mobile,
                  "required"
                  
                )}
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="col-md-12">
              <NormalInputArea
                label="Message"
                value={contactFormObj.message}
                name="message"
                type="textarea"
                onChange={handleChangeInput}
                errorMessage={validator.current.message(
                  "Message",
                  contactFormObj.message,
                  "required"
                )}
                placeholder="Write your message here"
              />
            </div>
            <div className="col-12">
              <div className="d-grid gap-2">
                <NormalButton
                  label="Submit"
                  className="btn-lg btn-primary"
                  onClick={handleSubmit}
                />
              </div>
            </div>
            {successMessage?<p>Thank you for sending you queries. We will reach out shortly.</p>:''}
            
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
