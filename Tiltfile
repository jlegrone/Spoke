docker_compose('./docker-compose.yml')

spoke = docker_build('spokeapp/spoke', '.')

# Specify how to update the image in place
# spoke.add('./server/static', '/server/static')  # copy over static files
# spoke.add('./server/app', '/server/app')  # copy over app files
# spoke.run('pip install -r /server/app/requirements.txt',
#           trigger='./server/app/requirements.txt')  # if requirements have changed, pip install
