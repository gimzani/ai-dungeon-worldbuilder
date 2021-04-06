# AI Dungeon World Info Builder

The world info section on the game are (as of 10/2020) difficult for a user to use.  It would be really great if you didn't have to add them 1 by one.

And even though you can download the **worldEntries.json** file and upload it on another game, wouldn't it be great if you could just have a tool that helps you author these files offline?

Yeah - so did I.  So, I built one!  (You're welcome! ;) )

[windows only installer](https://github.com/gimzani/ai-dungeon-worldbuilder/blob/main/installer/aid-wb2%20Setup%200.1.1.exe)

## First things first
MAD PROPS to Nick Walton and the team at [Latitude](https://latitude.io/)

**Disclaimers**: 
1. I wrote this on a PC so I know it works on a PC.  If you have a MAC or Linux box, then you are more than welcome to try to have your machine build an executable from the code.  It should work - but I don't guarantee anything.  I built this for me, I'm sharing it with you.
1. This software is offered **as-is**. I'm reatively certian that it will not fry your machine or anything like that.  I personally use this app and it works fine for me.  It may not work for you.
1. You are free to work with me if you want to improve the app, but it is NEVER FOR SALE.  I offer it open source and FREE.  So if you paid money for it, I'm sorry - you got hosed.
1. This is unofficial.  I am not an employee of Latitude, nor do I have working knowledge of how AI-Dungeon works.  This is just my stab at making something useful.
----

## Building the App:

This is a JavaScript, Electron app using Vue as the front end.  **YOU MUST** have [NodeJS](https://nodejs.org/en/) installed.

After that, there are two more things you have to do.  (technically one, but whatever)

1. Run the **install.bat** file (windows)
OR (for you console savvy types)
```
npm install
```
Once the packages install, you can go to the next step...  ...or...   ...not.  (It's your life, shut-up.)

(It can be run in dev mode from here if you want by typing "npm run electron:serve")


2. Run the **build.bat** file
OR (if you're still turning your nose up at my batch files...)
```
npm run electron:build
```
This will compile it into an executable in a folder called **dist_electron**

It also makes and installer, which is pretty cool.

From there, install it and have fun.

---

## Using the App:

Here is a shot of the app with some Entries Loaded.  When you first open it, it will not have anything listed.

<img src="https://raw.githubusercontent.com/gimzani/ai-dungeon-worldbuilder/main/screenshots/Screenshot.png" style="width:400px;height:auto">

To get items into the app, use the File Tools.  (Roll over the buttons for tooltips)

But what they essentially do is:
* Create a New File
* Open and existing file
* Merge a file in with an existing list
* Export the current list
* Save the current list (to whatever file you have open.)

<img src="https://raw.githubusercontent.com/gimzani/ai-dungeon-worldbuilder/main/screenshots/FileTools.png" style="width:400px;height:auto">

So - If you have a new file and no list, enter a Key into the "New Entry" box and click the "Add" (plus) button.  You should see it in the list.

<img src="https://raw.githubusercontent.com/gimzani/ai-dungeon-worldbuilder/main/screenshots/NewEntry.png" style="width:400px;height:auto">

Use the "blue chevron" to expand each item and edit the entry.

<img src="https://raw.githubusercontent.com/gimzani/ai-dungeon-worldbuilder/main/screenshots/ExpandedEntry.png" style="width:400px;height:auto">

If things get to hecktic in the file, you can delete entries one at a time or in a batch by checking the checkbox and clicking the "Remove Selected" button.

You can also use the filter box to show only the items related to a keyword in the entry.  (Like sword, or dragon or whatever)

<img src="https://raw.githubusercontent.com/gimzani/ai-dungeon-worldbuilder/main/screenshots/filtered.png" style="width:400px;height:auto">

And that's it.

Now you can library your World Infos and mix and match to your heart's content.


---
And to the devs at Latitude.  If you want or need help, you have my email.  I'm on your forums as 'gimzani'.

Enjoy!


---
Shout-out to Lex-DRL for keeping me on my toes with a quick patch.  ;)  Thanks!
