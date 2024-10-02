import { useScript } from "deco/hooks/useScript.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Logo {
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
}

interface CTA {
  href?: string;
  text?: string;
  /** @description Abrir o link em uma nova guia */
  openInNewTab?: boolean;
}

interface NavItem {
  label?: string;
  href?: string;
  /** @description Abrir o link em uma nova guia */
  openInNewTab?: boolean;
}

interface Props {
  logo?: Logo;
  navItems?: NavItem[];
  cta?: CTA;
  /**
   * @description Background color for the header
   * @format color-input
   */
  backgroundColor?: string;
}

const script = () => {
  // Make the header sticky on scroll
  const header = document.getElementById("header");
  if (header) {
    globalThis.onscroll = function () {
      if (globalThis.scrollY > 0) {
        const headerHeight = header.offsetHeight;

        header.classList.add("fixed");
        header.style.boxShadow = "0 0 36px rgba(0, 0, 0, 0.5)";
        document.body.style.paddingTop = `${headerHeight}px`;
      } else {
        header.classList.remove("fixed");
        document.body.style.paddingTop = "0";
        header.style.boxShadow = "none";
      }
    };
  }
};

function Header({ logo, navItems, cta, backgroundColor = "#ffffff" }: Props) {
  return (
    <>
      <header id="header" class="top-0 left-0 w-full z-50" style={{ backgroundColor }}>
        <div class="w-full mx-auto px-4 max-w-[1140px] py-4 flex items-center justify-between">
          <a
            href="/"
            class="flex flex-row gap-1 items-center justify-center text-xs"
          >
            {logo && (
              <Image
                src={logo.image || ""}
                alt={logo.alt || ""}
                height={logo.height || 20}
                width={logo.width || 50}
              />
            )}
          </a>

          <div class="w-full flex justify-end items-center gap-10">
            {navItems && (
              <>
                <nav class="hidden md:flex flex-row gap-4 items-center justify-center text-base font-semibold">
                  {navItems.map((item) => (
                    <a
                      href={item.href || ""}
                      target={item.openInNewTab ? "_blank" : "_self"}
                      class="hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="dropdown dropdown-end md:hidden">
                  <div
                    tabIndex={0}
                    role="button"
                    className="bg-primary text-primary-content flex items-center justify-center w-8 h-8"
                  >
                    <Icon
                      class="shrink-0"
                      id="Bars3"
                      width={24}
                      height={24}
                      strokeWidth={1}
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    {navItems.map((item) => (
                      <li>
                        <a
                          target={item.openInNewTab ? "_blank" : "_self"}
                          href={item.href || ""}
                          class="hover:text-primary"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            {cta && (
              <a
                href={cta.href || ""}
                target={cta.openInNewTab ? "_blank" : "_self"}
                class="hidden md:inline-flex btn btn-sm btn-primary h-10 text-base font-medium"
              >
                {cta.text}
              </a>
            )}
          </div>
        </div>
      </header>
      <script
        type="module"
        dangerouslySetInnerHTML={{ __html: useScript(script) }}
      />
    </>
  );
}

export default Header;
