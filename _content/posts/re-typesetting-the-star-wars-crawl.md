---
title: "Re-Typesetting the Star Wars Crawl"
date: "2009-12-11"
category: "Side Projects"
tags:
  - "Design"
  - "Personal Projects"
excerpt: "I couldn't help myself and had to re-typeset the Star Wars crawl."
---

Recently [Guillermo Esteves](http://www.gesteves.com/ "Guillermo Esteves – Web design & stuff.") did a [fantastic experiment](http://www.gesteves.com/experiments/starwars.html "Star Wars Episode IV: A NEW HOPE") with [HTML5](http://dev.w3.org/html5/spec/Overview.html "HTML5") and [CSS3](http://www.w3.org/TR/css3-roadmap/ "Introduction to CSS3") by recreating the [opening crawl to _Star Wars_](http://en.wikipedia.org/wiki/Star_Wars_opening_crawl "Star Wars opening crawl - Wikipedia, the free encyclopedia"). Although it only currently works in Safari 4, it's a good preview of how to create something dynamic using [web standards](http://www.webstandards.org/ "The Web Standards Project") and [web fonts](http://www.alistapart.com/issues/296 "A List Apart: Issue 296") once the other browsers come along.

_But_ Guillermo's experiment also reminded me of how awful the typography was of those opening crawls. The original _Star Wars_ opening crawl uses two different typefaces (three if you count "A long time ago…"), is [justified](http://en.wikipedia.org/wiki/Justification_(typesetting) "Justification (typesetting) - Wikipedia, the free encyclopedia") without hyphenation, and thus creates obvious [rivers](http://en.wikipedia.org/wiki/River_(typography) "River (typography) - Wikipedia, the free encyclopedia") and awkward [tracking](http://en.wikipedia.org/wiki/Tracking_(typography) "Letter-spacing - Wikipedia, the free encyclopedia").

![Star Wars: Episode IV Opening Crawl](/images/ep-iv_crawl.jpg)

Opening crawl from _A New Hope_ as grabbed from the DVD.

As the subsequent movies came out, the typography was all over the place. _The Empire Strikes Back_ dispenses with letter-spacing altogether. _Return of the Jedi_ overcompensates for the failure of the previous two crawls by using too much letter-spacing.

![Star Wars: Episode V Opening Crawl](/images/ep-v_crawl.jpg)

Opening crawl from _The Empire Strikes Back_. What happened here? I can drive many trucks through those spaces.

![Star Wars: Episode VI Opening Crawl](/images/ep-vi_crawl.jpg)

Opening crawl from _Return of the Jedi_. Standbackafewfeetandtrytoreadthatlastparagraph.

The absolute worst though was when [ILM matched the style](http://www.starwars.com/episode-i/bts/production/f19990602/index.html?page=1 "StarWars.com | At First Glance") for the _Star Wars_ prequels. At least there was more tracking in the original 1977 version. The 1999 version of the crawl that appeared in _The Phantom Menace_ lacked any letter spacing whatsoever and created huge holes between the words that made the crawl barely readable. (No offense to special effects god and Photoshop co-creator [John Knoll](http://en.wikipedia.org/wiki/John_Knoll "John Knoll - Wikipedia, the free encyclopedia"). He's great with FX but he's not necessarily a designer nor typographer.)

![Star Wars: Episode I Opening Crawl](/images/ep-i_crawl.jpg)

Opening crawl from _The Phantom Menace_. Shit in = shit out. It's a tragedy that they used _Empire_ as the model.

I set out to do a quick experiment to see if I could redo the crawl any better. The first thing I did was to standardize on one typeface. The "A long time ago…," title and body copy are all [Franklin Gothic](http://en.wikipedia.org/wiki/Franklin_Gothic "Franklin Gothic - Wikipedia, the free encyclopedia"). Then I tried a version where I kept the justified alignment but decreased the type size. The copy becomes much more readable, but feels too small and loses that epic quality George Lucas was probably after.

![Justified Alignment](/images/redo_crawl_justified.gif)

Then I simply tried centering it and I think it works. I am able to keep the type size large without creating large gaps between words or letters. Although the very straight sides are lost, I think the intended dramatic effect is still there.

![Centered Alignment](/images/redo_crawl_centered.gif)

And of course, I had to whip it up in After Effects to really test the design.

https://vimeo.com/8107190

Yeah, file this under geekery.
