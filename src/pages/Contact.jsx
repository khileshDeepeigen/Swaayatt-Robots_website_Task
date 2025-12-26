import { MapPin, Mail, Briefcase, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white">
      <main className="py-12 sm:py-16">

        {/* OUTER CONTAINER — SAME AS OTHER PAGES */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* ================= CONTACT INFO ================= */}
            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">

              <h1 className="text-[28px] sm:text-[32px] font-semibold text-[#1A212F]">
                Contact Us
              </h1>

              <p className="text-[15px] sm:text-[16px] text-[#1A212F]/70 mt-1">
                Have any questions? Drop us a mail or give us a call.
              </p>

              <hr className="border-gray-200 my-5" />

              <div className="space-y-6">
                <ContactRow
                  icon={MapPin}
                  title="Location"
                  text="No. 42, Abhinav Regal Homes, Awadhpuri, Pipilani, Bhopal, Madhya Pradesh - 462022"
                />

                <ContactRow
                  icon={Mail}
                  title="For General Queries"
                  link="mailto:contact@swaayatt.com"
                  linkText="contact@swaayatt.com"
                />

                <ContactRow
                  icon={Briefcase}
                  title="For Potential Investment"
                  link="mailto:investment@swaayatt.com"
                  linkText="investment@swaayatt.com"
                />

                <ContactRow
                  icon={Phone}
                  title="Call"
                  link="tel:+917554947025"
                  linkText="+91-755-4947025"
                />
              </div>
            </div>

            {/* ================= MAP ================= */}
            <div className="w-full h-[320px] sm:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                title="Swaayatt Robots Location"
                src="https://www.google.com/maps?q=Swaayatt%20Robots%20Bhopal&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= CONTACT ROW ================= */
function ContactRow({ icon: Icon, title, text, link, linkText }) {
  return (
    <div className="flex items-start gap-4">

      {/* ICON */}
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4.5 h-4.5 text-blue-600" />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-[14px] font-medium text-[#1A212F]/50">
          {title}
        </h3>

        {text && (
          <p className="text-[15px] sm:text-[16px] text-[#1A212F] leading-snug mt-1">
            {text}
          </p>
        )}

        {link && (
          <a
            href={link}
            className={`mt-1 inline-block text-[15px] font-medium ${
              title === "Call"
                ? "text-[#1A212F]"
                : "text-[#174CD2] underline"
            }`}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
}
