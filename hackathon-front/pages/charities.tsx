import ButtonList from "../components/ButtonList";
import GridList from "../components/gridlist";
import Shell from "../components/shell";

export default function Charities() {
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
    {
        id: 'britishHeartFoundation',
        logo: '/bhf.png',
    },
    {
        id: 'cancerResearch',
        logo: '/cancerresearch.png',
    },
    {
        id: 'stJohnAmublance',
        logo: '/sja.png',
    },
    {
        id: 'britishRedCross',
        logo: '/redcross.png',
    },
    {
        id: 'alzheimersResearchUk',
        logo: '/alzheimers.png',
    },
    {
        id: 'nspcc',
        logo: '/nspcc.png',
    }
    ]

    const donationSummary = [    {
        title: 'Macmillan',
        subtitle: "£103.45",
        bgColor: 'bg-[#f54336]',
        boxLetters: 1,
        
    },
    {
        title: 'Trussel Trust',
        subtitle: "£103.45",
        bgColor: 'bg-[#f54336]',
        boxLetters: 2,
    },
    {
        title: 'Water Aid',
        subtitle: "£98.10",
        bgColor: 'bg-[#f54336]',
        boxLetters: 3,
    },
    {
        title: 'British Heart Foundation',
        subtitle: "£00.00",
        bgColor: 'bg-[#f54336]',
        boxLetters: 4,
    },
    {
        title: 'Cancer Research UK',
        subtitle: "£50.35",
        bgColor: 'bg-[#f54336]',
        boxLetters: 5,
    },
    {
        title: 'St John Ambulance',
        subtitle: "£00.00",
        bgColor: 'bg-[#f54336]',
        boxLetters: 6,
    },
    {
        title: 'British Red Cross',
        subtitle: "£00.00",
        bgColor: 'bg-[#f54336]',
        boxLetters: 7,
    },
    {
        title: 'Alzheimers Society',
        subtitle: "£00.00",
        bgColor: 'bg-[#f54336]',
        boxLetters: 8,
    },
    {
        title: 'NSPCC',
        subtitle: "£00.00",
        bgColor: 'bg-[#f54336]',
        boxLetters: 9,
    },
  ]

    return (
        <Shell title={"Charities"}>
            <div className='pt-6'>
                <p className="text-lg font-medium text-gray-500">Your donations so far:</p>
                <GridList data={donationSummary} title="" />

                <p className="text-lg font-medium text-gray-500">Your selected charities:</p>


                <div className='pb-12 flex justify-center items-center'>
                    <ButtonList title='Select up to 3 charities to donate to:' data={charities} />
                </div>
            </div>
        </Shell>
    )
}