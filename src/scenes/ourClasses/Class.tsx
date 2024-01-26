import { ClassType } from "@/shared/types";

type ClassProps = {
  item: ClassType;
};
function Class({ item }: ClassProps) {
  const { image, name, description } = item;
  const overlayStyles = `px-5 absolute z-20 flex gap-2 h-[335px] w-[446.67px] flex-col items-center justify-center rounded-md
  whitespace-normal bg-primary-500 text-white opacity-0 transition duration-500 hover:opacity-90 `;
  return (
    <li className="relative inline-block h-[335px]">
      <div className={overlayStyles}>
        <p className="font-bold text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img className="rounded-md" src={image} alt={`${image}`} />
    </li>
  );
}

export default Class;
