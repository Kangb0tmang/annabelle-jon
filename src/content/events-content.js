import React from 'react';
import Car from '../assets/car.svg';
import Chapel from '../assets/chapel.svg';
import Camera from '../assets/camera.svg';
import Drinks from '../assets/drinks.svg';
import Reception from '../assets/reception.svg';
import Sparklers from '../assets/sparklers.svg';

export const events = [
  {
    icon: <Car />,
    description: 'Guests arrive',
    time: '2:30pm',
  },
  {
    icon: <Chapel />,
    description: 'Ceremony starts',
    time: '3:00pm',
  },
  {
    icon: <Camera />,
    description: 'Photos',
    time: '3:45pm',
  },
  {
    icon: <Drinks />,
    description: 'Canapes',
    time: '5:30pm',
  },
  {
    icon: <Reception />,
    description: 'Reception begins',
    time: '6:00pm',
  },
  {
    icon: <Sparklers />,
    description: 'Sparklers send off',
    time: '10:30pm',
  },
];
