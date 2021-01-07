def gv

pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        CI = 'true'
    }
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
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
                    echo 'building client'
                }
            }
        }
        stage("build backend") {
            steps {
                dir("server") {
                    sh 'npm install'
                    echo 'building server...'
                }
            }
        }
        stage("test") {
            when {
                expression {
                    script {
                        env.BRANCH_NAME.toString().equals('feature-jenkins') && CODE_CHANGES == false
                    }
                }
            }
            steps {
                dir("client") {
                    sh 'npm test'
                    echo 'testing application...'
                }
            }
        }
        stage("deploy") {
            steps {
                script {
                    gv.deployApp()
                }
            }
        }
    }   
}