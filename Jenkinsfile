def gv
CODE_CHANGES = getGitChanges();
pipeline {
    options {
        timestamps()
    }

    enviroment {
        CI = 'true'
    }

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
                sh 'npm install'
                echo 'building the application...'
            }
        }

        stage("test") {
            when {
                expression {
                    BRANCH_NAME == 'Main' && CODE_CHANGES == true
                }
            }
            steps {
                sh 'npm test'
                echo 'testing the application...'
            }

        }

        stage("deploy") {
            when {
                expression {
                    BRANCH_NAME == 'Main' && CODE_CHANGES == true
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