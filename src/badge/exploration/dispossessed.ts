import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {TheChantry} from "../../map/the-chantry";

export const Dispossessed: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dispossessed",
    setTitleId: 1818,
    names: [{value: "Dispossessed"}],
    alignment: ALIGNMENT_HERO,
    mapKey: TheChantry.key,
    location: [4612.0, 761.0, 3399.0],
    badgeText: [{
        value: "Your life as a hero takes up so much of your time." +
            " Hours day and night patrolling the streets of Paragon City, casting down one villain after the next in your quest for glory and influence." +
            " Can nothing else in life command such devotion?" +
            " The words of loved ones drowned out by the clamor of explosions and blasts of energy, the invitations of friends forgotten the moment a new crisis arises," +
            " competing interests shelved in preference for an assault upon just one more arch-villain's stronghold." +
            " Before you know it life has passed you by and moved on without you. Your loved ones have kindled romances with another." +
            " Your friends have crossed you off of their invite lists. Do you even remember what it was like before you became a hero?"
    }],
    notes: "Located in [map:the-chantry] 362 yards WNW from the Bastion of Regret marker, under the floating rock with the circling tablets.",
    links: [
        {title: "Dispossessed Badge", href: "https://paragonwiki.com/wiki/Dispossessed_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "6"
};
