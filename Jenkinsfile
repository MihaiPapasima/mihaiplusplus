pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        IMAGE_NAME = 'mihaiplusplus'
        MAX_IMAGES = 3
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
            }
        }

        stage('Tag Latest') {
            steps {
                sh "docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest"
            }
        }

        stage('Cleanup Old Images') {
            steps {
                sh """
                    # Get all numeric tags for this image, sorted descending, skip the 3 newest
                    OLD_TAGS=\$(docker images ${IMAGE_NAME} --format '{{.Tag}}' \
                        | grep -E '^[0-9]+\$' \
                        | sort -rn \
                        | tail -n +\$(( ${MAX_IMAGES} + 1 )))

                    if [ -n "\$OLD_TAGS" ]; then
                        for TAG in \$OLD_TAGS; do
                            echo "Removing ${IMAGE_NAME}:\$TAG"
                            docker rmi ${IMAGE_NAME}:\$TAG
                        done
                    else
                        echo "No old images to remove."
                    fi
                """
            }
        }
    }

    post {
        success {
            echo "Image ${IMAGE_NAME}:${BUILD_NUMBER} built successfully."
        }
        failure {
            echo "Build failed. Cleaning up dangling build image if it exists."
            sh "docker rmi ${IMAGE_NAME}:${BUILD_NUMBER} || true"
        }
    }
}
