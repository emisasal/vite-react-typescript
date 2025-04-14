pipeline {
    agent any

    tools {
        nodejs 'Node18' // Match the name you configured
    }

    environment {
        APP_DIR = 'vite-react-typescript'
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Prashasync/vite-react-typescript.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def deployDir = "/var/www/html/${APP_DIR}"
                    sh "sudo rm -rf ${deployDir}"
                    sh "sudo mkdir -p ${deployDir}"
                    sh "sudo cp -r dist/* ${deployDir}/"
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Build/Deployment Failed'
        }
    }
}
