//Feastly banners

import feastly_pic from '../../assets/images/feastly/feastly.jpg';
import meera_persona from '../../assets/images/feastly/user_personas/meera.png';
import neel_persona from '../../assets/images/feastly/user_personas/neel.png';
import vikram_persona from '../../assets/images/feastly/user_personas/vikram.png';
import zara_persona from '../../assets/images/feastly/user_personas/zara.png';
import meera_journey from '../../assets/images/feastly/user_journeys/meera.png';
import neel_journey from '../../assets/images/feastly/user_journeys/neel.png';
import vikram_journey from '../../assets/images/feastly/user_journeys/vikram.png';
import zara_journey from '../../assets/images/feastly/user_journeys/zara.png';
import research_summary from '../../assets/images/feastly/user-research-summary.png';
import what_user_said from '../../assets/images/feastly/what_user_said.png';
import design_solutions from '../../assets/images/feastly/design_solutions.png';
import app_flow from '../../assets/images/feastly/app_flow.png';
import competitors from '../../assets/images/feastly/competitors.png';
import challenge from '../../assets/images/feastly/challenge.png';
import ideas from '../../assets/images/feastly/ideas.png';

//Learnify banners
import learnify_pic from '../../assets/images/learnify/learnify.jpg';

//Reflect banners
import reflect_pic from '../../assets/images/reflect/reflect.jpg';

export default [
  {
    id: 'feastly',
    displayName: 'Feastly',
    course: 'Google UX Design Project (Coursera)',
    description: 'A comprehensive dining & social app',
    banner: {
      link: feastly_pic,
      width: 878,
      height: 670,
    },
    content: [
      { banners: [challenge], height: 456, width: 1029 },
      {
        banners: [meera_persona, neel_persona, vikram_persona, zara_persona],
        height: 1120,
        width: 2058,
      },
      ,
      {
        banners: [meera_journey, neel_journey, vikram_journey, zara_journey],
        height: 1302,
        width: 2058,
      },
      ,
      { banners: [research_summary], height: 972, width: 1029 },
      { banners: [what_user_said], height: 1044, width: 2058 },
      { banners: [design_solutions], height: 1302, width: 2058 },
      { banners: [competitors], height: 3416, width: 2058 },
      { banners: [app_flow], height: 1968, width: 2058 },
      { banners: [ideas], height: 997, width: 1042 },
    ],
  },
  {
    id: 'learnify',
    displayName: 'Learnify',
    course: 'Google UX Design Project (Coursera)',
    description: 'An online learning website',
    banner: {
      link: learnify_pic,
      width: 878,
      height: 670,
    },
  },
  {
    id: 'reflect',
    displayName: 'Reflect',
    course: 'Google UX Design Project (Coursera)',
    description: 'App & website for daily rituals for a better lifestyle',
    banner: {
      link: reflect_pic,
      width: 756,
      height: 566,
    },
  },
];
