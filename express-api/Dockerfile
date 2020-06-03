# --- Express Server --- #
FROM node:12-alpine

WORKDIR /express-api

COPY package*.json ./
RUN npm install --silent

COPY . ./

EXPOSE 3000
CMD ["npm", "run", "build"]