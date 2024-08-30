FROM node:22.4.1-alpine AS build
WORKDIR /usr/src
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM nginx:stable
COPY default.conf /etc/nginx/conf.d
COPY --from=build /usr/src/dist/book-list-front-end /usr/share/nginx/html
EXPOSE 80
