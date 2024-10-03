import { ImageWidget } from 'apps/admin/widgets.ts';

interface PlanFeature {
  name: string;
  atracao: boolean;
  qualificacao: boolean;
  atendimento: boolean;
  aquisicao: boolean;
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
  logo?: ImageWidget;
  checkIcon?: ImageWidget;
  features?: PlanFeature[];
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
  /**
   * @format color-input
   */
  buttonBackgroundColor?: string;
  /**
   * @format color-input
   */
  buttonTextColor?: string;
  /**
   * @format url-input
   */
  buttonLink?: string;
}

export default function PlanosSection({
  title = "Nossos planos são flexíveis e aumentam suas vendas em poucas semanas",
  subtitle = "",
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  checkIcon = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  backgroundColor = "#ffffff",
  textColor = "#333333",
  accentColor = "#ccff00",
  buttonBackgroundColor = "#000000", // Default background color for button
  buttonTextColor = "#ffffff", // Default text color for button
  buttonLink = "#", // Default link
  features = [
    {
      name: "Gestor automático de tráfego",
      atracao: true,
      qualificacao: true,
      atendimento: true,
      aquisicao: true
    },
    {
      name: "Coleta integrada de dados",
      atracao: false,
      qualificacao: true,
      atendimento: true,
      aquisicao: true
    },
    {
      name: "Remarketing multi-plataforma",
      atracao: false,
      qualificacao: true,
      atendimento: true,
      aquisicao: true
    },
    {
      name: "Integração com Whatsapp, site e CRM",
      atracao: false,
      qualificacao: false,
      atendimento: true,
      aquisicao: true
    },
    {
      name: "Expert 24x7",
      atracao: false,
      qualificacao: false,
      atendimento: false,
      aquisicao: true
    },
    {
      name: "Agendamento de reunião / visita",
      atracao: false,
      qualificacao: false,
      atendimento: false,
      aquisicao: true
    }
  ]
}: Props) {
  const columns = ["Atração", "Qualificação", "Atendimento", "Aquisição"];

  return (
    <section style={{ backgroundColor, color: textColor }} class="py-12 px-4">
      <div class="max-w-6xl mx-auto">
        <img src={logo} alt="Leadfy Logo" class="w-32 mb-8" />
        <h2 class="text-3xl font-bold mb-8 text-center">{title}</h2>
        {subtitle && <p class="text-xl mb-12 text-center">{subtitle}</p>}

        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th class="text-left py-2 px-4"></th>
                {columns.map((column) => (
                  <th key={column} class="text-center py-2 px-4">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} class={index % 2 === 0 ? "bg-gray-100" : ""}>
                  <td class="py-2 px-4">{feature.name}</td>
                  <td class="text-center py-2 px-4">
                    {feature.atracao && <img src={checkIcon} alt="Check" class="w-4 h-4 inline-block" style={{ filter: `brightness(0) saturate(100%) invert(80%) sepia(61%) saturate(397%) hue-rotate(14deg) brightness(105%) contrast(97%)` }} />}
                  </td>
                  <td class="text-center py-2 px-4">
                    {feature.qualificacao && <img src={checkIcon} alt="Check" class="w-4 h-4 inline-block" style={{ filter: `brightness(0) saturate(100%) invert(80%) sepia(61%) saturate(397%) hue-rotate(14deg) brightness(105%) contrast(97%)` }} />}
                  </td>
                  <td class="text-center py-2 px-4">
                    {feature.atendimento && <img src={checkIcon} alt="Check" class="w-4 h-4 inline-block" style={{ filter: `brightness(0) saturate(100%) invert(80%) sepia(61%) saturate(397%) hue-rotate(14deg) brightness(105%) contrast(97%)` }} />}
                  </td>
                  <td class="text-center py-2 px-4">
                    {feature.aquisicao && <img src={checkIcon} alt="Check" class="w-4 h-4 inline-block" style={{ filter: `brightness(0) saturate(100%) invert(80%) sepia(61%) saturate(397%) hue-rotate(14deg) brightness(105%) contrast(97%)` }} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Botão editável */}
        <div class="text-center mt-8">
          <a
            href={buttonLink}
            style={{ backgroundColor: buttonBackgroundColor, color: buttonTextColor }}
            class="py-3 px-6 rounded font-bold hover:opacity-90 transition-opacity"
          >
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}