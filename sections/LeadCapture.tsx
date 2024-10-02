import { Airtable } from "site/types/airtable.ts";
import LeadForm from "site/islands/LeadForm.tsx";

export interface Placeholders {
  /** @description Texto do botão de envio */
  submitButtonText?: string;
  /** @description Campo de nome */
  nome: string;
  /** @description Campo de email */
  email: string;
  /** @description Campo de telefone */
  telefone: string;
  /** @description Campo de marca */
  marca: string;
  /** @description Campo de modelo */
  modelo: string;
  /** @description Campo de ano */
  ano: string;
}

export interface Props {
  /** @description ID da seção para links de ancoragem */
  sectionId?: string;
  title?: string;
  /** @description Dados do Airtable para integração do formulário */
  airtable?: Airtable;
  successMessage?: string;
  placeholders?: Placeholders;
}

function LeadCapture({
  sectionId = "contato",
  title,
  airtable,
  successMessage = "Sucesso! Nossa equipe entrará em contato.",
  placeholders = {
    submitButtonText: "Avançar",
    nome: "Nome",
    email: "E-mail",
    telefone: "Telefone",
    marca: "Marca",
    modelo: "Modelo",
    ano: "Ano",
  },
}: Props) {
  return (
    <div
      id={sectionId}
      class="w-full mx-auto px-4 max-w-[1140px] mt-[100px] flex flex-col"
    >
      <h2 class="text-3xl lg:text-5xl leading-tight text-center">{title}</h2>

      <div class="mt-5 md:mt-10 mx-auto w-full md:w-max">
        <LeadForm
          airtable={airtable}
          successMessage={successMessage}
          placeholders={placeholders}
        />
      </div>
    </div>
  );
}

export default LeadCapture;
