FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY public ./public
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
