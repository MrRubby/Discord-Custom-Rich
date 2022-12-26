const clientId =  'ClientID';
const DiscordRpc = require('discord-rpc');
const RPC = new DiscordRpc.Client({transport: 'ipc'});

DiscordRpc.register(clientId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: "Website Creation",
        state: 'Creating personal and app site',
        startTimestamp: Date.now(),
        largeImageKey: 'large-image',
        largeImageText: "large-text",
        smallImageKey: 'small-image',
        smallImageText: 'small-text',
        instance: false,
        buttons: [
            {
                label: 'Support Server',
                url:'https://discord.com/invite/y4mPbWjTTh'
            },
            {
                label: 'Github',
                url:'https://mrrubby.github.io'
            }
        ]

    })
}

RPC.on('ready', async () => {
    setActivity();
})

RPC.login({ clientId }).catch(err => console.error(err));


console.log("[START] Discord RPC with Server Count started!")