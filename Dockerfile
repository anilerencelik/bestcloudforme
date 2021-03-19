FROM alpine:latest

RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

WORKDIR /app

COPY . /app

RUN yarn

EXPOSE 3000

ENTRYPOINT ["yarn"]

CMD ["start"]
