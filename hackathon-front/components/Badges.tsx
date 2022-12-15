import { FcApproval, FcLike, FcMoneyTransfer } from "react-icons/fc"
import { Fire } from "./rivecomponents/Fire"

export const Badges = () => {
    return (
        <div className="flex flex-col mt-8">
            <div className="flex space-x-5">
                <div className="flex flex-col space-y-2 text-center h-56 w-56 bg-white rounded-xl p-8 items-center justify-center">
                    <FcMoneyTransfer className="h-12 w-12 grayscale" />
                    <p className="text-md font-semibold text-gray-500">Weekly Donations</p>
                    <p className="text-xl font-semibold text-gray-600">1/3</p>
                </div>
                <div className="flex flex-col space-y-2 text-center h-56 w-56 bg-white rounded-xl p-8 items-center justify-center">
                    <Fire active={true} heightPx={48} widthPx={48} />
                    <p className="text-md font-semibold text-gray-500">Streak Record</p>
                    <p className="text-xl font-semibold text-gray-600">50</p>
                </div>
                <div className="flex flex-col space-y-2 text-center h-56 w-56 bg-white rounded-xl p-8 items-center justify-center">
                    <FcLike className="h-12 w-12 grayscale" />
                    <p className="text-md font-semibold text-gray-500">Charities Helped</p>
                    <p className="text-xl font-semibold text-gray-600">3/9</p>
                </div>
                <div className="flex flex-col space-y-2 text-center h-56 w-56 bg-white rounded-xl p-8 items-center justify-center">
                    <FcApproval className="h-12 w-12" />
                    <p className="text-md font-semibold text-gray-500">Share with a friend</p>
                    <p className="text-xl font-semibold text-gray-600">1/1</p>
                </div>
            </div>
        </div>
    )
}