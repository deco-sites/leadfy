import { useSignal } from "@preact/signals";
import { JSX } from "preact/jsx-runtime";
import { Airtable } from "site/types/airtable.ts";
import { invoke } from "site/runtime.ts";

interface Props {
  airtable?: Airtable;
  successMessage?: string;
}

export default function CompleteLeadForm({ airtable, successMessage }: Props) {
  const loading = useSignal(false);
  const success = useSignal(false);

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      loading.value = true;

      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const telefone = formData.get("telefone") as string;
      const marca = formData.get("marca") as string;
      const modelo = formData.get("modelo") as string;
      const kmTotal = formData.get("kmTotal") as string;
      const ano = formData.get("ano") as string;
      const financiado = formData.get("financiado") as string;
      const valorPretendido = formData.get("valorPretendido") as string;
      const mensagem = formData.get("mensagem") as string;

      await invoke["site"].actions.createCompleteAirtableRecord({
        airtable,
        email,
        name,
        telefone,
        marca,
        modelo,
        kmTotal,
        ano,
        financiado,
        valorPretendido,
        mensagem,
      });

      success.value = true;
    } finally {
      loading.value = false;
    }
  };

  if (success.value) {
    return (
      <div
        role="alert"
        className="alert h-full bg-primary text-primary-content flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="font-bold text-base">{successMessage}</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      class="form-control justify-start gap-2 w-full md:w-max mx-auto"
    >
      <div class="flex flex-col md:flex-row gap-4">
        <div class="flex flex-col gap-2 w-full md:w-1/2">
          <input
            required
            placeholder="Nome"
            class="input input-bordered"
            name="name"
          />
          <input
            placeholder="E-mail"
            type="email"
            class="input input-bordered"
            name="email"
            required
          />
          <input
            placeholder="Telefone"
            type="tel"
            class="input input-bordered"
            name="telefone"
            required
          />

          <div class="flex gap-2">
            <input
              placeholder="Marca"
              class="input input-bordered w-1/2"
              name="marca"
            />
            <input
              placeholder="Modelo"
              class="input input-bordered w-1/2"
              name="modelo"
            />
          </div>

          <div class="flex gap-2">
            <input
              placeholder="Km total"
              class="input input-bordered w-1/2"
              name="kmTotal"
            />
            <input
              placeholder="Ano"
              class="input input-bordered w-1/2"
              name="ano"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2 w-full md:w-1/2">
          <span class="italic text-sm">Financiado*</span>
          <div class="flex gap-2 items-center italic">
            <input
              type="radio"
              name="financiado"
              value="sim"
              class="radio radio-primary"
              required
            />
            <label class="label-text">Sim</label>

            <input
              type="radio"
              name="financiado"
              value="nao"
              class="radio radio-primary"
              required
            />
            <label class="label-text">Não</label>
          </div>

          <input
            name="valorPretendido"
            placeholder="Valor pretendido"
            class="input input-bordered"
          />

          <textarea
            placeholder="Mensagem"
            name="mensagem"
            class="textarea textarea-bordered resize-none flex-1"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading.value}
        class="btn btn-primary no-animation"
      >
        <span class="inline">Enviar</span>
        {loading.value && <span class="loading loading-spinner loading-xs" />}
      </button>
    </form>
  );
}
