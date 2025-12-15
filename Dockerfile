FROM node:20-alpine
WORKDIR /my-protfolio/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /my-protfolio/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]