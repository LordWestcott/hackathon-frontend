import { useState } from "react";

export type ButtonListProps = {
    title: string
    data: ButtonListItem[];
    isSaveable?: boolean;
    buttonCallback: () => void
    buttonText?: string
};

export type ButtonListItem = {
    id: string;
    logo: string;
    title?: string;
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function ButtonList({ title, data, isSaveable=true, buttonCallback=()=>{}, buttonText }: ButtonListProps) {
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    
    const onClickCallback = (id: string, isActive: boolean) => {
        if (isActive) {
            const filterItems = selectedItems.filter(item => item !== id);
            setSelectedItems(filterItems)
        }

        if (selectedItems.length < 3) {
            setSelectedItems([...selectedItems, id])
        }
        
    }

    return (
        <div className="flex items-center flex-col">
            <h2 className="text-2xl font-bold mb-4 text-gray-500">{title}</h2>
            <div>
            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 mb-4 max-w-3xl">
                {data.map((item, i) => {
                    const isActive = selectedItems.includes(item.id)
                    return (
                        <li key={item.id} className="col-span-1 flex rounded-md ">
                            <button onClick={() => onClickCallback(item.id, isActive)} className={classNames(
                                isActive ? 'bg-[#def5ff] border-[#84d8ff]' : 'border-gray-200 bg-white',
                                'flex flex-1 p-4 h-52 items-center justify-between rounded-3xl border-2 border-b-4 active:bg-[#def5ff] active:border-[#84d8ff] active:translate-y-[2px] active:border-b-2 '
                            )}>
                                <div className="flex flex-1 flex-col items-center justify-center p-4 h-44">
                                    <img src={item.logo} className="object-contain h-full w-60"/>
                                    {title && 
                                        <span className="text-lg font-medium text-gray-900 mt-2">{item.title}</span>
                                    }
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
            {isSaveable &&
                <div className="flex justify-end mt-5">
                    <button onClick={() => buttonCallback()} className="btn-primary">{buttonText}</button>
                </div>
            }
            </div>

        </div>
    )
}

