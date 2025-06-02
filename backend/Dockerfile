FROM node:18

WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

EXPOSE 3000
