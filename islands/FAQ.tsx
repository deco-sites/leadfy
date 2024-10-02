import { useSignal } from "@preact/signals";
import Icon from "site/components/ui/Icon.tsx";

export interface Question {
  /** @title Pergunta */
  label: string;
  /** @title Resposta */
  content: string;
}

export interface Props {
  title?: string;
  questions?: Question[];
}

export default function FAQ({
  title = "FAQ",
  questions = [
    {
      label: "Pergunta 1",
      content: "<p>Resposta da primeira pergunta</p>",
    },
    {
      label: "Pergunta 2",
      content: "<p>Resposta da segunda pergunta</p>",
    },
    {
      label: "Pergunta 3",
      content: "<p>Resposta da terceira pergunta</p>",
    },
    {
      label: "Pergunta 4",
      content: "<p>Resposta da quarta pergunta</p>",
    },
    {
      label: "Pergunta 5",
      content: "<p>Resposta da quinta pergunta</p>",
    },
  ],
}: Props) {
  const open = useSignal(false);

  return (
    <div
      id="faq"
      class="w-full mx-auto px-4 max-w-[1140px] mt-[100px] flex flex-col z-10 relative"
    >
      <h2 class="text-4xl lg:text-[55px] leading-tight text-center">{title}</h2>
      <ul class="flex flex-col gap-4 mt-5 md:mt-10">
        {questions?.slice(0, open.value ? undefined : 5).map((question) => (
          <li>
            <div className="collapse bg-primary relative">
              <input class="peer" type="checkbox" />
              <div class="peer-checked:hidden">
                <Icon
                  class="absolute right-6 top-5"
                  id="Plus"
                  width={32}
                  height={32}
                  strokeWidth={2}
                />
              </div>
              <div class="hidden peer-checked:block">
                <Icon
                  class="absolute right-6 top-5"
                  id="XMark"
                  width={32}
                  height={32}
                  strokeWidth={2}
                />
              </div>
              <div className="collapse-title px-6 pr-16 py-[22.5px] text-lg font-medium text-primary-content">
                {question.label}
              </div>
              <div
                className="collapse-content px-6 text-primary-content text-lg"
                dangerouslySetInnerHTML={{ __html: question.content }}
              />
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => (open.value = !open.value)}
        class="btn btn-primary btn-wide mt-8 mx-auto"
      >
        {open.value ? "Ver menos" : "Ver mais"}
      </button>
    </div>
  );
}
