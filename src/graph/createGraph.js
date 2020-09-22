import Brazil from '@svg-maps/brazil';
import distances from '../distances'

export default function createGraph() {
    const { locations } = Brazil;
    Object.keys(distances).forEach(travel => {
        const origin = travel[0] + travel[1];
        const destination = travel[3] + travel[4];
        const originIndex = locations.findIndex(location => location.id === origin);
        const destinationObject = locations.find(location => location.id === destination);

        destinationObject.distance = distances[`${origin}-${destination}`]

        if(locations[originIndex].neighbours && locations[originIndex].neighbours.length) {
            locations[originIndex].neighbours.push(destinationObject)
        } else {
            locations[originIndex].neighbours = [destinationObject]
        }
    })
    Brazil.locations = locations;
}