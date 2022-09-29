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
                sh """
                nohup npm run run-server 
                """

                echo "build complete"

            }
        }
        
        stage("test") {
            steps {
                echo "in test"
                
                //sh """
                //npm test
                //"""
                
                //cypress run
            }
        }
        stage("deploy") {
            steps {
                echo "ready to deploy "
            }
        }
        }
}
    