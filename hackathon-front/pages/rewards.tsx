import ButtonList from "../components/ButtonList";
import Shell from "../components/shell";

export default function Rewards() {

    const rewards = [
        {
            id: 'odeon',
            logo: '/Odeon.png',
            title: '25% off',
        },
        {
            id: 'argos',
            logo: '/Argos.png',
            title: '10£ cash back',
        },
        {
            id: 'boohoo',
            logo: '/Boohoo.png',
            title: '15% off',

        },
        {
            id: 'pizzaExpress',
            logo: '/PizzaExpress.png',
            title: 'Free second pizza',
        },
        {
            id: 'pizzaHut',
            logo: '/PizzaHut.png',
            title: 'Free Chicken Strips',
        },
        {
            id: 'roblox',
            logo: '/Roblox.png',
            title: '50 Robux',
        },
        ]

    return (
        <>
            <Shell title="Rewards">
                <div className="pt-6">
                    <div className='pb-12 flex justify-center items-center'>
                        <ButtonList title="You've earned these rewards" data={rewards} isSaveable={false}/>
                    </div>
                </div>
            </Shell>
        </>
    )

}