# MERN TEMPLATE

Hello! This template is a MERN template for people who want to self host. This was created for the sole reason that when working on MERN projects I always ended up repeating the same boilerplate steps. 

This template comes with the following features:
- [React](https://reactjs.org/) Fontend
- [Express](https://expressjs.com/) Backend
- [MongoDB](https://www.mongodb.com/) Database
- [NGINX](https://nginx.org/) Web Server
- [Docker Compose](https://docs.docker.com/compose/) to package it up real nice and tidy for production
- HTTPS using [certbot](https://certbot.eff.org/) & [letsencrypt](https://letsencrypt.org/)
- Github actions to automate linting and building status checks for master and develop branches 
- ***OPTIONAL*** Automatic redeploy on your server for github pushes to master branch using [webhook](https://github.com/adnanh/webhook)
- ***OPTIONAL*** Automatic weekend dependency updates using [Renovate](https://github.com/apps/renovate) and [Renovate-Approve](https://github.com/apps/renovate)

## Requirements

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Editing

This project is broken up into 3 sub folders, all corresponding to their respective part of the MERN. 

- React files are located in `react-app/`
- Express files are located in `express-api/`
- MongoDB files are locally mounted in `mongo-db/` (you should never have to touch this folder)

### Local Development

For local development you're going to have to install [MongoDB](https://www.mongodb.com/) and [NGINX](https://nginx.org/) yourself and have them set up as their own services. I have included a sample [nginx.conf](https://gist.github.com/rag4214/2bf2e26c696f37928a22cc739f5239c4) that is made for this project. Any changes you do to the `react-app/nginx.conf` file make sure you mirror in the service `nginx.conf` so local development does not break.

### To Locally Develop the Application

1. Make sure both NGINX and MongoDB are running

1. Navigate to `react-app/` and run
```sh
npm start
```

2. Navigate to `express-api/` and run
```sh
npm start
```

Local development instances of the application will have the `NODE_ENV` environment variable set to `development`.

For example, if I needed to do something with cookies I would want the name to begin with `__Host`, but I can not do that with local development due to the lack of https. To get around that I would do something like

```js
const cookieName = `${process.env.NODE_ENV === 'development' ? '__Host-' : ''}JWT`
```

## Setup

1. Edit the `server_name` in both `react-app/nginx.conf` server blocks by replacing `localhost` with your domain
```nginx
server {
  listen      80;
  listen      [::]:80;
  server_name example.com www.example.com *.example.com;

server {
  listen      443 ssl;
  listen      [::]:443 ssl;
  server_name example.com www.example.com *.example.com;
```

2. Edit `ssl_certificate` and `ssl_certificate_key` in `react-app/nginx.conf` by replacing `localhost` with your domain. Because of how nginx does their pathing, the easiest way is to do the non-www version. Don't fret, the certificates will be signed for both www and non-www versions
```nginx
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
```

3. Edit `init-letsencrypt.sh` with your domain and email address. Make sure the first domain in your list is the non-www version
```sh
domains=(example.com www.example.com)
...
email="example@example.com"
```

4. For nginx to start the first time it needs to perform the Let's Encrypt validation but nginx won't start if the certificates are missing. To get around this run 
```sh
chmod +x ./init-letsencrypt.sh

sudo ./init-letsencrypt.sh
``` 

### OPTIONAL Automatic Redeploy

1. Install [webhook](https://github.com/adnanh/webhook)

2. [Create a Github Webhook for your repository](https://developer.github.com/webhooks/creating/) with a Payload URL of `http://yourdomain:9000/hooks/redeploy-webhook` and a secret

3. Edit the `trigger-rule` block in `hooks.json` with your Github Webhook secret
```js
"trigger-rule": {
  "and": [
    {
      "match": {
        "type": "payload-hash-sha1",
        "secret": "mysecret", // Github Webhook secret
        "parameter": {
          "source": "header",
          "name": "X-Hub-Signature"
        }
      }
    },
```

4. Run 
```sh
chmod +x ./redeploy.sh

webhook -hooks hooks.json -verbose
```

### OPTIONAL Automatic Weekend Dependency Updates

1. Configure [Renovate](https://github.com/apps/renovate) for your repository

2. Configure [Renovate-Approve](https://github.com/apps/renovate-approve) for your repository

## Running

```sh
docker-compose up -d
```

This should now be hosed at `https://yourdomain` via nginx.