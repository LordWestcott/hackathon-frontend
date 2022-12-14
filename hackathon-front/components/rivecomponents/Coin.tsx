import { useRive } from '@rive-app/react-canvas';

export const Coin = () => {
    const {RiveComponent, rive} = useRive({
        src: 'https://public.rive.app/community/runtime-files/2131-4192-coin.riv',
        autoplay: true,
    });

    return (
        <RiveComponent
            style={{height: '50px', width: '50px'}}
            // onMouseEnter={() => rive && rive.play()}
            // onMouseLeave={() => rive && rive.pause()}
        />
    )
}