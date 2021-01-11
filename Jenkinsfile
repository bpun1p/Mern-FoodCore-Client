pipeline {
    agent any
    environment {
        CI = 'true'
        VERSION = "$BUILD_NUMBER"
        PROJECT_NAME = "foodcore"
        IMAGE_NAME = "$PROJECT_NAME:$VERSION"
        ECRURL = "https://155950043310.dkr.ecr.us-east-2.amazonaws.com/foodcore"
        ECRCRED = "ecr:us-east-2:awscredentials"
    }
    tools {
        nodejs "node"
        'org.jenkinsci.plugins.docker.commons.tools.DockerTool' 'docker'
    }
    stages {
        stage("build frontend") {
            steps {
                dir("client") {
                    sh 'npm install'
                }
            }
        }
        stage("build backend") {
            steps {
                dir("server") {
                    sh 'npm install'
                }
            }
        }
        stage("test application") {
            steps {
                dir("client") {
                    sh 'npm test'
                }
            }
        }
        stage("checkout") {
            steps {
                checkout scm
            }
        }
        stage("build application") {
            steps {
                script {
                   def image = docker.build('$IMAGE_NAME')
                }
            }
        }
        stage("push to repository") {
            steps {
                script {
                    docker.withRegistry(ECURL, ECRCRED) {
                        image.push();
                    }
                }
            }
        }
    }
}