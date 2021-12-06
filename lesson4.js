const text =
  "With Grammarly, you'll build 'writing' skills while you’re correcting 'grammar' 'spelling' and punctuation mistakes as well as sentence 'structure problems'.";
const re = /\b'(?!\b)|(?<!\b)'\b/gi;
const result = text.replace(re, '"');

console.log(result);
