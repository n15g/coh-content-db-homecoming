import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ArtifactDestroyer: IBadgeData = {
    type: BadgeType.EVENT,
    key: "artifact-destroyer",
    setTitleId: 1769,
    names: [
        {value: "Artifact Destroyer"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You have gone about the proper ritual to destroy the Malleus Mundi, but you are unsure if it is truly gone."},
    ],
    acquisition: "Complete the Whispered Rumor tip mission during the Halloween event and choose the option to 'Attempt to destroy the Malleus Mundi'.",
    links: [
        {title: "Artifact Destroyer Badge", href: "https://homecoming.wiki/wiki/Artifact_Destroyer_Badge"},
        {title: "Whispered Rumour", href: "https://homecoming.wiki/wiki/Mission:Tip_-_Whispered_Rumor"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/event/artifact-destroyer.png"}]
};
