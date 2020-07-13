# Version 0.0.1
FROM ubuntu
RUN apt-get update && apt-get install -y nginx
RUN echo 'hi, i am in you container' \
    >/var/www/html/index.html
EXPOSE 80