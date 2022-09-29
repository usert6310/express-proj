pipeline {
    agent any

    environment {
        TEXT_LOCATION = "./__tests__/test_files"
    }

    stages {
        stage("build") {
            steps {
                npm i -y
                npm run run-server
                sleep 30s
                echo "build complete"
            }
        }
        
        stage("test") {
            steps {
                echo "in test"
                npm test
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
