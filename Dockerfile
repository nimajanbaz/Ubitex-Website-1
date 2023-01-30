FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package*.json ./
RUN npm install
# RUN npm run build
COPY . .
EXPOSE 8065
# RUN chown -R node /app
# USER node
CMD ["npm", "start"]
