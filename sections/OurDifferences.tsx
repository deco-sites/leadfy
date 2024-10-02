export interface Card {
  label?: string;
  text?: string;
}

export interface Props {
  title?: string;
  cards?: Card[];
}

function OurDifferences({ title, cards }: Props) {
  return (
    <div
      id="our-differences"
      class="w-full mx-auto px-4 max-w-[1140px] mt-[100px]"
    >
      <h2 class="text-4xl lg:text-[55px] leading-tight text-center">{title}</h2>

      <div class="flex flex-col md:flex-row mt-5 md:mt-10 gap-5">
        {cards?.map((card) => (
          <div class="w-full md:w-1/3 flex flex-col items-center p-6 border-primary border-2 rounded-3xl">
            <h3 class="text-xl font-semibold text-center mb-3">{card.label}</h3>
            <p class="text-center">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurDifferences;
