import Brazil from '@svg-maps/brazil';

export default function createGraph() {
    Brazil.locations = Brazil.locations.map(location => {
        switch (location.id) {
            case 'ac':
                location.neighbours = Brazil.locations.filter(loc => ['am', 'ro'].includes(loc.id))
                break;
            case 'al':
                location.neighbours = Brazil.locations.filter(loc => ['pe', 'se', 'ba'].includes(loc.id))
                break;
            case 'ap':
                location.neighbours = Brazil.locations.filter(loc => ['pa'].includes(loc.id))
                break;
            case 'am':
                location.neighbours = Brazil.locations.filter(loc => ['rr', 'ac', 'ro', 'mt', 'pa'].includes(loc.id))
                break;
            case 'ba':
                location.neighbours = Brazil.locations.filter(loc => ['se', 'al', 'pe', 'pi', 'to', 'go', 'mg', 'es'].includes(loc.id))
                break;
            case 'ce':
                location.neighbours = Brazil.locations.filter(loc => ['rn', 'pb', 'pe', 'pi'].includes(loc.id))
                break;
            case 'df':
                location.neighbours = Brazil.locations.filter(loc => ['go'].includes(loc.id))
                break;
            case 'es':
                location.neighbours = Brazil.locations.filter(loc => ['ba', 'mg', 'rj'].includes(loc.id))
                break;
            case 'go':
                location.neighbours = Brazil.locations.filter(loc => ['df', 'to', 'mt', 'ms', 'sp', 'mg', 'ba'].includes(loc.id))
                break;
            case 'ma':
                location.neighbours = Brazil.locations.filter(loc => ['pa', 'to', 'pi'].includes(loc.id))
                break;
            case 'mt':
                location.neighbours = Brazil.locations.filter(loc => ['ro', 'am', 'pa', 'to', 'go', 'ms'].includes(loc.id))
                break;
            case 'ms':
                location.neighbours = Brazil.locations.filter(loc => ['mt', 'go', 'mg', 'sp', 'pr'].includes(loc.id))
                break;
            case 'mg':
                location.neighbours = Brazil.locations.filter(loc => ['ba', 'go', 'ms', 'sp', 'rj', 'es'].includes(loc.id))
                break;
            case 'pa':
                location.neighbours = Brazil.locations.filter(loc => ['ap', 'rr', 'am', 'mt', 'to', 'ma'].includes(loc.id))
                break;
            case 'pb':
                location.neighbours = Brazil.locations.filter(loc => ['rn', 'ce', 'pe'].includes(loc.id))
                break;
            case 'pr':
                location.neighbours = Brazil.locations.filter(loc => ['sp', 'ms', 'sc'].includes(loc.id))
                break;
            case 'pe':
                location.neighbours = Brazil.locations.filter(loc => ['pb', 'ce', 'pi', 'ba', 'al'].includes(loc.id))
                break;
            case 'pi':
                location.neighbours = Brazil.locations.filter(loc => ['ma', 'to', 'ba', 'pe', 'ce'].includes(loc.id))
                break;
            case 'rj':
                location.neighbours = Brazil.locations.filter(loc => ['es', 'mg', 'sp'].includes(loc.id))
                break;
            case 'rn':
                location.neighbours = Brazil.locations.filter(loc => ['ce', 'pb'].includes(loc.id))
                break;
            case 'rs':
                location.neighbours = Brazil.locations.filter(loc => ['sc'].includes(loc.id))
                break;
            case 'ro':
                location.neighbours = Brazil.locations.filter(loc => ['ac', 'am', 'mt'].includes(loc.id))
                break;
            case 'rr':
                location.neighbours = Brazil.locations.filter(loc => ['am', 'pa'].includes(loc.id))
                break;
            case 'sc':
                location.neighbours = Brazil.locations.filter(loc => ['rs', 'pr'].includes(loc.id))
                break;
            case 'sp':
                location.neighbours = Brazil.locations.filter(loc => ['mg', 'ms', 'pr', 'rj'].includes(loc.id))
                break;
            case 'se':
                location.neighbours = Brazil.locations.filter(loc => ['al', 'ba'].includes(loc.id))
                break;
            case 'to':
                location.neighbours = Brazil.locations.filter(loc => ['pa', 'mt', 'go', 'ba', 'pi', 'ma'].includes(loc.id))
                break;
            default:
                break;
        }
        return location;
    })
}