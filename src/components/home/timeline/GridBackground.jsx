// timeline/GridBackground.jsx

export default function GridBackground() {
  return (
    <>
      {/* ================= VERTICAL LINES ================= */}

      {/* LEFT VERTICAL */}
<div
  className="
    absolute
    top-[5%]
    bottom-[12%]
    left-[27%]
    w-px
    bg-white/15
    pointer-events-none
  "
/>



      {/* RIGHT VERTICAL */}
<div
  className="
    absolute
    top-[5%]
    bottom-[12%]
    left-1/2
    -translate-x-1/2
    w-px
    bg-white/15
    pointer-events-none
  "
/>



      {/* ================= HORIZONTAL LINES ================= */}

<div
  className="
    absolute
    left-0
    top-[17%]
    w-[82%]
    h-px
    bg-white/15
    pointer-events-none
  "
/>



<div
  className="
    absolute
    left-0
    top-[42%]
    w-[82%]
    h-px
    bg-white/15
    pointer-events-none
  "
/>


    </>
  );
}
