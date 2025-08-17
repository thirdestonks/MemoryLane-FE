FROM node:23

# Create working directory inside the container
WORKDIR /app

# Copy only dependency files first
COPY package.json pnpm-lock.yaml* ./

# Install pnpm and install frontend dependencies
RUN npm i -g pnpm && pnpm install

# Copy frontend source code
COPY . .

# Document internal port used in Nuxt dev
EXPOSE 3000

# Start the Nuxt dev server (compose will inject envs)
CMD ["sh", "-c", "pnpm run dev -- --port 3000 --host 0.0.0.0"]
