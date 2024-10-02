import { AppContext } from "site/apps/site.ts";
import { Airtable } from "site/types/airtable.ts";

export interface Props {
  airtable?: Airtable;
  name?: string;
  email?: string;
  telefone?: string;
  marca?: string;
  modelo?: string;
  kmTotal?: string;
  ano?: string;
  financiado?: string;
  valorPretendido?: string;
  mensagem?: string;
}

export const action = async (props: Props, _req: Request, ctx: AppContext) => {
  const fields = {
    Nome: props.name,
    Email: props.email,
    Telefone: props.telefone,
    Marca: props.marca,
    Modelo: props.modelo,
    KmTotal: props.kmTotal,
    Ano: props.ano,
    Financiado: props.financiado,
    ValorPretendido: props.valorPretendido,
    Mensagem: props.mensagem,
  };

  const apiUrl = `https://api.airtable.com/v0/${props.airtable?.baseId}/${props.airtable?.tableId}`;

  const authToken = props.airtable?.authToken;

  if (!authToken) {
    throw new Error("Auth token not found");
  }

  const postContent = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    signal: new AbortController().signal,
    body: JSON.stringify({
      fields: fields,
    }),
  });

  const content = await postContent.json();

  return content;
};

export default action;
