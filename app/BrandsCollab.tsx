export default function TrustedBrands() {
    const brands = [
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/amazon-white.png",
        width: 145,
        height: 44,
        alt: "Amazon",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/levis-white.svg",
        width: 107,
        height: 44,
        alt: "Levi's",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/razorpay-white.svg",
        width: 208,
        height: 44,
        alt: "Razorpay",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/the-hindu-white.png",
        width: 357,
        height: 34,
        alt: "The Hindu",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/hindustan-times-white.png",
        width: 267,
        height: 34,
        alt: "Hindustan Times",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/thenudge-institute-white.png",
        width: 224,
        height: 44,
        alt: "The Nudge Institute",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/startup-tn-white.png",
        width: 200,
        height: 44,
        alt: "Startup TN",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/tie-global-white.png",
        width: 124,
        height: 44,
        alt: "TIE Global",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/psai.png",
        width: 141,
        height: 44,
        alt: "PSAI",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/india-space-congress.png",
        width: 104,
        height: 64,
        alt: "India Space Congress",
      },
      {
        src: "//www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/sri-ramachandra-white.png",
        width: 298,
        height: 44,
        alt: "Sri Ramachandra",
      },
    ];
  
    return (
      <div className="bg-blue-500 py-10 px-4 text-center">
        <h2 className="text-white text-2xl font-bold mb-6">
          Trusted by Leading Brands
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              width={brand.width}
              height={brand.height}
              alt={brand.alt}
              className="max-h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    );
  }
  