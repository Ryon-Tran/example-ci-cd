FROM node:18-alpine

WORKDIR /app

# Copy package.json và package-lock.json trước để cache dependency
COPY package*.json ./

# Cài dependencies production
RUN npm ci --only=production

# Copy toàn bộ source code
COPY . .

# Biến môi trường
ENV NODE_ENV=production
ENV PORT=3000

# Mở port ứng dụng
EXPOSE 3000

# Chạy ứng dụng
CMD ["node", "server.js"]
