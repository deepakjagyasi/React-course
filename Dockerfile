FROM node:14-alpine3.12
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 5000
CMD ["npm" , "start"]
