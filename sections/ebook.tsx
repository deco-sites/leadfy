import { useState } from 'react';
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
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
    // This will execute the RD Station script to render the form dynamically
    const script = document.createElement('script');
    script.src = 'https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js';
    script.type = 'text/javascript';
    script.onload = () => {
      // Create the form after the script loads
      new RDStationForms('blog-convertion-ad09cf5dd6077d4580d4', 'null').createForm();
    };
    document.body.appendChild(script);
  };

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto flex
