FROM node:16-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . . # Copy all files, including public if it exists
EXPOSE 3000
CMD ["npm", "start"]
