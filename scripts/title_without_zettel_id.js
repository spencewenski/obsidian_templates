const REGEX = /(?<zettel_id>\d+).*?-(?<name>.*)/;

/**
 * Get the name of this file without its zettel id.
 * If there is no zettel id (or no actual name), just return tp.file.title;
 */
function title_without_zettel_id(tp) {
    let filename = tp.file.title;
    let matches = filename.match(REGEX);

    var name = null;
    if (!!matches && !! matches.groups) {
        name = matches.groups['name'];
    }

    if (!!name) {
        return name.trim();
    } else {
        return filename;
    }
}

module.exports = title_without_zettel_id;
