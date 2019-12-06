FROM nginx:alpine

WORKDIR /usr/share/nginx/html

## Remove default nginx website
RUN rm -rf *

## Copy website to default nginx public folder
COPY ./index.html .
COPY ./contracts ./contracts
COPY ./assets ./assets
COPY ./build ./build
COPY ./icon.png .

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]