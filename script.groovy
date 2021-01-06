// def getGitChanges() {
//     if(currentBuild.changeSets.size() > 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

def buildServer() {
    sh 'npm install'
    echo 'building server side...'
}

def buildClient() {
    sh 'npm install'
    echo 'building client side...'
}

def testApp() {
    sh 'npm test'
    echo 'testing application'
}


return this

// def buildApp() {
//     echo 'building the application...'
// } 

// def testApp() {
//     echo 'testing the application...'
// } 

// def deployApp() {
//     echo 'deplying the application...'
//     echo "deploying version ${params.VERSION}"
// } 

// return this
