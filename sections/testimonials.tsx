import { ImageWidget } from 'apps/admin/widgets.ts';

interface TestimonialProps {
  image?: ImageWidget;
  name?: string;
  company?: string;
  /**
   * @format textarea
   */
  testimonial?: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  testimonials?: TestimonialProps[];
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
}

export default function TestimonialsSection({
  title = "O que nossos clientes dizem",
  subtitle = "Experimente o que empresas e profissionais ganham com a Leadfy, atraindo leads melhores e gerando mais vendas",
  backgroundColor = "#f3f4f6",
  textColor = "#1f2937",
  testimonials = [
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      name: "Gabriel Bagatini",
      company: "Covel Veículos",
      testimonial: "A Leadfy trouxe 1000 leads qualificados em um ano, aumentando nossas vendas online entre 30% e 40%. Hoje, 55% do nosso faturamento vem do digital e vamos aumentar nossa aposta"
    },
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      name: "Thalita Albuquerque",
      company: "Campione Imóveis",
      testimonial: "A solução da Leadfy revolucionou a geração de leads no nosso site... Conseguimos aumentar muito o número de contatos qualificados para nossos corretores de imóveis"
    },
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      name: "Marlon Magalhães",
      company: "Garage 88",
      testimonial: "Vendi um carro de R$ 360 mil para um cliente de fora do estado, mas só falei com ele no fechamento. A tecnologia da Leadfy atraiu e atendeu o cliente, só me acionando para fechar a venda"
    },
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
      name: "Cassiano de Faria",
      company: "QuitCar Megastore",
      testimonial: "Hoje eu tenho leads muito mais qualificados e uma previsibilidade maior da demanda. Isso traz mais leveza na operação, porque não preciso de um gestor de tráfego e nem configurar nada"
    }
  ]
}: Props) {
  return (
    <section style={{ backgroundColor, color: textColor }} class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-2">{title}</h2>
        <p class="text-center mb-12">{subtitle}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} class="bg-white p-6 rounded-lg shadow-md">
              <img src={testimonial.image} alt={testimonial.name} class="w-24 h-24 rounded-full mx-auto mb-4" />
              <p class="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <p class="font-semibold">{testimonial.name}</p>
              <p class="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
      <div class="mt-12 text-center">
        <button class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded">
          Faça um teste grátis
        </button>
      </div>
    </section>
  );
}