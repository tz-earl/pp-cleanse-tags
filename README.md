# pp-cleanse-tags

PowerPoetry.org custom Drupal 7 module to do massive clean up of tags

The issue is that in the Power Poetry collection of poems, many tags as currently
stored actually consist of more than one tag and should be broken up. For example,
an existing tag might have a value of "#love #family #siblings" that really should
be the three separate tags of "love", "family", and "siblings".

What brought this about is that users often use the pound sign # as a tag delimiter,
not knowing that by default Drupal 7 uses the comma. The processing of the tags
form field has not made any attempt to correct this.

However, as part of this project, a snippet of javascript is now used to replace
each pound sign # with a comma.

That still leaves a set of more than 200,000 poems many of which have incorrect
tags and therefore are not amenable to good search results based on tag searches.
Hence, the main purpose of this module is to fix all those.
