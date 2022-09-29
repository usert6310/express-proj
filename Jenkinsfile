pipeline {
    agent any

    tools {
        nodejs "Node"
    }

    stages {
        stage("build") {

            steps {
                sh """
                npm i -y
                """

                echo "build complete"

            }
        }
        
        stage("test") {
            steps {
                echo "in test"
                sh """
                npm test
                """
                sh """
                npm test-server
                """
            }
        }
        stage("deploy") {
            steps {
                echo "ready to deploy "
            }
        }
        }
}
   