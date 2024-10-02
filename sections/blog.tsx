import { ImageWidget } from 'apps/admin/widgets.ts';

interface BlogPost {
  image: ImageWidget;
  date: string;
  title: string;
  description: string;
}

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format rich-text
   */
  subtitle?: string;
  posts?: BlogPost[];
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  /**
   * @format color-input
   */
  accentColor?: string;
}

export default function BlogSection({
  title = "Blog Leadfy",
  subtitle = "Fique por dentro das últimas novidades.",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  accentColor = "#ccff00",
  posts = [
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/b0f8ca2d-9c83-48f7-88de-1a6e6d1e9eb7",
      date: "01/10/2024",
      title: "Venda de veículos: quais são as tendências em 2024",
      description: "O mercado automotivo está mudando rápido. Quer saber como as plataformas digitais estão revolucionando a compra e venda de veículos? Descubra como a tecnologia pode transformar a forma como você gerencia seu negócio!"
    },
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/b0f8ca2d-9c83-48f7-88de-1a6e6d1e9eb7",
      date: "27/09/2024",
      title: "O novo papel do vendedor na jornada digital",
      description: "A digitalização transformou o papel do vendedor! Saiba como se adaptar e fechar negócios com leads prontos para negociar. A velocidade e a eficiência são as novas chaves para o sucesso."
    },
    {
      image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/b0f8ca2d-9c83-48f7-88de-1a6e6d1e9eb7",
      date: "18/09/2024",
      title: "Como pré-qualificar seus leads para vender mais",
      description: "Você ainda perde tempo dos seus melhores vendedores com clientes que apenas \"dão uma pesquisada\" ou \"pedem informações\"? É hora de rever seus conceitos e começar a pré-qualificar seus leads de forma eficaz."
    }
  ]
}: Props) {
  return (
    <section style={{ backgroundColor, color: textColor }} class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: title }} />
        <p class="text-xl mb-8" dangerouslySetInnerHTML={{ __html: subtitle }} />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} class="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} class="w-full h-48 object-cover" />
              <div class="p-6">
                <p class="text-sm text-gray-600 mb-2">{post.date}</p>
                <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
                <p class="text-gray-700">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div class="text-center mt-8">
          <button style={{ backgroundColor: accentColor, color: textColor }} class="px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Blog Leadfy
          </button>
        </div>
      </div>
    </section>
  );
}