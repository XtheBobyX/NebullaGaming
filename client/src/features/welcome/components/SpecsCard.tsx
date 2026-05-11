function SpecsCard({
  icon,
  title,
  lists,
}: {
  icon: any;
  title: string;
  list: any;
}) {
  return (
    <div className="flex flex-col items-center gap-8 border-2 border-slate-950 bg-slate-900 p-12 py-4 shadow shadow-gray-600 hover:bg-slate-800 lg:gap-4">
      <img src={icon} alt="" className="h-12 w-12 lg:h-16 lg:w-16" />

      <div className="flex w-full flex-col gap-4">
        <h3 className="text-xl font-bold uppercase md:text-3xl lg:pt-4 lg:text-xl">
          {title}
        </h3>
        <ul className="flex flex-col gap-2 md:gap-8 lg:gap-4">
          {lists.map((item, index) => (
            <li className="text-lg md:text-2xl lg:text-lg" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SpecsCard;
