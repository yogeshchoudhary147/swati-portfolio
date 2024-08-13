//Feastly banners

import feastly_pic from '../../assets/images/feastly/feastly.jpeg';
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
import learnify_pic from '../../assets/images/learnify/learnify.jpeg';

//Reflect banners
import reflect_pic from '../../assets/images/reflect/reflect.jpeg';

export const PROJECTS_CONFIG = [
  {
    id: 'feastly',
    displayName: 'Feastly',
    course: 'Google UX Design Project (Coursera)',
    description: 'A comprehensive dining & social app',
    banner: feastly_pic,
    content: [
      [challenge],
      [meera_persona, neel_persona, vikram_persona, zara_persona],
      [meera_journey, neel_journey, vikram_journey, zara_journey],
      [research_summary],
      [what_user_said],
      [design_solutions],
      [competitors],
      [app_flow],
      [ideas],
    ],
  },
  {
    id: 'learnify',
    displayName: 'Learnify',
    course: 'Google UX Design Project (Coursera)',
    description: 'An online learning website',
    banner: learnify_pic,
  },
  {
    id: 'reflect',
    displayName: 'Reflect',
    course: 'Google UX Design Project (Coursera)',
    description: 'App & website for daily rituals for a better lifestyle',
    banner: reflect_pic,
  },
];
