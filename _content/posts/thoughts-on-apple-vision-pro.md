---
title: "Thoughts on Apple Vision Pro"
date: "2024-03-18"
category: "Reviews"
tags:
  - "Apple"
  - "Product Reviews"
  - "Technology"
imageSrc: "/images/AVP_hero.jpg"
imageAlt: "Apple VR headset on a table"
excerpt: "After resisting the initial urge to buy an Apple Vision Pro, I finally gave in to curiosity and purchased one. As someone who has designed VR experiences, I was impressed by the device's technological achievements."
---

Apple finally launched its Vision Pro “spatial computing” device in early February. We immediately saw [TikTok memes](https://www.tiktok.com/@sanjosefoos/video/7331179911459376430) of [influencers being ridiculous](https://www.instagram.com/ovrnundr.io/reel/C27T4geuU_Q/). I wrote about my [hope for the Apple Vision Pro](https://rogerwong.me/posts/transported-into-spatial-computing/) back in June 2023, when it was first announced. When preorders opened for Vision Pro in January, I told myself I wouldn’t buy it. I couldn’t justify the $3,500 price tag. Out of morbid curiosity, I would lurk in the AVP subreddits to live vicariously through those who did take the plunge.

After about a month of reading all the positives from users about the device, I impulsively bought an Apple Vision Pro. I placed my order online at noon and picked it up just two hours later at an Apple Store near me.

Many [great articles](https://www.theverge.com/24054862/apple-vision-pro-review-vr-ar-headset-features-price) and [YouTube videos](https://youtu.be/krpbAMJlLTc?si=mKAN3C-X-Japq1tU) have already been produced, so this post won’t be a [top-to-bottom review](https://www.ifixit.com/News/90137/vision-pro-teardown-why-those-fake-eyes-look-so-weird) of the Apple Vision Pro. Instead, I’ll try to frame it from my standpoint as someone who has [designed user experiences for VR](https://rogerwong.me/posts/transported-into-spatial-computing/). 

## Welcome to the Era of Spatial Computing

Augmented reality, mixed reality, or spatial computing—as Apple calls it—on a “consumer” device is pretty new. You could argue that [Microsoft HoloLens](https://en.wikipedia.org/wiki/Microsoft_HoloLens#Criticism) did it first, but that didn’t generate the same cultural currency as AVP has, and the HoloLens line has been relegated to industrial applications. The [Meta Quest 3](https://www.wired.com/review/review-meta-quest-3/), launched last October, also has a passthrough camera, but they don’t market the feature; it’s still sold as a purely virtual reality headset.

![AVP Home Screen](/images/AVP_home-screen.jpeg)
_Vision Pro Home Screen in my messy home office._

Putting on Vision Pro for the first time is pretty magical. I saw the world around me—though a slightly muted and grainy version of my reality—and I saw UI floating and pinned to reality. Unlike any other headset I’ve tried, there is no screen door effect. I couldn’t see the pixels. It’s genuinely a retina display just millimeters away from my actual retinas. 

The UI is bright, vibrant, and crisp in the display. After launching a weather app from the home “screen” and positioning it on a wall, it stays exactly where it is in my living room. As I move closer to the app, everything about the app remains super sharp. It’s like diving into a UI. 

### The visionOS User Interface

The visionOS UI feels very much like an extension of macOS. There’s a lot of translucency, blurred backgrounds for a frosted glass effect, and rounded corners. The controls for moving, closing, and resizing a window feel very natural. There were times when I wished I could rotate a window on its Y-axis to face me better, but that wasn’t possible. 

Admittedly, I didn’t turn on the accessibility feature. But as is, a significant issue that the UI presents is contrast. As someone with no accessibility issues, it was hard to tell half the time when something was highlighted. I would often have to look at another UI component and then back again to make sure a button was actually highlighted.

When you launch a Vision Pro app, it is placed right in front of you. For example, I would look at the Photos app, then click the Digital Crown (the dial for immersion) to bring up the Home Screen, which is then overlaid on top of the app. The background app does get fainter, and I can tell that the new screen is on top of Photos. Launching the Apple TV app from there would bring up the TV window on top of Photos, and I would run into issues where the handles for the windows are really close together, making it difficult to select the right one with my eyes so I can move it.

Window management, in general, is a mess. First of all, there is none. There’s no minimizing of windows; I would have to move them out of the way. There’s no collecting of windows. For instance, I couldn’t set up a workspace with the apps in the right place, collapse them all, and bring them with me to another room in my house. I would have to close them all, reopen them, and reposition them in the new room.

### Working in Apple Vision Pro

I was excited to try the Mac Virtual Display feature, where you can see your Mac’s screen inside Vision Pro. Turning this on is intuitive. A “Connect” button appeared just above my MacBook Pro when I looked at it.

The Mac’s screen blacks out, and a large screen inside Vision Pro appears. I could resize it, move it around, and position it exactly where I wanted it. Everything about this virtual screen was crisp, but I ran into issues.

First, I’m a pretty good typist but cannot touch-type. With the Mac Virtual Display, I need to look down at my keyboard every few seconds. The passthrough camera on the headset is great but not perfect. There is some warping of reality on the edges, and that was just enough to cause a little motion sickness.

Second, when I’m sitting at my desk, I’m used to working with dual monitors. I usually have email or comms software on the smaller laptop screen while I work in Figma, Illustrator, or Photoshop on my larger 5K [Apple Studio Display](https://www.apple.com/studio-display/). If I sit at my desk and turn on Mac Virtual Display, I also lose my Studio Display. Only one virtual display shows up in Vision Pro. 

I tried to mitigate the lost space by opening Messages, Spark Email (the iPad version), and Fantastical in Vision Pro and placing those apps around me. But I found switching from my Mac to these other apps cumbersome. I’d have to stop using my mouse and use my fingers instead when I looked at Spark. I found that keyboard focus depended on where my eyes were looking. For example, if I were reading an email in Spark but needed to look at my keyboard to find the “E” key to archive that email, if I pressed the key before my eyes were back in the Spark window, that E would go to whatever app my eyes happened to cross. In other words, my eyes are my cursor, which takes a while to get used to.

### Spatial Computing 1.0

It is only the first version of visionOS (currently 1.1). I expect many of these issues, like window management, eye tracking and input confusion, and contrast, to improve in the coming years. 

## Native visionOS Apps

In many ways, Apple has been telegraphing what they want to achieve with Vision Pro for years. [Apple’s API for augmented reality, ARKit](https://en.wikipedia.org/wiki/ARKit), was released way back in June 2017, a full six years before Vision Pro was unveiled. Some of the early AR apps for Vision Pro are cool tech demos.

![3D model of a jet engine floating in a living room](/images/AVP_JigSpace.jpeg)
_There’s a jet engine in my living room!_

The [JigSpace app](https://apps.apple.com/us/app/jigspace-3d-presentations/id6456791766) plunks real-world objects into your living room. I pulled up a working jet engine and was able to peel away the layers to see how it worked. There’s even a Formula 1 race car that you can load into your environment.

The [Super Fruit Ninja](https://apps.apple.com/us/app/super-fruit-ninja/id6450550849) game was fun. I turned my living room into a fruit-splattered dojo. I could even launch throwing stars from my hands that would get stuck on my walls.

![Glitchy UI over a 3D house tour](/images/AVP_Zillow-Immerse.jpeg)
_That's half a floor plan on top of a low-resolution 360° photo._

Some Vision Pro apps were rushed out the door and are just awful. The Zillow Immerse app is one of them. I found the app glitchy and all the immersive house tours very low-quality. The problem is that the environments that ship with Vision Pro are so high-resolution and detailed that anything short of that is jarringly inferior. 

## UX Considerations in Vision Pro

Apple Vision Pro can run iPad apps, at least the ones where the developer has enabled the capability. However, I found that many of the touch targets in iPad apps were not sufficient. Apple’s Human Interface Guidelines specify that hit targets should be at least 44x44 pts. But if opened in Vision Pro, that’s not enough. For visionOS, Apple recommends controls’ centers be at least 60 pts apart. 

I would further recommend that controls for visionOS apps should have large targets. In Apple’s own Photos app, in the left sidebar, only the accordion arrow is a control. Looking at and selecting the accordion label like “Spatial” or “Selfies” does not work. I had to look to the right of the label, to the arrow in order to select the item. Not great.

Eye and hand tracking in Vision Pro are excellent, although not perfect. There were many times when I couldn’t get the device to register my pinch gesture or get my eyes to a point in a window to resize it.

Some apps take advantage of additional gestures like pinching with both hands and then pulling them apart to resize something. I do believe that more standard gestures need to be introduced in the future for visionOS.

Steve Jobs famously once said, “God gave us ten styluses. Let’s not invent another.” Apple eventually introduced the Pencil for iPad. I think for many applications and for users to be productive with them, Apple will have to introduce a controller.

## IMAX in My Bedroom

The single most compelling use case for Apple Vision Pro right now is consuming video content, specifically movies and TV shows. The built-in speakers, which Apple calls audio pods, sound fantastic. Apple has been doing a lot of work in [Spatial Audio](https://support.apple.com/en-us/109354) over the years and I experienced really great surround sound in the Vision Pro. The three apps that currently stand out for video entertainment are IMAX, Disney Plus, and Apple TV. 

Watching content in the IMAX —only a couple of trailers were free—reminded me of the best IMAX screen I’ve ever been to, which is the one in the Metreon in San Francisco. The screen is floor-to-ceiling high with a curved railing in front of it. On either side is a backlit IMAX logo, and I could choose from a few different positions in the theater!

![A movie floats above a landspeeder from Star Wars](/images/AVP_Disney-Plus.jpg)
_Watching a Star Wars movie on Tatooine._

Disney leverages its IP very well by giving us various sets to watch their content. I could watch _Avengers: End Game_ from Avengers Tower, _Monsters, Inc._ from the scare floor, or _The Empire Strikes Back_ from Luke’s land speeder on Tatooine. 

With Apple TV, I could watch _Masters of the Air_ in a window in my space or go into an immersive environment. Whether it’s lakeside looking towards Mount Hood, on the surface of the moon, or in a discrete movie theater, the content was the star. My wife goes to sleep before me, and I usually put on my AirPods and watch something on my iPad. With Vision Pro, I could be much more engrossed in the show because the screen is as big as my room.

![A man wearing a VR headset lying on a couch, watching a TV show projected on his ceiling](/images/AVP_Apple-TV.jpg)
_From the Apple commercial “First Timer”_

I rewatched _Dune_ from 2021 and was blown away by the audio quality of my AirPods Pro. The movie has incredible sound and uses bass and sub-bass frequencies a lot, so I was surprised at how well the AirPods performed. Of course, I didn’t feel the bass rumble in my chest, but I could certainly hear it in my ears.

## Vision Pro Industrial Design

![Apple Vision Pro virtual reality headset sitting on a table](/images/AVP_hardware.jpg)
_The Vision Pro hardware is gorgeous._

As many others have pointed out, the hardware is incredible. It feels very premium and is a technological marvel. The cool-looking Solo Knit Band works pretty well for me, but everyone’s heads are so different that your mileage may vary. Everyone’s face is also very different, and Apple uses the Face ID scanner on the iPhone to scan your face when you order it. This determines the exact light seal they’ll include with your Vision Pro.

There are [28 different models of light seals](https://www.reddit.com/r/VisionPro/comments/19ardw5/all_light_seal_sizes/). Finding the right light seal to fit my face wasn’t as easy as taking the recommendation from the scan. When I went to pick it up, I opted for a fitting, but the 21W that was suggested didn’t feel comfortable. I tried a couple of other light seal sizes and settled on the most comfortable one. But at home, the device was still very uncomfortable. I couldn’t wear it for more than 10 minutes without feeling a lot of pressure on my cheeks.

The next day, I returned to the Apple Store and tried three or four more light seal and headband combinations. But once dialed in, the headset was comfortable enough for me to watch an hour-long TV show.

I wonder why Apple didn’t try to develop a method that requires less variation. Wouldn’t some memory foam cushioned light seal work?

## Apple’s Ambitions

The Apple Vision Pro is an audacious device, and I can tell where they _want_ to go, but they don’t yet have the technology to get there. They want to make AR glasses with crystal-clear, super-sharp graphics that can then be converted to immersive VR with the flick of a dial.

That’s why EyeSight, the screen on the front of the headset, allows people in the surrounding area to see the user’s eyes. The device also has a passthrough camera, allowing the user to see out. Together, these two features allow Vision Pro to act as a clear two-way lens.

But Apple seems to want both AR and VR in the same device. I would argue that it might be physically impossible. Imagine an Apple device more like the HoloLens, where they are truly glasses with imagery projected onto them. That eliminates the smaller-than-their-competitors’ field of vision, or FOV. That would eliminate the ridiculous fitting conundrum as the glasses could float in front of your eyes. And that would probably reduce the device’s weight, which has been discussed at length in many reviews.

And then, for VR, maybe there’s a conversion that could happen with the AR glasses. A dial could turn the glasses from transparent to opaque. Then, the user would snap on a light-blocking attachment (a light seal). I believe that would be a perfectly acceptable tradeoff.

## What $3,500 Buys You

In 1985, when I was 12 years old, I badgered my father daily to buy me a Macintosh computer. I had seen it at ComputerLand, a computer shop on Van Ness Avenue. I would go multiple times per week after school just to mess around with the display unit. I was enamored with MacPaint.

![Vintage advertisement for a computer store](/images/ComputerLand-ad.jpg)

After I don’t know how many months, my dad relented and bought me a Macintosh 512K. The retail cost of the machine in 1985 was $2,795, equivalent to $8,000 in 2024 dollars. That’s a considerable investment for a working-class immigrant family. But my wise father knew then that computers were the future. And he was right.

With my Mac, I drew illustrations in MacPaint, wrote all my school essays in MacWrite, and made my first program in HyperCard. Eventually, I upgraded to other Macs and got exposed to and honed my skills in Photoshop and Illustrator, which would help my graphic design career. I designed my first application icon when I was a senior in high school.

Of course, computers are much cheaper today. The $999 entry model MacBook Air is able to do what my Mac 512K did and so much more. A kid today armed with a MacBook Air could learn so much!

Which brings us to the price tag of the Apple Vision Pro. It starts at $3,499. For a device where you can’t—at least for now—do much but consume. This was an argument against iPad for the longest time: it is [primarily a consumption device](https://ignorethecode.net/blog/2015/08/14/ipad_consumption_device/). Apple went so far as to create a TV spot showing how a group of [students use an iPad to complete a school project](https://www.ispot.tv/ad/w03b/apple-ipad-homework). With an iPad, there is a lot of creation that can happen. There are apps for drawing, 3D sculpting, video editing, writing, brainstorming, and more. It is more than a consumption device.

### More than a Consumption Device? Not So Fast.

For Vision Pro, today, I’m not so sure. The obvious use case is 3D modeling and animation. Already, someone is figuring out how to [visualize 3D models from Blender](https://twitter.com/pushmatrix/status/1767898459024040088) in AVP space. It’s tied to the instance of Blender running on his Mac, though, isn’t it? 3D modeling and animation software is notoriously complicated. The [UI for Cinema 4D](https://www.threads.net/@lunarboy/post/C0qa_rEO3UZ/?xmt=AQGz4IIkuI457IS7TcTQob5DhjAIPz5KL3O95WSiqYPNLA), the 3D software that I know best, has so many options and commands and so many keyboard shortcuts and combinations that it would be impossible to replicate in visionOS. Or take simpler apps like Final Cut Pro or Photoshop. Both have iPad apps, but a combination of the keyboard and mouse can make a user so much more productive. Imagine having to look at precisely the right UI element in Vision Pro, then pinch at exactly the right thing in a dense interface like Final Cut Pro. It would be a nightmare.

![Hand holding a virtual turntable arm](/images/AVP_djay.jpg)
_Being creative with djay in Apple Vision Pro_

I do think that creative apps will eventually find their way to the platform. One of the launch apps is [djay](https://developer.apple.com/news/?id=q0cq9dv9), the DJing app, of course. But it will take some time to figure out.

Beyond that, could a developer use Vision Pro to program in? If we look to the iPadOS ecosystem there are a handful of apps to write code. But there is no way to check your code, at least not natively. [Erik Bledsoe from Coder writes](https://coder.com/blog/a-guide-to-writing-code-on-an-ipad), “The biggest hurdle to using an iPad for coding is its lack of a runtime environment for most languages, forcing you to move your files to a server for compiling and testing.” The workaround is to use a cloud-based IDE in the browser like Coder. I imagine that the same limitations will apply to Vision Pro.

### The Bottom Line

For $3,500, you could buy a 16-inch MacBook Pro with an M3 Pro chip _and_ an iPhone 15 Pro. Arguably, this would be a much more productive setup. With the Mac, you’d have access to tens of thousands of apps, many for professional applications. With the iPhone, there are nearly five million apps in the App Store.

In other words, I don’t believe buying an Apple Vision Pro today would open a new world up for a teenager. It might be cool and a little inspirational, but it won’t help the creator inside them. It won’t do what the Mac 512K did for me back in 1985.

## Vision Pro’s Future

Clearly, the Apple Vision Pro released in 2024 is a first generation product. Just like the first-gen Apple Watch, Apple and its customers will need to feel their collective way and figure out all the right use cases. We can look to the Meta Quest 3 and Microsoft HoloLens 2 to give us a glimpse.

As much as people were marveling at the [AR vacuum cleaning game for Vision Pro](https://x.com/pushmatrix/status/1753055948459946193?s=20), AR and VR apps have existed for a while. [PianoVision for Meta Quest 3](https://www.reddit.com/r/MetaQuestVR/comments/17d3afu/this_is_me_using_pianovision_for_meta_quest_3/) combines your real piano or keyboard with a Guitar Hero-like game to teach you how to play. The industrial applications for HoloLens make a lot of sense.

Now that Apple is overtly out of the closet in the AR/VR game, developers will show great enthusiasm and investment in the space. At least on Reddit, there’s a lot of excitement from users and developers. We will have to see if the momentum lasts. The key for the developers will be the size of the market. Will there be enough Vision Pro users to sustain a thriving app ecosystem?

As for me, I decided to return my Vision Pro within the 14-day return window. The only real use case for me was the consumption of media, which I couldn’t justify spending $3,500 for a room-sized TV that only I could watch. Sign me up for version 2, though.
