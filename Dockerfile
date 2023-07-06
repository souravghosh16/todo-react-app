# Fetching the latest node image on apline linux
FROM node:alpine AS builder


# Setting up the work directory

# Installing dependencies
COPY . .

RUN npm install --force


# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx

# Copying built assets from builder
COPY --from=builder /build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

