import {ALIGNMENT_HERO, BadgeType, IBadgeData} from "coh-content-db";
import {EchoDarkAstoria} from "../../map/echo-dark-astoria";

export const AstoriasLastStand: IBadgeData = {
    type: BadgeType.EXPLORATION,
    key: "astorias-last-stand",
    names: [{value: "Astoria's Last Stand"}],
    alignment: ALIGNMENT_HERO,
    mapKey: EchoDarkAstoria.key,
    location: [4787.0, 6.0, 727.0],
    badgeText: [{
        value: "As the darkness closed in and the dead rose from their graves, this warehouse became a scene of unimaginable horror as a group of survivors fled here in the hope of rescue that" +
            " never came. They fought valiantly, keeping the minions of the Banished Pantheon at bay for hours." +
            " The forces arrayed at them were too numerous and too powerful to be denied forever and the survivors succumbed along with the rest of Astoria's doomed inhabitants."
    }],
    notes: "Located in [map:echo-dark-astoria] 325 yards NW of the Barca Plaza marker, atop a building with delivery trucks parked outside.",
    links: [
        {title: "Astoria's Last Stand Badge", href: "https://paragonwiki.com/wiki/Astoria%27s_Last_Stand_Badge"}
    ],
    icons: [{value: "https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png"}],
    vidiotMapKey: "7"
};
