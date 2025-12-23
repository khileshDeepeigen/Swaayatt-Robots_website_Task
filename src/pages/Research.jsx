import ResearchSlider from "../components/media/ResearchSlider";

// DATA FILES
import onroadVideos from "../data/onroadVideo";
import offroadVideos from "../data/offroadVideo";
import perceptionVideos from "../data/perceptionVideos";
import motionPlanningVideos from "../data/motionPlanningVideos";
import mappingLocalizationVideos from "../data/mappingLocalizationVideos";

export default function Research() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-12">

      {/* ================= HERO ================= */}
      <div className="relative h-[280px] rounded-2xl overflow-hidden mb-12">
        <img
          src="/images/research/offroad/Offroad.webp"
          alt="Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center px-10">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl font-semibold mb-3">Research</h1>
            <p className="text-sm">
              Explore how autonomous vehicles navigate the chaotic, bidirectional traffic on India’s unpredictable roads. Dive into the challenges, breakthroughs, and the potential of self-driving cars in one of the world’s most complex driving environments.
            </p>
          </div>
        </div>
      </div>

      {/* ================= AUTONOMOUS DRIVING ================= */}
      <section className="mb-20">
        <h2 className="font-rethink font-bold text-[38px] tracking-[-0.02em] text-[#333333] mb-3">
          Autonomous Driving
        </h2>

        <p className="font-rethink text-[20px] tracking-[-0.02em] text-[#5D5D5D] max-w-4xl mb-6">
          These videos demonstrate the ability of our autonomous vehicles to
          navigate complex real-world environments independently.
        </p>

        {/* ON ROAD */}
        <div className="mb-10">
          <h3 className="font-rethink text-[28px] tracking-[-0.02em] text-black mb-4">
            On Road ↗
          </h3>
          <ResearchSlider data={onroadVideos} section="onroad" />
        </div>

        {/* OFF ROAD */}
        <h3 className="font-rethink text-[28px] tracking-[-0.02em] text-black mb-4">
          Off Road ↗
        </h3>
        <ResearchSlider data={offroadVideos} section="offroad" />
      </section>

      {/* ================= MOTION PLANNING ================= */}
      <section className="mb-20">
        <h2 className="font-rethink font-bold text-[38px] tracking-[-0.02em] text-[#333333] mb-3">
          Motion Planning and Decision Making ↗
        </h2>

        <p className="font-rethink text-[20px] tracking-[-0.02em] text-[#5D5D5D] max-w-4xl mb-6">
          These videos demonstrate advanced motion planning and adaptive
          decision-making in stochastic dynamic traffic.
        </p>

        <ResearchSlider
          data={motionPlanningVideos}
          section="motion-planning"
        />
      </section>

      {/* ================= PERCEPTION ================= */}
      <section className="mb-20">
        <h2 className="font-rethink font-bold text-[38px] tracking-[-0.02em] text-[#333333] mb-3">
          Perception ↗
        </h2>

        <p className="font-rethink text-[20px] tracking-[-0.02em] text-[#5D5D5D] max-w-4xl mb-6">
          These videos demonstrate robust environmental understanding through
          cameras and learning-based perception systems.
        </p>

        <ResearchSlider data={perceptionVideos} section="perception" />
      </section>

      {/* ================= MAPPING & LOCALIZATION ================= */}
      <section className="mb-20">
        <h2 className="font-rethink font-bold text-[38px] tracking-[-0.02em] text-[#333333] mb-3">
          Mapping and Localization ↗
        </h2>

        <p className="font-rethink text-[20px] tracking-[-0.02em] text-[#5D5D5D] max-w-4xl mb-6">
          These videos demonstrate high-precision mapping and real-time
          localization in complex environments.
        </p>

        <ResearchSlider
          data={mappingLocalizationVideos}
          section="mapping-localization"
        />
      </section>

    </main>
  );
}
