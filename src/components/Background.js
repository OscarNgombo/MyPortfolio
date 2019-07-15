import React from 'react'
import Particles from 'react-particles-js';

export default function Background() {

    const OptionBG = {
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 4,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 1
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 2,
	            "direction": "top",
	            "out_mode": "in"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "grab"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 100,
	                "duration": 1,
	                "size": 3,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 200,
	                "duration": 2
	            }
	        }
	    }
	}

    return (
        <Particles
    params={OptionBG} />
    )
}
