# FROM node:15.1.0-alpine3.12 as builder
FROM node:10.23.0-alpine3.11 as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --verbose
RUN $(npm bin)/ng version
COPY . .
# make use of the ng binary installed from package.json (there is no global one)
RUN $(npm bin)/ng build --prod

### PROD image

FROM nginx:1.19.4-alpine
COPY ./deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ndb-core/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
