import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Slider from "site/components/ui/Slider.tsx";
import Icon from "site/components/ui/Icon.tsx";
export interface Banner {
  image?: ImageWidget;
  alt?: string;
}
export interface Props {
  /** @description ID da seção para links de ancoragem */
  sectionId?: string;
  title?: string;
  /** @description Insira o iframe do Mapa **/
  map?: string;
  banners?: Banner[];
}

function Maps({
  sectionId = "unidades",
  title = "",
  map = "",
  banners = [],
}: Props) {
  return (
    <div id={sectionId} class="w-full mx-auto px-4 max-w-[1140px] mt-[100px]">
      <h2 class="text-4xl lg:text-[55px] leading-tight text-center">{title}</h2>

      <div class="flex flex-col sm:flex-row gap-8 mt-5 md:mt-10">
        <div
          class="flex justify-center items-center w-full h-[300px] md:h-auto md:w-1/2"
          dangerouslySetInnerHTML={{ __html: map }}
        />

        <div class="flex relative w-full md:w-1/2">
          <Slider class="carousel carousel-center w-full gap-6">
            {banners.map((banner, index) => (
              <Slider.Item
                index={index}
                class="carousel-item w-full flex justify-center items-center"
              >
                <Image
                  src={banner.image || ""}
                  alt={banner.alt}
                  width={450}
                  height={450}
                  class="w-full"
                />
              </Slider.Item>
            ))}
          </Slider>

          <div class="absolute flex justify-between top-1/2 -translate-y-1/2 left-0 w-full text-primary">
            <Slider.PrevButton
              class="flex justify-center items-center"
              disabled={false}
            >
              <Icon id="ChevronLeft" width={64} height={64} strokeWidth={1} />
            </Slider.PrevButton>

            <Slider.NextButton
              class="flex justify-center items-center"
              disabled={false}
            >
              <Icon
                id="ChevronLeft"
                width={64}
                height={64}
                strokeWidth={1}
                class="rotate-180"
              />
            </Slider.NextButton>
          </div>
        </div>

        <Slider.JS rootId={sectionId} infinite />
      </div>
    </div>
  );
}

export default Maps;
