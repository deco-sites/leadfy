import { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @title Navigation Items
   */
  navItems: HTMLWidget;
  /**
   * @title Main Title
   * @format rich-text
   */
  mainTitle: HTMLWidget;
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
  buttonUrl: string;
  /**
   * @title Infinity Loop Image
   */
  infinityLoopImage: ImageWidget;
  /**
   * @title Trust Message
   * @format textarea
   */
  trustMessage: string;
  /**
   * @title Partner Logos
   */
  partnerLogos: ImageWidget[];
}

export default function HeroSection({
  mainTitle = "A Leadfy <span class='bg-yellow-300'>complementa</span> sua estratégia de marketing e vendas na <span class='bg-yellow-300'>nova jornada</span> digital de compra",
  subtitle = "Nossa tecnologia aumenta seu faturamento, atende seu cliente e amplia seu branding (com um investimento menor que você imagina)",
  buttonText = "Clique pra saber mais",
  buttonUrl = "#",
  infinityLoopImage = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  trustMessage = "Certificados pelas maiores plataformas de mídias digitais",
  partnerLogos = [
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
  ],
}: Props) {
  return (
    <div class="bg-white">

      <main class="container mx-auto px-4 py-16">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
            <img src={infinityLoopImage} alt="Infinity Loop" class="w-full" />
          </div>
          <div class="lg:w-1/2 order-1 lg:order-2">
            <h1 class="text-4xl font-bold mb-6" dangerouslySetInnerHTML={{ __html: mainTitle }}></h1>
            <p class="text-xl mb-8">{subtitle}</p>
            <a href={buttonUrl} class="bg-yellow-300 text-black font-semibold py-3 px-8 rounded-full inline-block hover:bg-yellow-400 transition-colors">
              {buttonText}
            </a>
          </div>
        </div>
      </main>

      <footer class="bg-gray-100 py-12">
        <div class="container mx-auto px-4">
          <p class="text-center text-gray-600 mb-8">{trustMessage}</p>
          <div class="flex justify-center items-center space-x-8 flex-wrap">
            {partnerLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`Partner Logo ${index + 1}`} class="h-12 object-contain" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}