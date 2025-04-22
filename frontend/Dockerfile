FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY src ./src
COPY public ./public
COPY .env .env # If you have an environment file
EXPOSE 3000
CMD ["npm", "start"]
