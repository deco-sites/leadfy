import { useSignal } from "@preact/signals";
import { JSX } from "preact/jsx-runtime";
import { Airtable } from "site/types/airtable.ts";
import { invoke } from "site/runtime.ts";

interface Placeholders {
  submitButtonText?: string;
  nome: string;
  email: string;
  telefone: string;
  marca: string;
  modelo: string;
  ano: string;
}

interface Props {
  airtable?: Airtable;
  successMessage?: string;
  placeholders?: Placeholders;
}

export default function LeadForm({
  airtable,
  successMessage,
  placeholders,
}: Props) {
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
      const ano = formData.get("ano") as string;

      await invoke["site"].actions.createAirtableRecord({
        airtable,
        email,
        name,
        telefone,
        marca,
        modelo,
        ano,
      });

      success.value = true;
    } finally {
      loading.value = false;
    }
  };

  const handlePhoneInput = (e: JSX.TargetedInputEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, ""); // Remove all non-numeric characters

    if (value.length > 11) {
      value = value.substring(0, 11); // Limit to 11 digits
    }

    if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, "($1");
    }

    e.currentTarget.value = value;
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
    <form onSubmit={handleSubmit} class="form-control justify-start gap-2">
      <input
        required
        placeholder={placeholders?.nome}
        class="input input-bordered"
        name="name"
      />
      <input
        placeholder={placeholders?.email}
        type="email"
        class="input input-bordered"
        name="email"
        required
      />
      <input
        placeholder={placeholders?.telefone}
        type="tel"
        class="input input-bordered"
        name="telefone"
        onInput={handlePhoneInput}
        required
      />

      <div class="flex flex-col md:flex-row gap-2">
        <input
          placeholder={placeholders?.marca}
          class="input input-bordered w-full text-sm"
          name="marca"
        />
        <input
          placeholder={placeholders?.modelo}
          class="input input-bordered w-full text-sm"
          name="modelo"
        />
        <input
          placeholder={placeholders?.ano}
          class="input input-bordered w-full text-sm"
          name="ano"
        />
      </div>

      <button
        type="submit"
        disabled={loading.value}
        class="btn btn-primary no-animation"
      >
        <span class="inline">{placeholders?.submitButtonText}</span>
        {loading.value && <span class="loading loading-spinner loading-xs" />}
      </button>
    </form>
  );
}
