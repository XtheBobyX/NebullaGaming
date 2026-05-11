import clsx from "clsx";

function PromotionsCard({ Icon, title, schedule, price, yellow = false }) {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-between bg-[#990707]/80 px-4 py-6 transition-colors duration-500 hover:bg-[#990707] md:px-20 lg:py-10",
        yellow && "text-yellow-500",
      )}
    >
      <div className="flex items-center gap-6 md:gap-8">
        <span className="text-5xl lg:text-7xl"> {<Icon />}</span>
        <div className="flex flex-col gap-1 md:gap-3">
          <p className="text-2xl font-bold lg:text-4xl">{title}</p>
          <p className="text-xl lg:text-2xl">{schedule}</p>
        </div>
      </div>

      <p className="pl-4 text-3xl font-bold md:pl-0 lg:text-4xl">{price}€</p>
    </div>
  );
}

export default PromotionsCard;
