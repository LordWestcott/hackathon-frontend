type BannerTypes = {
    color: 'orange' | 'purple' | 'green'
    title: string
    subtitle: string
    buttonText: string
}

export const Banner = ({ color, title, subtitle, buttonText }: BannerTypes) => {
    return (
        <>        {
            color === 'green' && (
                <div className="flex justify-between p-6 bg-dono-green max-w-[956px] rounded-xl my-8">
                    <div>
                        <p className="text-xl mb-2 font-bold text-white">{title}</p>
                        <p className="text-md font-semibold text-white">{subtitle}</p>
                    </div>
                    <button className="btn-primary border-t-[#0ba47d] border-x-[#0ba47d]">{buttonText}</button>
                </div>
            )
        }
            {
                color === 'orange' && (
                    <div className="flex justify-between p-6 bg-dono-orange max-w-[956px] rounded-xl my-8">
                        <div>
                            <p className="text-xl mb-2 font-bold text-white">{title}</p>
                            <p className="text-md font-semibold text-white">{subtitle}</p>
                        </div>
                        <button className="btn-primary border-t-[#cc7903] border-x-[#cc7903]">{buttonText}</button>
                    </div>
                )
            }
            {
                color === 'purple' && (
                    <div className="flex justify-between p-6 bg-dono-purple max-w-[956px] rounded-xl my-8">
                        <div>
                            <p className="text-xl mb-2 font-bold text-white">{title}</p>
                            <p className="text-md font-semibold text-white">{subtitle}</p>
                        </div>
                        <button className="btn-primary border-t-[#a568cc] border-x-[#a568cc]">{buttonText}</button>
                    </div>
                )
            }
        </>


    )
}