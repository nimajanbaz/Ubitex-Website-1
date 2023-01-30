FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN curl -sf https://gobinaries.com/tj/node-prune | sh
RUN node-prune /usr/src/app/node_modules
RUN npm install
# RUN npm run build
COPY . .
EXPOSE 8065
# RUN chown -R node /app
# USER node
CMD ["npm", "start"]

