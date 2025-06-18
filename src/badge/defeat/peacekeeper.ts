import {ALIGNMENT_ANY, Alternate, BadgeType, IBadgeData} from "coh-content-db";

export const Peacekeeper: IBadgeData = {
    type: BadgeType.DEFEAT,
    key: "peacekeeper",
    setTitleId: 2568,
    names: [
        {type: Alternate.H, value: 'Peacekeeper'},
        {type: Alternate.V, value: 'Peacemaker'},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {
            value: `The most expensive weapon in P.E.A.C.E.'s arsenal was a gargantuan piloted mech... That you sent to the scrap heap.
It's not quite apparent what One Statesman Plaza and its tower hides, but Blackwing Industries have been paid an unthinkable sum to ensure that Emil Christie's investment was secure.`
        }
    ],
    acquisition: 'Defeat the P.E.A.C.E. Keeper in Kallisti Wharf.',
    links: [
        {title: 'Peacekeeper Badge', href: 'https://homecoming.wiki/wiki/Peacekeeper_Badge'},
    ],
    icons: [
        {value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/peacekeeper.png"}
    ],
};
