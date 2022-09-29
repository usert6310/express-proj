pipeline {
    agent any

    environment {
        TEXT_LOCATION = "./__tests__/test_files"
    }

    stages {
        stage("build") {
            steps {
                npm i -y
                echo "inbuild"
            }
        }
        
        stage("test") {
            steps {
                echo "in test"
                npm test
                npx cypress run
            }
        }
        stage("deploy") {
            steps {
                echo "ready to deploy "
            }
        }
        }
    }
