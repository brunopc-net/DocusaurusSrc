docker build -t brunopc-blog .
docker run -d -p 3000:3000 -v /app/node_modules -v ${PWD}:/app -e WATCHPACK_POLLING=true brunopc-blog:latest