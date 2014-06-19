QBO UI Plugin Development
==================

These are instructions for getting started with QBO plugin development. Akamai hosting is built-in for QA and production. You may choose to use an iFrame instead of a native plugin.

Getting started with local development
-------

1. Fork this repo and rename it to the name of your plugin.
1. Clone the repo to your local machine
1. Open the server.crt file in the sslcert folder and add it to your keychain/trusted cert store (this will allow you to run your browser with full security turned on)
1. Edit package.json and replace "Starter Plugin" with your own plugin name and repository location
1. Run "npm install"
1. Run "grunt dev" for development on https://localhost.intuit.com:8001
1. Go to https://qbo.intuit.com and log into your company
1. Open the Javascript console and find your serverGroup and your serverGroupCompanyId
1. Go to the resources window, and create a new local storage key <serverGroupCompanyId>_<serverGroup>_ecosystem_plugins and add the following value:

        {"plugins":[{"value":"mycoolplugin","allowedOrigins":["*"],"sourceUrl":"https://localhost.intuit.com:8001/index.html"}]}

Getting your plugin deployed to QA
---------

1. Add your configuration to the config.json file (mostly configuring access points). See the example in the file that overrides the home page (but don't leave it like that).
1. A pointer to your plugin must be added to the master configuration file (in the future they will be auto discovered). Just ask Alexey Povkh or Jeff Brewer to do this for you for now.
1. Send e-mail to QBG_SCM_Help@intuit.com using this format:

		Subject: New QBO UI plugin project

		plugin name: <your plugin name>
		gitlab repo: git@gitlab.corp.intuit.net:<gitlab group>/<git repo name>.git
		access: list of developers in the project who can initiate builds/deploys

Development Notes
-----------

You may wish to enhance the grunt build so that grunt dist does closure compiling and minifying.
