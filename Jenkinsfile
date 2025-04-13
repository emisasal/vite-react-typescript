pipeline {
    agent any

    environment {
        NODE_ENV = 'Node20'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure Node.js and npm are installed on the Jenkins agent
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build the Vite project
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                script {
                    // Archive the build artifacts (e.g., the dist folder)
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh 'docker build -t react-vite-app .'
                }
            }
        }
    }

}