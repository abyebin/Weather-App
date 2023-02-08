import './style.css';
import { locationX} from './getCurrentLocation';
import { searchCity } from './searchCity';
import { clocks } from './clock';


const getLocation = document.getElementById('getLocation');
getLocation.addEventListener('click', locationX);

const submitButton = document.getElementById('submit')
submitButton.addEventListener('click',searchCity)

const clockView = document.querySelector('.homeScreen')
clockView.addEventListener('click',locationX)

window.onload = clocks()


