def gv
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
        stage("init") {
            steps {
                script {
                   gv = load "script.groovy"
                   CODE_CHANGES = gv.getGitChanges()
                }
            }
        }
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
        stage("build image") {
            when {
                expression {
                    script {
                        CODE_CHANGES == true
                    }
                }
            }
            steps {
                script {
                   image = docker.build('$IMAGE_NAME')
                }
            }
        }
        stage("push to repository") {
            when {
                expression {
                    script {
                        CODE_CHANGES == true
                    }
                }
            }
            steps {
                script {
                    docker.withRegistry(ECURL, ECRCRED) {
                        image.push();
                    }
                }
            }
        }
        stage("clean up image") {
            steps {
                sh "docker rmi $IMAGE_NAME"
            }
        }
    }
}