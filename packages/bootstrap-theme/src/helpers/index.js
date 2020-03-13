export const getMedia = state => id => {
  const media = state.source.attachment[id];
  const srcset = Object.values(media.media_details.sizes)
    .map(item => [item.source_url, item.width])
    .reduce(
      (final, current, index, array) =>
        final.concat(
          `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
        ),
      ""
    ) || null;
  return { media, srcset }
}

export const getTaxonomy = state => taxonomy => idTaxonomy => state.source[taxonomy][idTaxonomy];
export const getTaxonomyCapitalized = taxonomy => taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
export const getAuthor = state => idAuthor => state.source.author[idAuthor]
export const getPost  = state => type => idPost => state.source[type][idPost]