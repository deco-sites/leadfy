import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
  image?: ImageWidget;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
}

function Footer({ image, text, alt, height = 64, width = 64 }: Props) {
  return (
    <footer class="bg-primary text-primary-content w-full mt-[100px]">
      <div class="w-full mx-auto px-4 max-w-[1140px] flex justify-between items-center py-5">
        {text && <p>{text}</p>}
        {image && (
          <Image
            src={image || ""}
            alt={alt || ""}
            height={height || 20}
            width={width || 50}
          />
        )}
      </div>
    </footer>
  );
}

export default Footer;
