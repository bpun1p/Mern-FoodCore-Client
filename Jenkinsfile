// def gv

// pipeline {
//     agent any
//     parameters {
//         choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
//         booleanParam(name: 'executeTests', defaultValue: true, description: '')
//     }
//     stages {
//         stage("init") {
//             steps {
//                 script {
//                    gv = load "script.groovy" 
//                 }
//             }

//         stage("build") {
//             steps {
//                 // dir('/client') {
//                     script {
//                         gv.buildClient()
//                     }
//                 // }
//                 // dir('/server') {
//                     script {
//                         gv.buildServer()
//                     }
//                 // }
//             }
//         }

//         stage("test") {
//             // when {
//             //     expression {
//             //         script {
//             //             BRANCH_NAME == "feature-jenkins" && CODE_CHANGES == true
//             //         }
//             //     }
//             // }
//             steps {
//                 script {
//                     gv.testApp()
//                 }
//             }

//         }

//         stage("deploy") {
//             // when {
//             //     expression {
//             //         script {
//             //             BRANCH_NAME == "feature-jenkins" && CODE_CHANGES == true
//             //         }
//             //     }
//             // }
//             steps {
//                 // sh 'docker build -t foodcore:1.0 .'
//                 echo 'creating docker image foodcore:1.0'
//                 echo 'deploying the application...'
//             }

//         }
        
//     }

// }

def gv

pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
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
                dir("/client") {
                    sh 'npm install'
                    echo 'building client....'
                }
                dir("/server") {
                    sh 'npm install'
                    echo 'building server....'
                }
            }
        }
        stage("test") {
            when {
                expression {
                    params.executeTests
                }
            }
            steps {
                script {
                    gv.testApp()
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
