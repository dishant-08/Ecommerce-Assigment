import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Service = () => {
  const services = [
    {
      icon: <TbTruckDelivery />,
      title: "Super fast and free delivery.",
    },
    {
      icon: <MdSecurity className="icon" />,
      title: "Non-contact shipping .",
    },
    {
      icon: <GiReceiveMoney className="icon" />,
      title: "Money back guaranteed.",
    },
    {
      icon: <RiSecurePaymentLine className="icon" />,
      title: "Super secure payment system.",
    },
  ];

  return (
    <section className="py-18 mt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 place-content-center center md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="  ">
              <div className="bg-border p-4 flex justify-center items-center rounded-2xl">
                <div className="text-8xl  text-footer_bg">{service.icon}</div>
                <h3 className="text-2xl font-bold  mt-2">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
