import { useRouter } from 'next/router';
import ButtonList from '../components/ButtonList'
import { LandingPage } from '../components/LandingPage'

export default function SelectCharities() {
    const router = useRouter();

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

    const navigateToDashboard = () => {
        router.push('/launch')
    }

    return (
        <div className='pb-12 flex justify-center items-center h-screen'>
            <ButtonList title='Select up to 3 charities to donate to:' data={charities} buttonCallback={navigateToDashboard} buttonText="Continue" />
        </div>
    )
}
