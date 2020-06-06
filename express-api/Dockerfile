# --- Express Server --- #
FROM node:12

WORKDIR /express-api

COPY package*.json ./
RUN npm install --silent

COPY . ./

RUN openssl genrsa -out jwt_private.pem 2048
RUN openssl rsa -in jwt_private.pem -pubout > jwt_public.pem

EXPOSE 3000
CMD ["npm", "run", "build"]