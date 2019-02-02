FROM node:8.11

COPY . /Spoke
WORKDIR /Spoke
RUN yarn install && \
    yarn run prod-build

# Spoke Runtime
# WORKDIR /Spoke
EXPOSE 3000
CMD ["npm", "start"]
