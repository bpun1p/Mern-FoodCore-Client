def gv
CODE_CHANGES = gv.getGitChanges()

pipeline {
    agent any
    stages {
        stage("init") {
            steps {
                script {
                    gv = load "script.groovy"
                }
            }
        }
        stage("build") {
            steps {
                // dir('/client') {
                //     script {
                //         gv.buildClient()
                //     }
                // }
                // dir('/server') {
                //     script {
                //         gv.buildServer()
                //     }
                echo 'building application'
                }
            }
        }

        stage("test") {
            when {
                expression {
                    script {
                        BRANCH_NAME == "feature-jenkins" && CODE_CHANGES == true
                    }
                }
            }
            steps {
                script {
                    gv.testApp()
                }
            }

        }

        stage("deploy") {
            when {
                expression {
                    script {
                        BRANCH_NAME == "feature-jenkins" && CODE_CHANGES == true
                    }
                }
            }
            steps {
                sh 'docker build -t foodcore:1.0 .'
                echo 'creating docker image foodcore:1.0'
                echo 'deploying the application...'
            }

        }
        
    }

}