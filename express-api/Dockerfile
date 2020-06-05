# --- Express Server --- #
FROM node:12-alpine

WORKDIR /express-api

COPY package*.json ./
RUN npm install --silent

COPY . ./

RUN openssl genrsa -out private.pem 2048
RUN openssl rsa -in private.pem -pubout > public.pem

EXPOSE 3000
CMD ["npm", "run", "build"]