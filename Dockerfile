FROM node:alpine

WORKDIR /storage/doc/macc/frontend

COPY . /storage/doc/macc/frontend

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4201"]

EXPOSE 4201