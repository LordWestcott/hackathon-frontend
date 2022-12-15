import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

export type GridListProps = {
  title: string
  data:  GridListItem[];
};

export type GridListItem = {
  boxLetters: string | number;
  title: string;
  subtitle: string;
  bgColor?: string;
  href?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function GridList({title, data}: GridListProps) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {data.map((item, i) => (
          <li key={i} className="col-span-1 flex rounded-md shadow-sm">
            <div
              className={classNames(
                item?.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {typeof item.boxLetters === 'number' ? <span className="bg-white text-dono-orange rounded-full h-7 w-7 flex items-center justify-center font-bold text-md">{item.boxLetters}</span> : item.boxLetters }
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a href={item.href} className="font-medium text-gray-900 hover:text-gray-600">
                  {item.title}
                </a>
                <p className="text-gray-500">{item.subtitle}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
