'use client';
import useExperienceItems from '@/hooks/experience/use-experience-items';

export default function ExperienceTimeline() {
  const experienceItems = useExperienceItems();

  return (
    <section className="md:container mx-auto sm:px-4 md:px-20 xl:px-40 py-14 flex justify-center w-full">
      <div className="-my-6">
        {experienceItems.map((item, index) => (
          <div key={index} className="relative pl-8 sm:pl-[15rem] py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 dark:before:bg-gray-400 sm:before:ml-[13rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 dark:after:border-[#0d0d0d] after:rounded-full sm:after:ml-[13rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-44 h-6 mb-3 sm:mb-0 text-black dark:text-[#0d0d0d] bg-primary dark:bg-primary rounded-full">
                {item.date}
              </time>
              <div className="text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </div>
            </div>
            <div className="text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
