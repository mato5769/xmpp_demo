const xmpp = require('simple-xmpp')

xmpp.on('online', data => {
    console.log('You are online!')
    console.log(`Connected as ${data.jid.user}`)
    send()
})
xmpp.on("error", error => {
    console.log(`Something went wrong!\n${error}`)
})
xmpp.on("chat", (from, msg) => {
    console.log(`Got massage : ${msg} from ${from}`)
})

function send() {
    setTimeout(send, 5000);
    xmpp.send('admin@localhost', `Hi! ${Date.now()}`)
}

xmpp.connect({
    "jid": "matic@localhost",
    "password": "password",
    "host": "localhost",
    "port": 5222
})