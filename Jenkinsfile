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
        stage('Environment Info') {
            steps {
                sh 'echo "=== Docker ===" && docker --version || echo "docker NOT found"'
                sh 'echo "=== Docker Socket ===" && ls -la /var/run/docker.sock || echo "docker socket NOT mounted"'
                sh 'echo "=== Docker Daemon ===" && docker ps > /dev/null && echo "docker daemon accessible" || echo "docker daemon NOT accessible"'
                sh 'echo "=== Node ===" && node --version || echo "node NOT found"'
                sh 'echo "=== pnpm ===" && pnpm --version || echo "pnpm NOT found"'
                sh 'echo "=== Port 3000 ===" && ss -tlnp | grep :3000 || echo "port 3000 is free"'
            }
        }

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

        stage('Test') {
            steps {
                sh "docker network create ${IMAGE_NAME}-test-net-${BUILD_NUMBER}"
                sh """
                    docker run -d \
                        --name mihaiplusplus-test-${BUILD_NUMBER} \
                        --network ${IMAGE_NAME}-test-net-${BUILD_NUMBER} \
                        ${IMAGE_NAME}:${BUILD_NUMBER}
                """
                sh """
                    docker run --rm \
                        --network ${IMAGE_NAME}-test-net-${BUILD_NUMBER} \
                        -v \${WORKSPACE}:/work \
                        -w /work \
                        -e CI=true \
                        -e BASE_URL=http://mihaiplusplus-test-${BUILD_NUMBER}:3000 \
                        mcr.microsoft.com/playwright:v1.58.2-noble \
                        sh -c "npm install -g pnpm && pnpm install --frozen-lockfile && pnpm test"
                """
            }
            post {
                always {
                    sh "docker stop mihaiplusplus-test-${BUILD_NUMBER} || true"
                    sh "docker rm mihaiplusplus-test-${BUILD_NUMBER} || true"
                    sh "docker network rm ${IMAGE_NAME}-test-net-${BUILD_NUMBER} || true"
                    junit testResults: 'test-results/junit.xml', allowEmptyResults: true
                }
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
