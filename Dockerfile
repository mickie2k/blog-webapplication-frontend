FROM node:lts AS deps

WORKDIR /app

COPY package.json package-lock.json ./
COPY tsconfig.json .
RUN npm install --ignore-scripts

FROM node:lts AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
COPY .env.production .env.production

RUN npm run build

FROM node:lts AS final

ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder  /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static


EXPOSE 3000


CMD ["node", "server.js"]