
FROM node:18-alpine 
#just defined my new structure here
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

CMD [ "npm","start" ]