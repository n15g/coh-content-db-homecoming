import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";
import {TheLabyrinthOfFog} from "../../map/the-labyrinth-of-fog";

export const LabRat: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "lab-rat",
    setTitleId: 2535,
    names: [{value: "Lab Rat"}],
    alignment: ALIGNMENT_ANY,
    mapKey: TheLabyrinthOfFog.key,
    location: [7146.0, -802.5, 68.0],
    badgeText: [{
        value: `Whilst exploring the Labyrinth of Fog, you navigated a maze known as the Endless Colonnade.
You can't help but feel like a lab rat, running a maze for some unseen intelligence's amusement...`
    }],
    notes: `Located beneath the white mote at the end of the Endless Colonnade in [map:the-labyrinth-of-fog].`,
    links: [
        {title: "Lab Rat Badge", href: "https://homecoming.wiki/wiki/Lab_Rat_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png"}]
};
