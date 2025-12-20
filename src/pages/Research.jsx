import { Outlet } from "react-router-dom";

export default function Research() {
  return (
    <section className="bg-white min-h-screen">
      {/* 
        This Outlet is REQUIRED.
        Child routes like /research/off-road will render here.
      */}
      <Outlet />
    </section>
  );
}
