import petFoodsIcon from '../images/icon-pet-food.svg';
import transportationIcon from '../images/icon-transportation.svg';
import toysIcon from '../images/icon-toys.svg';
import bowlsCups from '../images/icon-bowls-and-cups.svg';
import shampoos from '../images/icon-shampoos.svg';
import vitamins from '../images/icon-vitamins.svg';
import medicines from '../images/icon-medicines.svg';
import collarsLeashes from '../images/icon-collars-leashes.svg';
import sleepingAreasIcon from '../images/icon-sleeping-area.svg';

import katrinePic from '../images/pets-katrine.png';
import jenniferPic from '../images/pets-jennifer.png';
import woodyPic from '../images/pets-woody.png';
import sophiaPic from '../images/pets-sophia.png';
import timmyPic from '../images/pets-timmy.png';
import charlyPic from '../images/pets-charly.png';
import scarlettPic from '../images/pets-scarlet.png';
import freddiePic from '../images/pets-freddie.png';

export const HELPS = [
  { id: 1, name: 'Pet food', img: petFoodsIcon },
  { id: 2, name: 'Transportation', img: transportationIcon },
  { id: 3, name: 'Toys', img: toysIcon },
  { id: 4, name: 'Bowls and cups', img: bowlsCups },
  { id: 5, name: 'Shampoos', img: shampoos },
  { id: 6, name: 'Vitamins', img: vitamins },
  { id: 7, name: 'Medicines', img: medicines },
  { id: 8, name: 'Collars / leashes', img: collarsLeashes },
  { id: 9, name: 'Sleeping areas', img: sleepingAreasIcon },
];

export const PETS = [
  {
    id: 1,
    name: 'Katrine',
    img: katrinePic,
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
    facts: {
      age: '6 months',
      inoculations: ['panleukopenia'],
      diseases: ['none'],
      parasites: ['none'],
    },
  },

  {
    id: 2,
    name: 'Jennifer',
    img: jenniferPic,
    type: 'Dog',
    breed: 'Labrador',
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    facts: {
      age: '2 months',
      inoculations: ['none'],
      diseases: ['none'],
      parasites: ['none'],
    },
  },
  {
    id: 3,
    name: 'Woody',
    img: woodyPic,
    type: 'Dog',
    breed: 'Golden Retriever',
    description:
      'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
    facts: {
      age: '3 years 6 months',
      inoculations: ['adenovirus', 'distemper'],
      diseases: ['right back leg mobility reduced'],
      parasites: ['none'],
    },
  },
  {
    id: 4,
    name: 'Sophia',
    img: sophiaPic,
    type: 'Dog',
    breed: 'Shih tzu',
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    facts: {
      age: '1 month',
      inoculations: ['parvovirus'],
      diseases: ['none'],
      parasites: ['none'],
    },
  },
  {
    id: 5,
    name: 'Timmy',
    img: timmyPic,
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
    facts: {
      age: '2 years 3 months',
      inoculations: ['calicivirus', 'viral rhinotracheitis'],
      diseases: ['kidney stones'],
      parasites: ['none'],
    },
  },
  {
    id: 6,
    name: 'Charly',
    img: charlyPic,
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
    facts: {
      age: '8 years',
      inoculations: ['bordetella bronchiseptica', 'leptospirosis'],
      diseases: ['deafness', 'blindness'],
      parasites: ['lice', 'fleas'],
    },
  },
  {
    id: 7,
    name: 'Scarlett',
    img: scarlettPic,
    type: 'Dog',
    breed: 'Jack Russell Terrier',
    description:
      'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
    facts: {
      age: '3 months',
      inoculations: ['parainfluenza'],
      diseases: ['none'],
      parasites: ['none'],
    },
  },
  {
    id: 8,
    name: 'Freddie',
    img: freddiePic,
    type: 'Cat',
    breed: 'British Shorthair',
    description:
      'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
    facts: {
      age: '2 months',
      inoculations: ['rabies'],
      diseases: ['none'],
      parasites: ['none'],
    },
  },
];

export const PAGES = {
  main: 'main',
  pets: 'pets',
};
