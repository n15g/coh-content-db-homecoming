import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";

export const Heroic: IBadgeData = {
    type: BadgeType.ACHIEVEMENT,
    key: "heroic",
    names: [
        {value: "Heroic"}
    ],
    alignment: ALIGNMENT_HERO,
    badgeText: [{value: "You've earned the \"Heroic\" badge by playing an Architect mission marked as Heroic content."}],
    acquisition: "Complete one Mission Architect arc marked as Heroic content.",
    notes: "This badge is only awarded to characters of the hero or vigilante alignments." +
        " Although credit for this badge may be earned by villains or rogues, the badge will not be awarded to a character until they change alignment.",
    links: [
        {title: "Heroic Badge", href: "https://paragonwiki.com/wiki/Heroic_Badge"}
    ],
    imageKeys: [{value: "core.ae.heroic"}]
};
