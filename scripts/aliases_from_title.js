const REGEX = /(?<zettel_id>\d+).*?-(?<name>.*)/;

/**
 * Get aliases for the current file based on its title.
 * 
 * This function should be placed on the same line as the 'aliases' frontmatter tag, e.g.,
 * 
 * ---
 * aliases: <% tp.user.aliases_from_title(tp) %>
 * ---
 * 
 * This generates aliases for the file's zettel id and its title without the id.
 * If the file does not have a zettel id, this will not generate any aliases.
 */ 
function aliases_from_title(tp) {
    let filename = tp.file.title;
    let matches = filename.match(REGEX);

    var zettel_id = null;
    var name = null;
    if (!!matches && !! matches.groups) {
        zettel_id = matches.groups['zettel_id'];
        name = matches.groups['name'];
    }

    let aliases = [zettel_id, name];

    return aliases
        .filter((x) => !!x)
        .map((x) => x.trim())
        .map((x) => `\n    - ${x}`)
        .join("");
}

module.exports = aliases_from_title;
