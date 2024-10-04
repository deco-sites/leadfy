import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  image?: ImageWidget;
  /**
   * @format textarea
   */
  downloadLink?: string;
  /**
   * @format rich-text
   */
  buttonText?: string;
}

export default function EbookSection({
  title = "Download Our Free Ebook",
  description = "Gain valuable insights and knowledge with our comprehensive ebook. Download now!",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/b0f8ca2d-9c83-48f7-88de-1a6e6d1e9eb7",
  downloadLink = "#",
  buttonText = "Download Ebook"
}: Props) {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Ebook Cover"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2">
          <h2
            className="text-3xl font-bold mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="text-gray-600 mb-6"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <a
            href={downloadLink}
            download
            className="btn btn-primary"
            dangerouslySetInnerHTML={{ __html: buttonText }}
          />
        </div>
      </div>
    </section>
  );
}
