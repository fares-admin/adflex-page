FROM node:lts as dependencies
WORKDIR /adflex-fe
COPY package.json ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /adflex-fe
COPY . .
COPY --from=dependencies /adflex-fe/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /adflex-fe
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /adflex-fe/next.config.js ./
COPY --from=builder /adflex-fe/public ./public
COPY --from=builder /adflex-fe/.next ./.next
COPY --from=builder /adflex-fe/node_modules ./node_modules
COPY --from=builder /adflex-fe/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]