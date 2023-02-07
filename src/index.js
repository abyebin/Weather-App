import './style.css';
import { locationX} from './getCurrentLocation';
import { searchCity } from './searchCity';


const getLocation = document.getElementById('getLocation');
getLocation.addEventListener('click', locationX);

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click',searchCity)


