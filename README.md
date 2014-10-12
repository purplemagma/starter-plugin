QBO UI Plugin Development
==================

These are instructions for getting started with QBO plugin development. Plugins are iFrames that you can insert into various places inside QBO.

Getting started with local development
-------

1. Fork this repo and rename it to the name of your plugin.
1. Clone the repo to your local machine
1. Open the server.crt file in the sslcert folder and add it to your keychain/trusted cert store (this will allow you to run your browser with full security turned on)
1. Add

       127.0.0.1 localhost.intuit.com
to your hosts file (e.g. /etc/hosts on *nix)
1. Edit package.json and replace "Starter Plugin" with your own plugin name and repository location
1. Run "npm install"
1. Run "grunt dev" for development on https://localhost.intuit.com:34212
1. Go to https://qbo.intuit.com and log into your company
1. After you get to the home page, go to this link https://qbo.intuit.com/app/plugins/qbodeveloper
1. Click "Install" to install the qbo developer plugin
1. Visit the "Gear" menu and click "Company Settings". Find the Developer tab.
1. Add a new plugin with your own name (e.g. mycoolplugin). Notice it is marked "local storage". This means it will be configured on just your browser in its local storage.
1. The example plugin can be visited here https://qbo.intuit.com/app/plugins/mypluginid. mypluginid is the name you typed when you created a new plugin (e.g. mycoolplugin).
1. You should see "Hello World!"

Access Points
-------

There are several places in QBO where you can create access points for your plugin (places where users can navigate to your plugin). To configure these, you edit the config.json file in your starter plugin. There are plenty of samples in that file.
