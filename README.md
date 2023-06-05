# xmpp_demo

Ustvarimo in zaženemo XMPP server (npr. ejabberd na Dockerju)
```
docker run --name ejabberd -p 5222:5222 ejabberd/ecs
```

Ustvarimo 2 uporabnika na našem serverju
```
docker exec -it ejabberd bin/ejabberdctl register 'user' localhost 'password'
```

Ustvarimo Node.js XMPP clienta, s katerim se povežemo na server

Knjižnica, ki jo uporabljamo je simple-xmpp
```
npm install simple-xmpp
```

Uporabnika zaženemo s komando ```node user.js```, admina pa s komando ```node index.js```.