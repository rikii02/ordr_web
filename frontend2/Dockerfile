FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

# Instala axios específicamente
RUN npm install axios

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
