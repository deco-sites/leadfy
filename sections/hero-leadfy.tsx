import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @title Title
   * @format rich-text
   */
  title: HTMLWidget;
  /**
   * @title Subtitle
   * @format textarea
   */
  subtitle: string;
  /**
   * @title Button Text
   */
  buttonText: string;
  /**
   * @title Button URL
   */
  buttonHref: string;
  /**
   * @title Trust Message
   * @format textarea
   */
  trustText: string;
  /**
   * @title Dashboard Image
   */
  dashboardImage: ImageWidget;
  /**
   * @title Brand Logos
   */
  brandLogos: ImageWidget[];
}

export default function HeroLeadfy({
  title = "<h1>Nós trazemos os clientes,<br>você <u>fecha mais vendas</u></h1>",
  subtitle = "Turbinamos seu negócio atraindo e atendendo leads qualificados todo dia, toda hora",
  buttonText = "Faça um teste grátis",
  buttonHref = "#",
  trustText = "Grandes marcas que confiam em nossa tecnologia",
  dashboardImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  brandLogos = [
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
  ],
}: Props) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <div className="text-left">
              <div className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6" dangerouslySetInnerHTML={{ __html: title }}></div>
              <p className="text-xl mb-8 text-gray-600">{subtitle}</p>
              <a
                href={buttonHref}
                className="inline-block px-8 py-3 text-black font-semibold rounded-full transition-colors duration-300 bg-yellow-300 hover:bg-yellow-400 shadow-md"
              >
                {buttonText}
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={dashboardImage} alt="Dashboard" className="w-full" />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">{trustText}</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brandLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Brand Logo ${index + 1}`} className="h-12 w-auto grayscale" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}