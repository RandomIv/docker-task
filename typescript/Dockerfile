FROM node:18-alpine

RUN apk add --no-cache dumb-init

WORKDIR /usr/src/app

RUN addgroup -g 1001 -S nodejs


RUN adduser -S nestjs -u 1001

COPY package*.json ./


RUN npm ci --only=production && npm cache clean --force

COPY prisma ./prisma/

RUN npx prisma generate

COPY . .

RUN npm run build

RUN chown -R nestjs:nodejs /usr/src/app



USER nestjs


EXPOSE 3000

CMD ["dumb-init", "node", "dist/main"]