// This bots sits in the KIWIIRC room,
// So members can ping any of the core team, or use the !kiwihelp command for more info etc
var irc = require("irc");
var config = {
	channels: ["#allanOcelot"],
	server: "irc.freenode.net",
	botName: "bot-kiwihelper",
	autoRejoin: false,
	autoConnect: true,
	floodProtection: true,
	floodProtectionDelay: 3000
};

//List the nicks of Kiwi Team members who wish to receive notifications // be public
var team = ['prawnsalad','allanocelot','itsonlybinary','cantelope'];

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels,
	password: config.oauth
});

function OnMessage(from, channel, text, message){

    // Log to the command line what users sent.
	console.log(from, channel, text);

    //KiwiHelp will display a message in the KiwiIRC channel with a short summary about Kiwi IRC etc.
	if (text == "!kiwihelp") {
        var message = "KiwiIRC is a web based, open source IRC client. You can find out more about Kiwi at https://www.kiwiirc.com , You can report bugs/issues and contribute fixes at https://github.com/kiwiirc/kiwiirc . If you need urgent help with Kiwi, please use the !KiwiPing command.";
		bot.send("PRIVMSG", channel, message);
	}

    //KiwiPing will send a message to all members in the team array
	if (text == "!kiwiping") {
        team.forEach(function(entry) {
            bot.send("PRIVMSG", entry, from + " has requested help using the !KiwiPing command. The user is currently in #KiwiIRC" );
        });
	}
}
bot.addListener("message", OnMessage);
bot.addListener("action", OnMessage);

function OnJoin(channel, nick, msgobj) {
	if (nick.toLowerCase() == config.botName.toLowerCase())
	{
		console.log("The KiwiHelper bot is now online, here to help!", channel);
	}
}

bot.addListener("join", OnJoin);

function OnError(message) {
	console.log("IRC Error:", message);
}
bot.addListener("error", OnError);
