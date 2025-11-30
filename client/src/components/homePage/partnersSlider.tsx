import { logos } from "../mock/homepage";

export default function PartnersSlider() {
  // Duplicate logos for seamless loop
  const logosLoop = [...logos, ...logos];

  return (
    <section className="overflow-hidden relative py-4" tabIndex={0}>
      <div
        className="flex items-center gap-6 px-4 loader"
        style={{
          width: `${logosLoop.length * 100}px`,
          animation: "slide 15s linear infinite",
        }}
      >
        {logosLoop.map((LogoComponent, index) => (
          <div
            key={index}
            className="saturate-50 hover:saturate-100 focus:saturate-100 transition-all duration-300 cursor-pointer outline-none focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 item"
            style={{ flex: "0 0 auto" }}
            tabIndex={-1}
          >
            <LogoComponent aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
