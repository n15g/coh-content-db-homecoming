import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {SteelCanyon} from "../../map/steel-canyon";

export const DirtyAttorney: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "dirty-attorney",
    names: [{value: "Dirty Attorney"}],
    alignment: ALIGNMENT_HERO,
    mapKey: SteelCanyon.key,
    location: [-2170.0, -84.0, -1228.0],
    badgeText: [{
        value: "Platinum Lake is a popular spot for people in Paragon to sit back and relax." +
            " There has been a long legal battle for Chris Jenkins to take down the billboard that he put up there, many saying it spoils the view." +
            " Jenkins has won every single case and states that he only has it up to serve the people when the heroes of Paragon 'aren't doing their jobs.'"
    }],
    notes: "The Dirty Attorney Badge is in the Platinum Lake neighborhood of Steel Canyon 52 feet south of the neighborhood marker.",
    links: [
        {title: "Dirty Attorney Badge", href: "https://paragonwiki.com/wiki/Dirty_Attorney_Badge"}
    ],
    icons: [{value: "core.exploration.hero"}],
    vidiotMapKey: "8"
};
