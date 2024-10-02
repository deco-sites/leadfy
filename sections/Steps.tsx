import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Step {
  label?: string;
  icon?: ImageWidget;
  text?: string;
}

export interface CTA {
  href?: string;
  text?: string;
  /** @description Abrir o link em uma nova guia */
  openInNewTab?: boolean;
}

export interface Props {
  title?: string;
  description?: string;
  steps?: Step[];
  cta?: CTA;
  /** @description Exibir sequência numérica dos passos */
  showNumericSequence?: boolean;
}

function Steps({
  title = "",
  description = "",
  steps,
  cta,
  showNumericSequence,
}: Props) {
  return (
    <div class="w-full mx-auto md:px-4 max-w-[1140px] mt-[100px]">
      <div class="w-full md:rounded-3xl bg-primary text-primary-content flex flex-col p-5 md:p-16">
        <h2 class="text-4xl lg:text-[55px] leading-tight text-center">
          {title}
        </h2>
        {description && <p class="text-center mt-4">{description}</p>}

        <div class="flex flex-col md:flex-row flex-wrap mt-5 bg-secondary rounded-3xl justify-center p-5 gap-6">
          {steps?.map((step, index) => (
            <div class="w-full md:w-1/3 flex flex-col items-center">
              {step.icon && (
                <div class="relative">
                  <Image
                    src={step.icon}
                    alt={step.label}
                    width={106}
                    height={106}
                  />
                  {showNumericSequence && (
                    <div class="absolute top-1/2 left-1/2 -translate-x-[150%] -translate-y-1/2">
                      <span class="font-bold text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {step.text && <p class="text-center max-w-32">{step.text}</p>}
            </div>
          ))}
        </div>

        {cta && (
          <a
            href={cta.href}
            class="btn bg-secondary hover:bg-secondary text-primary btn-wide mt-8 mx-auto border-none hover:text-primary-content text-lg"
            target={cta.openInNewTab ? "_blank" : "_self"}
          >
            {cta.text}
          </a>
        )}
      </div>
    </div>
  );
}

export default Steps;
