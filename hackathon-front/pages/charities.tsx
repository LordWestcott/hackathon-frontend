import { Banner } from "../components/Banner";
import ButtonList from "../components/ButtonList";
import GridList from "../components/gridlist";
import Shell from "../components/shell";

export default function Charities() {

    const donationSummary = [{
        title: 'Macmillan',
        subtitle: "£103.45",
        bgColor: 'bg-dono-orange',
        boxLetters: 1,

    },
    {
        title: 'Trussel Trust',
        subtitle: "£103.45",
        bgColor: 'bg-dono-orange',
        boxLetters: 2,
    },
    {
        title: 'Water Aid',
        subtitle: "£98.10",
        bgColor: 'bg-dono-orange',
        boxLetters: 3,
    },
    {
        title: 'British Heart Foundation',
        subtitle: "£00.00",
        bgColor: 'bg-dono-orange',
        boxLetters: 4,
    },
    {
        title: 'Cancer Research UK',
        subtitle: "£50.35",
        bgColor: 'bg-dono-orange',
        boxLetters: 5,
    },
    {
        title: 'St John Ambulance',
        subtitle: "£00.00",
        bgColor: 'bg-dono-orange',
        boxLetters: 6,
    },
    {
        title: 'British Red Cross',
        subtitle: "£00.00",
        bgColor: 'bg-dono-orange',
        boxLetters: 7,
    },
    {
        title: 'Alzheimers Society',
        subtitle: "£00.00",
        bgColor: 'bg-dono-orange',
        boxLetters: 8,
    },
    {
        title: 'NSPCC',
        subtitle: "£00.00",
        bgColor: 'bg-dono-orange',
        boxLetters: 9,
    },
    ]


    const charities = [
        {
            id: 'macmillan',
            logo: '/macmillan.png',
        },
        {
            id: 'trusselTrust',
            logo: '/trusseltrust.png',
        },
        {
            id: 'waterAid',
            logo: '/wateraid.png',
        },
    ]
    return (
        <Shell title={"Charities"}>
            <div className='pt-6 max-w-[956px] items-start flex flex-col space-y-4 h-full'>
                <div>
                    <p className="text-lg font-medium text-gray-500">Your selected charities:</p>
                    <ButtonList title="" data={charities} isSaveable={false} />
                </div>
                <div className="mb-7  ">
                    <p className="text-lg font-medium text-gray-500">Your donations so far:</p>
                    <GridList data={donationSummary} title="" />
                </div>
                <div className="w-full mt-auto">
                    <Banner title="Feeling Generous?" subtitle='Make a one-off donation to one of your charities and increase those numbers!' color="purple" buttonText='Donate Now' />
                </div>
            </div>


        </Shell>
    )
}