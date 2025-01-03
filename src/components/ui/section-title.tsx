export default function SectionTitle({ title, id }: { title: string; id?: string }) {
  return (
    <div
      className="relative flex items-center justify-center w-full"
      id={id}
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-dashed border-gray-300"></div>
      </div>
      <div className="relative z-10 bg-white dark:bg-[#0d0d0d] px-4 py-2 shadow-md rounded-full">
        <p className="font-medium dark:text-white">{title}</p>
      </div>
    </div>
  );
}
