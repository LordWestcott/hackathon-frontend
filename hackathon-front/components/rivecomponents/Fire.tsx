import Rive, { useStateMachineInput } from '@rive-app/react-canvas';
import { useRive } from '@rive-app/react-canvas';



export const Fire = ({active, heightPx, widthPx}: {active: boolean, heightPx?: number, widthPx?: number}) => {
    const {RiveComponent, rive} = useRive({
        src: '/fire_button.riv',
        autoplay: true,
        stateMachines: ['Fire','ON/OFF', 'State Machine 1'],
    });

    const fireInput = useStateMachineInput(rive, 'State Machine 1', 'ON', active);
    

    return (
        <RiveComponent
            style={{height: heightPx ? `${heightPx}px` : 'auto', width: widthPx ? `${widthPx}px` : 'auto'}}         
            // onMouseEnter={() => rive && rive.play()}
            // onMouseLeave={() => rive && rive.pause()}
        />
    )
}