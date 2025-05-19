pipeline {
    agent any
    stages {
        stage('Build Docker image') {
            steps {
                script {
                    docker.build("travel-app:latest")
                }
            }
        }
        stage('Run Docker container') {
            steps {
                script {
                    sh "docker rm -f travel-app-test || true"
                    sh "docker run -d --name travel-app-test -p 3000:3000 travel-app:latest"
                    sleep 5
                }
            }
        }
        stage('Test /travel endpoint') {
            steps {
                script {
                    sh '''
                        RESPONSE=$(curl -s http://localhost:3000/travel)
                        echo "Endpoint response: $RESPONSE"
                        if [[ $RESPONSE != *"Jaapan"* ]]; then
                          echo "Endpoint check failed"
                          exit 1
                        fi
                    '''
                }
            }
        }
    }
    post {
        always {
            sh "docker rm -f travel-app-test || true"
        }
    }
}
