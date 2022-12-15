export type TableShape = {
    columns: string[];
}

export type TableRow = TableData[];

export type TableData = {
    data: any;
    isBold: boolean;
}

export type TableProps = {
    columns: string[];
    rows: TableRow[];
    title?: string;
    subtitle?: string;
}

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]


  
  export default function Table({columns, rows, title, subtitle}: TableProps) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        {title || subtitle && (
            <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                <p className="mt-2 text-sm text-gray-700">
                    {subtitle}
                </p>
            </div>
            </div>
        )}
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      {columns.map((column, i) => (
                        <th key={i} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            {column}
                        </th>
                      ))} 
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {rows.map((row, i) => { 
                        return(
                            <tr key={i}>
                                {row.map((cell, j) => {
                                    if (cell.isBold)
                                        return(
                                            <td key={j} className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {cell.data}
                                          </td>
                                        )
                                    
                                    return(
                                        <td key={j} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {cell.data}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  