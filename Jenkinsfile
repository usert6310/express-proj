pipeline {
    agent any

    environment {
        TEXT_LOCATION = "./__tests__/test_files"
    }

    //tools {
      //  NodeJS "Node"
    //}
    stages {
        stage("build") {

            steps {
                sh """
                npm i -y
                """
                sh """
                npm run run-server & wait-on http://localhost:8080
                """

                //npm run run-server
                //sleep 30s
                echo "build complete"
                //echo $TEXT_LOCATION
            }
        }
        
        stage("test") {
            steps {
                echo "in test"
                //npm test
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
    