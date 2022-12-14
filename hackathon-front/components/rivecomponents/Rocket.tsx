import Rive from '@rive-app/react-canvas';
import { useRive } from '@rive-app/react-canvas';

export const Rocket = () => {
    const {RiveComponent, rive} = useRive({
        src: '/rocket.riv',
        autoplay: true,
    });

    return (
        <RiveComponent
            style={{height: '600px', width: '100%'}}
            // onMouseEnter={() => rive && rive.play()}
            // onMouseLeave={() => rive && rive.pause()}
        />
    )
}
