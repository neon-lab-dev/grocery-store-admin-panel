type Props = {
  title: string;
  data: string | number;
  opacity?: number;
};
const InfoCard = ({ title, data, opacity }: Props) => {
  return (
    <div className="flex flex-col p-4 gap-2 w-[269px] rounded-2xl border border-accent-200 bg-white">
      <h3
        style={{
          opacity: opacity,
        }}
        className="text-base leading-5 text-accent-500"
      >
        {title}
      </h3>
      <span
        style={{
          opacity: opacity,
        }}
        className="font-bold text-[32px] text-accent-700 leading-[38.73px]"
      >
        {data}
      </span>
    </div>
  );
};
export default InfoCard;
