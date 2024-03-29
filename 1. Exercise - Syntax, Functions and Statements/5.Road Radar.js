function Radar([speed, area]){
    let overLimit = 0;
    switch(area){
        case 'motorway':
            overLimit = speed - 130;
            break;
            case 'interstate':
                overLimit = speed - 90;
                break;
                case 'city':
                    overLimit = speed - 50;
                    break;
                    case 'residential':
                        overLimit = speed - 20;
                        break;
    }
    if(overLimit > 40){
        console.log('reckless driving');
    }else if(overLimit > 20){
        console.log('excessive speeding');
    }else if(overLimit > 0){
        console.log('speeding');
    }
}
    Radar([50, 'city']);
    Radar([21, 'residential']);
    Radar([120, 'interstate']);
    Radar([200, 'motorway']);
