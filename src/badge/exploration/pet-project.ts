import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const PetProject: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "pet-project",
    names: [{value: "Pet Project"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-4073.0, 0.0, -3297.0],
    badgeText: [{
        value: "Officials in Steel Canyon have kept secret what exactly they've been working on here." +
            " There have been many speculations as to what it could be." +
            " One of the crazier theories is that there is no true \"purpose\" to the construction - that all of this somehow just appeared one day and exists solely to" +
            " distract the heroes of Paragon City."
    }],
    notes: "The Pet Project Badge is at the entrance to the construction zone 158 yards northeast of the north Paragon City Monorail station in Steel Canyon.",
    links: [
        {title: "Pet Project Badge", href: "https://paragonwiki.com/wiki/Pet_Project_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png"}],
    vidiotMapKey: "7"
};
