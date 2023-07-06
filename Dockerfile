FROM nginx:alpine
# Create app directory
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
RUN apt-get -y install nodejs
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm build
COPY . .
COPY ./build /usr/share/nginx/html

