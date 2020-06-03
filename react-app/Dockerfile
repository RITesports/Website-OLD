# --- React Build --- #
FROM node:12-alpine as build

WORKDIR /react-app

COPY package*.json ./
RUN npm install --silent

COPY . ./
RUN npm run build

# --- Nginx Server --- #
FROM nginx

COPY --from=build /react-app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD /bin/sh -c "while :; do sleep 6h & wait ${!}; nginx -s reload; done & nginx -g \"daemon off;\""