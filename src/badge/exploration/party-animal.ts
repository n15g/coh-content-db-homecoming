import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const PartyAnimal: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "party-animal",
    setTitleId: 2522,
    names: [{value: "Party Animal"}],
    alignment: ALIGNMENT_HERO,
    badgeText: [{
        value: `You've always sought out the biggest parties, where you're certain to make a splash, and now you've become truly unparalleled. Having been to dance clubs from entirely different dimensions you are, without any doubt, a Party Animal.`
    }],
    notes: `Visit Pocket D, Studio 55, and Paragon Dance Party`,
    links: [
        {title: "Party Animal Badge", href: "https://homecoming.wiki/wiki/Party_Animal_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}]
};