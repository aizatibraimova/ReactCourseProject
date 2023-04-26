import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectrandomCampsite = () => {
    return  CAMPSITES;[Math.floor(CAMPSITES.length * Math.random())] ;
}