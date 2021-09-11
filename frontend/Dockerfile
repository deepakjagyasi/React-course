FROM node:15.13-alpine
WORKDIR /frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm install
ENV PORT=3000
EXPOSE 3000
CMD ["npm","start"]
