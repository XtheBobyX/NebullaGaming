function ContactCard({
  Icon,
  title,
  subtitle,
  third = undefined,
}: {
  Icon: any;
  title: string;
  subtitle: string;
  third?: undefined | string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#29272d] py-6 text-center drop-shadow-xl drop-shadow-[#ffffff33] hover:outline">
      <Icon size={28} />
      <p className="text-xl font-bold">{title}</p>
      <p className="max-w-60">{subtitle}</p>
      {third && <p>{third}</p>}
    </div>
  );
}

export default ContactCard;
