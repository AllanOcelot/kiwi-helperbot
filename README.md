# Kiwi Helperbot
A very simple nodeJS bot made for Kiwi IRC to help our new users get our bearings.

## Run
This script is to be run with node, you'll need to install the IRC framework via npm first :).

## Commands:
1. KiwiHelp
  Provides a short summary about Kiwi, our website and a link to github.
  
2. KiwiPing
  A simple way to message the core team of Kiwi. All users will receive a PM from the bot, asking them to check the KiwiIRC channel, providing the username of the person who gave the command.
  
  
## TODO:
1. Add a some nice github stats about our project. i.e !kiwiLatest should reply with the last commit to master. !kiwiPR should reply with amount of open PR's etc. Need to look into best way to do this securely.

2. Add some 'middleware' so users may send bugs / suggestions to an email address before they forget. i.e '!kiwiSuggestion - on my phone @684px the Kiwi icon is blurry' - this then sends an email via node to a specific email account?

